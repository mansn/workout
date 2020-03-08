import React, { useReducer, useEffect } from 'react';

const INITIAL_STATE = {
  value: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateFieldValue':
      return { ...state, [action.field]: [action.value] };

    default:
      return INITIAL_STATE;
  }
};

const populateDropdown = (id, data) => {
  return data.map(value => {
    return (
      <option value={value} key={`${id}-${value}`}>
        {value}
      </option>
    );
  });
};

const DropDown = ({ name, id, data, currentValue }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    dispatch({ type: 'updateFieldValue', field: 'value', value: currentValue });
  }, [currentValue]);
  const UpdateFieldValue = field => event => {
    dispatch({ type: 'updateFieldValue', field, value: event.target.value });
  };

  return (
    <select name={name} id={id} value={state.value} onChange={UpdateFieldValue('value')}>
      {populateDropdown(id, data)}
    </select>
  );
};

export default DropDown;
