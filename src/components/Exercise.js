import React, { useState } from 'react'
import axios from 'axios'
import Input from './Input/Input'
import SaveButton from './SaveButton'

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
  const [saveStatus, setSaveStatus] = useState('save')
  const handleSave = event => {
    setSaveStatus('saving')
    event.preventDefault()

    const result = currentResult.data.map(({ _id, weight, reps }) => {
      return { id: _id, weight, reps }
    })

    setTimeout(() => {
      setSaveStatus('saved')
    }, 1000)

    setTimeout(() => {
      setSaveStatus('save')
    }, 3000)

    // axios.post('/api/update-results', result).then(result => {
    //   if (result.status !== 200) {
    //     console.error('Error saving result!')
    //     console.error(result)
    //     return
    //   }

    //   setModified(false)
    //   setIsSaving(false)
    // })
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
        {modified && <SaveButton handleSave={handleSave} saveStatus={saveStatus} />}
      </li>
    </>
  )
}

export default Exercise
