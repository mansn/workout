import React, { useState, useEffect } from 'react'
import Exercise from './Exercise'
import axios from 'axios'
import dummyData from '../mocks/workoutData.json'
import DummyDataDisclaimer from '../components/DummyDataDisclaimer/DummyDataDisclaimer'

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

  const WorkoutProgram = () => {
    return workoutData.map(({ title, exercises }, workoutId) => {
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
    })
  }

  return (
    <>
      {status === 'LOADING' ? (
        <div className="loading-container">
          <div className="loading-animate">🏋️‍♂️</div>
          <p>Loading...</p>
          <div className="loading-animate">🏋️‍♂️</div>
        </div>
      ) : (
        <>
          {guestUser && <DummyDataDisclaimer />}
          <div className="workout-program">
            <WorkoutProgram />
          </div>
        </>
      )}
    </>
  )
}

export default Workout
