const { locations: locationsMock } = require("./geocode.mock");
// const url = require("url");

module.exports.geocodeRequest = (request, response) => {
  // const query = url.parse(request.url, true).query;
  const { city } = request.query;
  const locationMock = locationsMock[city.toLowerCase()];
  response.json(locationMock);
};
