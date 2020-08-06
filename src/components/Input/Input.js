import React from 'react'
import styles from './styles.module.css'

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

  const UpdateFieldValue = event => {
    const exercise = updatedWorkouts[workoutId - 1].exercises.data.find(
      exercise => exercise._id === exerciseId
    )
    if (exercise) {
      exercise.currentResult.data[set][name] = parseInt(event.target.value) || 0
      setModified(true)
      setWorkouts(updatedWorkouts)
    }
  }

  return (
    <input
      inputMode="numeric"
      pattern="[0-9]*"
      type="text"
      value={currentValue}
      onChange={UpdateFieldValue}
    />
  )
}

export default Input
