import React from 'react';
import Exercise from './Exercise';

const Workout = () => {
  return (
    <div className="workout-program">
      <div className="workout">
        <fieldset className="exercises">
          <legend>Workout A - Back & Shoulders</legend>
          <Exercise header="Deadlift" repsRange="4-5" sets={3}></Exercise>
          <Exercise header="Military Press" repsRange="8-12" sets={3}></Exercise>
          <Exercise header="Sidolyft" repsRange="8-12" sets={3}></Exercise>
          <Exercise header="Chin-ups" repsRange="6-8" sets={3}></Exercise>
          <Exercise header="Row" repsRange="6-8" sets={3}></Exercise>
          <Exercise header="Rygglyft" repsRange="8-12" sets={3}></Exercise>
        </fieldset>
      </div>
      <div className="workout">
        <fieldset className="exercises">
          <legend>Workout B - Disco</legend>
          <Exercise header="Placeholder" repsRange="8-12" sets={3}></Exercise>
          <Exercise header="Placeholder" repsRange="8-12" sets={3}></Exercise>
          <Exercise header="Pladeholder" repsRange="8-12" sets={3}></Exercise>
          <Exercise header="Pladeholder" repsRange="8-12" sets={3}></Exercise>
          <Exercise header="Pladeholder" repsRange="8-12" sets={3}></Exercise>
          <Exercise header="Pladeholder" repsRange="8-12" sets={3}></Exercise>
        </fieldset>
      </div>
      <div className="workout">
        <fieldset className="exercises">
          <legend>Workout C - #Legday</legend>
          <Exercise header="Placeholder" repsRange="8-12" sets={3}></Exercise>
          <Exercise header="Pladeholder" repsRange="8-12" sets={3}></Exercise>
          <Exercise header="Pladeholder" repsRange="8-12" sets={3}></Exercise>
          <Exercise header="Pladeholder" repsRange="8-12" sets={3}></Exercise>
          <Exercise header="Pladeholder" repsRange="8-12" sets={3}></Exercise>
          <Exercise header="Pladeholder" repsRange="8-12" sets={3}></Exercise>
        </fieldset>
      </div>
    </div>
  );
};

export default Workout;
