import React from 'react';

const populateDropdown = (id, data) => {
  return data.map(value => {
    return (
      <option value={value} key={`${id}-${value}`}>
        {value}
      </option>
    );
  });
};

const DropDown = ({
  name,
  id,
  data,
  currentValue,
  exerciseId,
  workoutId,
  workouts,
  setWorkouts,
}) => {
  const UpdateFieldValue = event => {
    const updatedWorkouts = JSON.parse(JSON.stringify(workouts));
    const set = parseInt(id[id.length - 1]);
    updatedWorkouts[workoutId - 1].exercises[exerciseId].currentResult[set][name] = parseInt(
      event.target.value
    );
    setWorkouts(updatedWorkouts);
  };

  return (
    <select name={name} id={id} value={currentValue} onChange={UpdateFieldValue}>
      {populateDropdown(id, data)}
    </select>
  );
};

export default DropDown;
