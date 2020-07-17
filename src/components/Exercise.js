import React from 'react'
import Input from './Input/Input'

const Exercise = props => {
  const inputFields = []
  for (let i = 0; i < props.sets; i++) {
    inputFields.push(
      <div className="exercise-input" key={`${props.title}-set-${i}`}>
        <label>
          <Input
            name="reps"
            id={`${props.title}-reps-${i}`}
            data={props.reps}
            currentValue={props.currentResult.data[i].reps}
            workouts={props.workouts}
            exerciseId={props.exerciseId}
            workoutId={props.workoutId}
            setWorkouts={props.setWorkouts}
          />
        </label>
        <label>
          <Input
            name="weight"
            id={`${props.title}-weight-${i}`}
            data={props.weights}
            currentValue={props.currentResult.data[i].weight}
            workouts={props.workouts}
            exerciseId={props.exerciseId}
            workoutId={props.workoutId}
            setWorkouts={props.setWorkouts}
          />
        </label>
        <input placeholder="Comment..."></input>
      </div>
    )
  }
  return (
    <li className="exercise">
      <div className="exercise-meta">
        <h3>{`${props.title}`}</h3>
        <h3>{`(${props.sets}x ${props.recommendedReps.min}-${props.recommendedReps.max})`}</h3>
      </div>
      {inputFields}
    </li>
  )
}

export default Exercise
