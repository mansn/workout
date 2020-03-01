import React from 'react';
import Exercise from './exercise/Exercise';

const Workout = () => {
  return (
    <div className="workout-program">
      <div className="workout">
        <fieldset>
          <legend>Workout A - Back & Shoulders</legend>
          <ul className="exercises">
            <Exercise header="Deadlift" repsRange={{min: 4, max: 5}} sets={3}></Exercise>
            <Exercise header="Military Press" repsRange={{min: 8, max: 12}} sets={3}></Exercise>
            <Exercise header="Sidolyft" repsRange={{min: 8, max: 12}} sets={3}></Exercise>
            <Exercise header="Chin-ups" repsRange={{min: 6, max: 8}} sets={3}></Exercise>
            <Exercise header="Row" repsRange={{min: 6, max: 8}} sets={3}></Exercise>
            <Exercise header="Rygglyft" repsRange={{min: 8, max: 12}} sets={3}></Exercise>
          </ul>
        </fieldset>
      </div>
      <div className="workout">
        <fieldset className="exercises">
          <legend>Workout B - Disco</legend>
          <ul className="exercises">
            <Exercise header="Bench Press" repsRange={{min: 6, max: 8}} sets={3}></Exercise>
            <Exercise header="Inc. Bench Press" repsRange={{min: 6, max: 8}} sets={3}></Exercise>
            <Exercise header="Barbell Curl" repsRange={{min: 6, max: 8}} sets={3}></Exercise>
            <Exercise header="Pushdowns" repsRange={{min: 6, max: 8}} sets={3}></Exercise>
          </ul>
        </fieldset>
      </div>
      <div className="workout">
        <fieldset className="exercises">
          <legend>Workout C - #Legday</legend>
          <ul className="exercises">
            <Exercise header="Placeholder" repsRange={{min: 8, max: 12}} sets={3}></Exercise>
            <Exercise header="Placeholder" repsRange={{min: 8, max: 12}} sets={3}></Exercise>
            <Exercise header="Placeholder" repsRange={{min: 8, max: 12}} sets={3}></Exercise>
            <Exercise header="Placeholder" repsRange={{min: 8, max: 12}} sets={3}></Exercise>
            <Exercise header="Placeholder" repsRange={{min: 8, max: 12}} sets={3}></Exercise>
            <Exercise header="Placeholder" repsRange={{min: 8, max: 12}} sets={3}></Exercise>
          </ul>
        </fieldset>
      </div>
    </div>
  );
};

export default Workout;
