import React from 'react';
import DropDown from '../DropDown';

const Exercise = props => {
  const inputFields = [];
  for (let i = 0; i < props.sets; i++) {
    inputFields.push(
      <div className="exercise-input" key={`set-no-${i}`}>
        <label>
          <DropDown name="repetitions" id="reps" data={props.repsRange.max} />
        </label>
        <label>
          <select name="weight" id="weight">
            <option>70</option>
            <option>75</option>
            <option>80</option>
            <option>85</option>
            <option>90</option>
            <option>95</option>
            <option>100</option>
          </select>
        </label>
        <input placeholder="Comment..."></input>
      </div>
    );
  }

  return (
    <li className="exercise" key={props.header}>
      <div className="exercise-meta">
        <h3>{`${props.header}`}</h3>
        <h3>{`(${props.sets}x ${props.repsRange.min}-${props.repsRange.max})`}</h3>
      </div>
      {inputFields}
    </li>
  );
};

export default Exercise;
