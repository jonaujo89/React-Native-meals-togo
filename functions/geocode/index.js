const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");

module.exports.geocodeRequest = (request, response) => {
  const query = url.parse(request.url, true).query;
    const locationMock = locationsMock[city];
  response.send("Geocode request");
};
