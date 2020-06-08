const sendQuery = require('./utils/send-query');

const GET_ALL_WORKOUTS = `
  query {
    allWorkouts {
      data {
        _id
        title
        exercises {
          data {
            title
            weights
            sets
            reps
            currentResult {
              data {
                _id
                weight
                reps
              }
            }
          }
        }
      }
    }
  }
`;

exports.handler = async () => {
  const { data, errors } = await sendQuery(GET_ALL_WORKOUTS);

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ workouts: data.allWorkouts.data }),
  };
};