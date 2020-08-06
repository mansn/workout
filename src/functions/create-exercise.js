const sendQuery = require('./utils/send-query')

const CREATE_EXERCISE = `
  mutation($title: String!, $weights: [Int!]!, $reps: [Int!]!, $sets: Int!, $recommendedReps: ExerciseRecommendedRepsRelation, $currentResult: ExerciseCurrentResultRelation, $Workout: ExerciseWorkoutRelation){
    createExercise(
      data: {
        title: $title,
        weights: $weights
        reps: $reps
        sets: $sets
        recommendedReps: $recommendedReps
        currentResult: $currentResult
        Workout: $Workout
      }
    )
    {
      _id
    }
  }
`

exports.handler = async event => {
  const { title, weights, reps, sets, recommendedReps, currentResult, Workout } = JSON.parse(
    event.body
  )

  const { data, errors } = await sendQuery(CREATE_EXERCISE, {
    title,
    weights,
    reps,
    sets,
    recommendedReps,
    currentResult,
    Workout
  })

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ newExercise: data.createExercise })
  }
}
