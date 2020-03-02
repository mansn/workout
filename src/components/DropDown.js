import React, { useReducer } from 'react';

const INITIAL_STATE = {
  reps: '1',
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
    return (
      <option value={value + 1} key={value + 1}>
        {value + 1}
      </option>
    );
  });
};

const DropDown = ({ name, id, defaultOption, data }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const UpdateFieldValue = field => event => {
    dispatch({ type: 'updateFieldValue', field, value: event.target.value });
  };

  return (
    <select name={name} id={id} value={state.reps} onChange={UpdateFieldValue('reps')}>
      {populateDropdown(data)}
    </select>
  );
};

export default DropDown;
