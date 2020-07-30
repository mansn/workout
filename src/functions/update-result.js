const sendQuery = require('./utils/send-query')

const UPDATE_RESULT = `
  mutation($id: ID!, $exerciseId: ID!, $weight: Int!, $reps: Int!, $setNo: Int!){
    updateResult(
      id: $id
      data: {
        exercise: { connect: $exerciseId }
        weight: $weight
        reps: $reps
        setNo: $setNo
      }
    )
    {
      _id
    }
  }
`

exports.handler = async event => {
  const { id, exerciseId, weight, reps, setNo } = JSON.parse(event.body)

  const { data, errors } = await sendQuery(UPDATE_RESULT, {
    id,
    exerciseId,
    weight,
    reps,
    setNo
  })

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ updatedExercise: data.updateResult })
  }
}
