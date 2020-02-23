import React from 'react';

const Exercise = props => {
  const inputFields = [];
  for (let i = 0; i < props.sets; i++) {
    inputFields.push(
      <div className="exercise-input" key={`set-no-${i}`}>
        <select name="reps" id="reps">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
        <select name="weight" id="weight">
          <option>70</option>
          <option>75</option>
          <option>80</option>
          <option>85</option>
          <option>90</option>
          <option>95</option>
          <option>100</option>
        </select>
        <input placeholder="Comment..."></input>
      </div>
    );
  }

  return (
    <li className="exercise" key={props.header}>
      <div className="exercise-meta">
        <h3>{`${props.header}`}</h3>
        <h3>{`(${props.sets}x ${props.repsRange})`}</h3>
      </div>
      {inputFields}
    </li>
  );
};

export default Exercise;
