import React from 'react';
import DropDown from '../DropDown';

const Exercise = props => {
  const inputFields = [];
  for (let i = 0; i < props.sets; i++) {
    inputFields.push(
      <div className="exercise-input" key={`${props.title}-set-${i}`}>
        <label>
          <DropDown
            name="repetitions"
            id={`${props.title}-reps-${i}`}
            data={props.reps}
            currentValue={props.currentResult[i + 1].reps}
          />
        </label>
        <label>
          <DropDown name="weight" id={`${props.title}-weight-${i}`} data={props.weights} currentValue={props.currentResult[i + 1].weight}/>
        </label>
        <input placeholder="Comment..."></input>
      </div>
    );
  }
  return (
    <li className="exercise">
      <div className="exercise-meta">
        <h3>{`${props.title}`}</h3>
        <h3>{`(${props.sets}x ${props.recommendedReps.min}-${props.recommendedReps.max})`}</h3>
      </div>
      {inputFields}
    </li>
  );
};

export default Exercise;
