import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

const Input = ({ name, id, data, currentValue, exerciseId, workoutId, workouts, setWorkouts }) => {
  const [modified, setModified] = useState(false)
  const [originalValue, setOriginalValue] = useState(0)
  const updatedWorkouts = JSON.parse(JSON.stringify(workouts))
  const set = parseInt(id[id.length - 1])

  useEffect(() => {
    setOriginalValue(currentValue)
  }, [originalValue])

  const UpdateFieldValue = event => {
    setModified(true)
    updatedWorkouts[workoutId - 1].exercises.data[exerciseId].currentResult.data[set][name] =
      parseInt(event.target.value) || 0
    setWorkouts(updatedWorkouts)
  }

  const postSave = () => {
    // TODO: Post value change to db?
    console.log('Saved value!')
    setOriginalValue(currentValue)
    setModified(false)
  }

  const undo = () => {
    updatedWorkouts[workoutId - 1].exercises.data[exerciseId].currentResult.data[set][
      name
    ] = parseInt(originalValue)
    setWorkouts(updatedWorkouts)
    setModified(false)
  }

  return (
    <>
      {modified ? (
        <div className={styles.container}>
          <input
            inputmode="numeric"
            pattern="[0-9]*"
            type="text"
            value={currentValue}
            onChange={UpdateFieldValue}
          />
          <button onClick={postSave}>Y</button>
          <button onClick={undo}>N</button>
        </div>
      ) : (
        <input
          inputmode="numeric"
          pattern="[0-9]*"
          type="text"
          value={currentValue}
          onChange={UpdateFieldValue}
        />
      )}
    </>
  )
}

export default Input
