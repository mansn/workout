const sendQuery = require('./utils/send-query')

const UPDATE_RESULTS = `
  mutation($id: ID!, $weight: Int!, $reps: Int!){
    updateResults(
      data: {
        id: $id
        weight: $weight
        reps: $reps
      }
    )
    {
      _id
    }
  }
`

exports.handler = async event => {
  const { id, weight, reps } = JSON.parse(event.body)

  const { data, errors } = await sendQuery(UPDATE_RESULTS, {
    id,
    weight,
    reps
  })

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ updatedResults: data })
  }
}
