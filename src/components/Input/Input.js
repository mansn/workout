import React from 'react'
import styles from './Input.module.css'

const Input = ({
  name,
  id,
  currentValue,
  unit = '',
  exerciseId,
  workoutId,
  workoutData,
  setWorkoutData,
  setModified
}) => {
  const updatedWorkouts = JSON.parse(JSON.stringify(workoutData))
  const set = parseInt(id[id.length - 1])

  const updateFieldValue = event => {
    const exercise = updatedWorkouts[workoutId - 1].exercises.data.find(
      exercise => exercise._id === exerciseId
    )
    if (exercise) {
      exercise.currentResult.data[set][name] = parseInt(event.target.value) || ''
      setModified(true)
      setWorkoutData(updatedWorkouts)
    }
  }

  // TODO: Add input validation which displays error text which says that you need to pass a numeric value
  return (
    <div style={{ gridArea: `${name}` }}>
      <label htmlFor={id}>
        <input
          className={styles.input}
          name={id}
          id={id}
          inputMode="numeric"
          pattern="[0-9]*"
          type="text"
          value={`${currentValue}`}
          onChange={updateFieldValue}
        />
      </label>
      <span style={{ marginLeft: -2.2 + 'rem', color: 'black' }}>{unit}</span>
    </div>
  )
}

export default Input
