import React from 'react'
import styles from './Input.module.css'

const Input = ({
  name,
  id,
  currentValue,
  exerciseId,
  workoutId,
  workouts,
  setWorkouts,
  setModified
}) => {
  const updatedWorkouts = JSON.parse(JSON.stringify(workouts))
  const set = parseInt(id[id.length - 1])

  const updateFieldValue = event => {
    const exercise = updatedWorkouts[workoutId - 1].exercises.data.find(
      exercise => exercise._id === exerciseId
    )
    if (exercise) {
      exercise.currentResult.data[set][name] = parseInt(event.target.value) || ''
      setModified(true)
      setWorkouts(updatedWorkouts)
    }
  }

  // TODO: Add input validation which displays error text which says that you need to pass a numeric value
  return (
    <>
      <input
        inputMode="numeric"
        pattern="[0-9]*"
        type="text"
        value={currentValue}
        onChange={updateFieldValue}
      />
    </>
  )
}

export default Input
