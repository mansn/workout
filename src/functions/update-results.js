const sendQuery = require('./utils/send-query')

const UPDATE_RESULTS = `
  mutation($results: [ResultsUpdateInput]){
    updateResults(
      data: $results
    )
  }
`

exports.handler = async event => {
  const results = JSON.parse(event.body)

  const { data, errors } = await sendQuery(UPDATE_RESULTS, {
    results
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
