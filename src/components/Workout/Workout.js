import React, { useState, useEffect } from 'react'
import Exercise from '../Exercise/Exercise'
import axios from 'axios'
import dummyData from '../../mocks/workoutData.json'
import DummyDataDisclaimer from '../DummyDataDisclaimer/DummyDataDisclaimer'
import Loading from '../Loading/Loading'
import styles from './Workout.module.css'

const Workout = ({ guestUser, isLoading }) => {
  const [workoutData, setWorkoutData] = useState([])
  const [status, setStatus] = useState('LOADING')

  useEffect(() => {
    let canceled = false
    if (isLoading) {
      return
    }

    if (status === 'LOADING') {
      if (guestUser) {
        setWorkoutData(dummyData.workouts)
        setStatus('LOADED')
      } else {
        axios('/api/get-all-workouts').then(result => {
          if (canceled === true) return

          if (result.status !== 200) {
            return
          }

          setWorkoutData(result.data.workouts)
          setStatus('LOADED')
        })
      }
    }

    return () => {
      canceled = true
    }
  }, [status])

  return (
    <>
      {status === 'LOADING' ? (
        <Loading />
      ) : (
        <>
          {guestUser && <DummyDataDisclaimer />}
          <div className={styles['workout-program']}>
            {workoutData.map(({ title, exercises }, workoutId) => {
              return (
                <div className={styles.workout} key={workoutId}>
                  <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>{title}</legend>
                    <ul className={styles.exercises}>
                      {exercises.data.map(
                        ({ title, weights, reps, sets, recommendedReps, currentResult, _id }) => {
                          return (
                            <Exercise
                              title={title}
                              weights={weights}
                              reps={reps}
                              recommendedReps={recommendedReps}
                              currentResult={currentResult}
                              sets={sets}
                              key={_id}
                              workoutData={workoutData}
                              exerciseId={_id}
                              workoutId={parseInt(workoutId + 1)}
                              setWorkoutData={setWorkoutData}
                            />
                          )
                        }
                      )}
                    </ul>
                  </fieldset>
                </div>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}

export default Workout
