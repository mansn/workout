import React from 'react';

const Exercise = props => {
  const inputFields = [];
  for (let i = 0; i < props.sets; i++) {
    inputFields.push(<input></input>);
  }

  return (
    <div className="exercise">
      <h3>{props.header}</h3>
      {inputFields}
    </div>
  );
};

export default Exercise;
