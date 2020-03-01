import React from 'react';

const populateDropdown = (nbrOfOptions, incrementValue) => {
  return Array.from(Array(nbrOfOptions).keys()).map(value => {
    return <option value={value + 1}>{value + 1}</option>;
  });
};

const DropDown = (name, id, value, defaultOption, data) => {
  return (
    <select name={name} id={id} value={value}>
      <option value="" disabled>
        {defaultOption}
      </option>
      {populateDropdown(data.max)}
    </select>
  );
};

export default DropDown;
