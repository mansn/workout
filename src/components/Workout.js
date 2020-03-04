import React from 'react';
import Exercise from './exercise/Exercise';
import { workouts } from '../resources/workoutsFull.json';

const Workout = () => {
  return (
    <div className="workout-program">
      {workouts.map(({ title, exercises }, i) => {
        return (
          <div className="workout" key={i}>
            <fieldset>
              <legend>{title}</legend>
              <ul className="exercises">
                {exercises.map(({ title, weights, reps, sets, recommendedReps }, i) => {
                  return (
                    <Exercise
                      title={title}
                      weights={weights}
                      reps={reps}
                      recommendedReps={recommendedReps}
                      sets={sets}
                      key={i}
                    />
                  );
                })}
              </ul>
            </fieldset>
          </div>
        );
      })}
    </div>
  );
};

export default Workout;
