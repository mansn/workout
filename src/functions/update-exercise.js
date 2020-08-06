const sendQuery = require('./utils/send-query')

const UPDATE_EXERCISE = `
  mutation($id: ID!, $title: String!, $weights: [Int!]!, $reps: [Int!]!, $sets: Int!, $currentResult: ExerciseCurrentResultRelation){
    updateExercise(
      id: $id
      data: {
        title: $title
        weights: $weights
        reps: $reps
        sets: $sets
        currentResult: $currentResult
      }
    )
    {
      _id
    }
  }
`

exports.handler = async event => {
  const { id, title, weights, reps, sets, currentResult } = JSON.parse(event.body)

  const { data, errors } = await sendQuery(UPDATE_EXERCISE, {
    id,
    title,
    weights,
    reps,
    sets,
    currentResult
  })

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ updatedExercise: data.updateExercise })
  }
}
