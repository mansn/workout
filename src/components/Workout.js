import React from 'react';
import Exercise from './Exercise';

const Workout = () => {
  return (
    <div className="workout-program">
      <div className="workout">
        <h2>Workout A - Back & Shoulders</h2>
        <Exercise header="Exercise: Deadlift (3x 4-5)" sets={3}></Exercise>
        <Exercise header="Exercise: Military Press (3x 8-12)" sets={3}></Exercise>
        <Exercise header="Exercise: Sidolyft (3x 8-12)" sets={3}></Exercise>
        <Exercise header="Exercise: Chin-ups (3x 6-8)" sets={3}></Exercise>
        <Exercise header="Exercise: Row (3x 6-8)" sets={3}></Exercise>
        <Exercise header="Exercise: Rygglyft (3x 8-12)" sets={3}></Exercise>
      </div>
      <div className="workout">
        <h2>Workout B - Disco</h2>
        <div className="exercise">Exercise: Rygglyft</div>
        <div className="exercise">Exercise: Rygglyft</div>
        <div className="exercise">Exercise: Rygglyft</div>
        <div className="exercise">Exercise: Rygglyft</div>
        <div className="exercise">Exercise: Rygglyft</div>
      </div>

      <div className="workout">
        <h2>Workout C - #Legday</h2>
        <div className="exercise">Exercise: Rygglyft</div>
        <div className="exercise">Exercise: Rygglyft</div>
        <div className="exercise">Exercise: Rygglyft</div>
        <div className="exercise">Exercise: Rygglyft</div>
        <div className="exercise">Exercise: Rygglyft</div>
      </div>
    </div>
  );
};

export default Workout;
