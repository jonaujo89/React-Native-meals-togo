const { locations: locationsMock } = require("./geocode.mock");
const functions = require("firebase-functions");

module.exports.geocodeRequest = (request, response, client) => {
  const { city, mock } = request.query;
  if (mock === "true") {
    const locationMock = locationsMock[city.toLowerCase()];
    return response.json(locationMock);
  }

  client
    .geocode({
      params: {
        address: city,
        key: functions.config().google.key
      },
      timeout: 1000
    })
    .then((res) => response.json(res.data))
    .catch((error) => {
      response.status(400);
      return response.send(error.response.data.error_message);
    });
};
