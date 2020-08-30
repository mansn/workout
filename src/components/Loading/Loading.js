import React from 'react'
import styles from './Loading.module.css'

const Loading = () => (
  <div className={styles.container}>
    <div className={styles.animate}>🏋️‍♂️</div>
    <p>Loading...</p>
    <div className={styles.animate}>🏋️‍♂️</div>
  </div>
)

export default Loading
