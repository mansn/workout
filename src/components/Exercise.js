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

    axios.post('/api/update-exercise', {
      id: exerciseId,
      title,
      weights: [5, 10, 15],
      reps,
      sets,
      currentResult: {
        create: currentResult.data.map(result => {
          delete result._id
          return result
        })
      }
    })
  }

  const inputFields = []
  for (let i = 0; i < sets; i++) {
    inputFields.push(
      <div className="exercise-input" key={`${title}-set-${i}`}>
        <label>
          <Input
            name="reps"
            id={`${title}-reps-${i}`}
            data={reps}
            currentValue={currentResult.data[i].reps}
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
            currentValue={currentResult.data[i].weight}
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
