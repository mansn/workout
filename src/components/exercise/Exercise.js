import React, { useReducer } from 'react';

const INITIAL_STATE = {
  reps: 1,
  weight: 70,
  comment: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateFieldValue':
      return { ...state, [action.field]: [action.value] };

    default:
      return INITIAL_STATE;
  }
};

const populateDropdown = (nbrOfOptions, incrementValue) => {
  return Array.from(Array(nbrOfOptions).keys()).map(value => {
    return <option value={value+1} key={value+1}>{value+1}</option>;
  });
};

const Exercise = props => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const inputFields = [];
  for (let i = 0; i < props.sets; i++) {
    inputFields.push(
      <div className="exercise-input" key={`set-no-${i}`}>
        <label>
          <select name="repetitions" id="reps">
            <option value="">{state.reps}</option>
            {populateDropdown(props.repsRange.max)}
          </select>
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
