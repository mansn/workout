import React from 'react'
import styles from './Workout.module.css'

const Workout = ({ title, children }) => (
  <div className={styles.workout}>
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{title}</legend>
      <ul className={styles.exercises}>{children}</ul>
    </fieldset>
  </div>
)

export default Workout
