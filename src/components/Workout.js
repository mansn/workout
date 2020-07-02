import React, { useState, useEffect } from 'react';
import Exercise from './Exercise';
import axios from 'axios';
// import { workoutList } from "../resources/workoutsFull.json";

const Workout = () => {
  const [workouts, setWorkouts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let canceled = false;
    // if (workouts.length === 0) {
    //   setWorkouts(workoutList);
    // }
    axios('/api/get-all-workouts').then(result => {
      if (canceled === true) return;

      if (result.status !== 200) {
        return;
      }

      setWorkouts(result.data.workouts);
      setStatus('loaded');
    });

    return () => {
      canceled = true;
    };
  }, [status]);

  return (
    <div className="workout-program">
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        workouts.map(({ title, exercises }, workoutId) => {
          return (
            <div className="workout" key={workoutId}>
              <fieldset>
                <legend>{title}</legend>
                <ul className="exercises">
                  {exercises.data.map(
                    (
                      { title, weights, reps, sets, recommendedReps, currentResult },
                      exerciseId
                    ) => {
                      return (
                        <Exercise
                          title={title}
                          weights={weights}
                          reps={reps}
                          recommendedReps={recommendedReps}
                          currentResult={currentResult}
                          sets={sets}
                          key={exerciseId}
                          workouts={workouts}
                          exerciseId={parseInt(exerciseId)}
                          workoutId={parseInt(workoutId + 1)}
                          setWorkouts={setWorkouts}
                        />
                      );
                    }
                  )}
                </ul>
                <button className="save">Save</button>
              </fieldset>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Workout;
