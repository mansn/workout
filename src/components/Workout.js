import React, { useState, useEffect } from 'react'
import Exercise from './Exercise'
import axios from 'axios'

const Workout = () => {
  const [workouts, setWorkouts] = useState([])
  const [status, setStatus] = useState('LOADING')

  useEffect(() => {
    let canceled = false
    if (status === 'LOADING') {
      axios('/api/get-all-workouts').then(result => {
        if (canceled === true) return

        if (result.status !== 200) {
          return
        }

        setWorkouts(result.data.workouts)
        setStatus('LOADED')
      })
    }

    return () => {
      canceled = true
    }
  }, [status])

  return (
    <>
      <div className="workout-program">
        {status === 'LOADING' ? (
          <div className="loading-container">
            <div className="loading-animate">🏋️‍♂️</div>
            <p>Loading...</p>
            <div className="loading-animate">🏋️‍♂️</div>
          </div>
        ) : (
          workouts.map(({ title, exercises }, workoutId) => {
            return (
              <div className="workout" key={workoutId}>
                <fieldset>
                  <legend>{title}</legend>
                  <ul className="exercises">
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
                            workouts={workouts}
                            exerciseId={_id}
                            workoutId={parseInt(workoutId + 1)}
                            setWorkouts={setWorkouts}
                          />
                        )
                      }
                    )}
                  </ul>
                </fieldset>
              </div>
            )
          })
        )}
      </div>
    </>
  )
}

export default Workout
