import React from 'react'
import axios from 'axios'
import styles from './styles.module.css'

const handleSubmit = event => {
  event.preventDefault()

  axios.post('/api/create-exercise', {
    title: 'Testing 4',
    weights: [5, 10, 15],
    reps: [...Array(26).keys()].splice(1),
    sets: 3,
    recommendedReps: { connect: '266796450843722245' },
    currentResult: {
      create: [
        { weight: 0, reps: 25 },
        { weight: 0, reps: 14 },
        { weight: 0, reps: 13 }
      ]
    },
    Workout: { connect: '265714859620958720' }
  })
}

const createExercise = () => {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Title
        <input type="text" className={styles.input} />
      </label>
      <label className={styles.label}>
        Weights
        <input type="text" className={styles.input} />
      </label>
      <label className={styles.label}>
        Reps
        <input type="text" className={styles.input} />
      </label>
      <label className={styles.label}>
        Sets
        <input type="text" className={styles.input} />
      </label>
      <label className={styles.label}>
        Recommended Reps Range
        <input type="text" className={styles.input} />
      </label>
      <button className={styles.button} onClick={handleSubmit}>
        Save Exercise
      </button>
    </form>
  )
}

export default createExercise
