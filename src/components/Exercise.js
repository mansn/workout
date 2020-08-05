import React, { useState } from 'react'
import axios from 'axios'
import Input from './Input/Input'

const Exercise = ({
  title,
  sets,
  reps,
  currentResult,
  recommendedReps,
  workouts,
  exerciseId,
  workoutId,
  setWorkouts
}) => {
  const [modified, setModified] = useState(false)
  const handleSave = event => {
    event.preventDefault()

    currentResult.data.map(({ _id, weight, reps }) => {
      axios
        .post('/api/update-results', {
          id: _id,
          weight,
          reps
        })
        .then(result => {
          if (result.status !== 200) {
            console.error('Error saving result!')
            console.error(result)
            return
          }

          setModified(false)
        })
    })
  }

  const inputFields = []
  const sortedResults = [].concat(currentResult.data).sort((resultA, resultB) => {
    return resultA.setNo - resultB.setNo
  })

  for (let i = 0; i < currentResult.data.length; i++) {
    inputFields.push(
      <div className="exercise-input" key={`${title}-set-${i}`}>
        <label>
          <Input
            name="reps"
            id={`${title}-reps-${i}`}
            data={reps}
            currentValue={sortedResults[i].reps}
            workouts={workouts}
            exerciseId={exerciseId}
            workoutId={workoutId}
            setWorkouts={setWorkouts}
            setModified={setModified}
          />
        </label>
        <label>
          <Input
            name="weight"
            id={`${title}-weight-${i}`}
            currentValue={sortedResults[i].weight}
            workouts={workouts}
            exerciseId={exerciseId}
            workoutId={workoutId}
            setWorkouts={setWorkouts}
            setModified={setModified}
          />
        </label>
        <input placeholder="Comment..."></input>
      </div>
    )
  }
  return (
    <>
      <li className="exercise">
        <div className="exercise-meta">
          <h3>{`${title}`}</h3>
          <h3>{`(${sets}x ${recommendedReps.min}-${recommendedReps.max})`}</h3>
        </div>
        {inputFields}
        {modified && (
          <button className="save" onClick={handleSave}>
            Save
          </button>
        )}
      </li>
    </>
  )
}

export default Exercise
