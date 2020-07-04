import React from 'react'
import axios from 'axios'
import styles from './createExercise.module.css'

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
      <button className={styles.button}>Save Exercise</button>
    </form>
  )
}

export default createExercise
