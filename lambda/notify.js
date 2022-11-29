// .netlify/functions/notify
exports.handler = async function (event, context, callback) {
  return {
    statusCode: 200,
    body: "Hello",
  };
};

// For more info, check https://docs.netlify.com/functions/build-with-javascript
