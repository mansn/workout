import React, { useState, useEffect } from 'react';
import Exercise from './Exercise';
import { workoutList } from '../resources/workoutsFull.json';

const Workout = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    if (workouts.length === 0) {
      setWorkouts(workoutList);
    }
  }, [workoutList]);

  return (
    <div className="workout-program">
      {workouts.map(({ title, exercises }, workoutId) => {
        return (
          <div className="workout" key={workoutId}>
            <fieldset>
              <legend>{title}</legend>
              <ul className="exercises">
                {exercises.map(
                  ({ title, weights, reps, sets, recommendedReps, currentResult }, exerciseId) => {
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
      })}
    </div>
  );
};

export default Workout;
