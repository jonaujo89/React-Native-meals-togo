const { mocks, addMockImages } = require("./mock");

module.exports.placesRequest = (request, response) => {
  const { location } = request.query;
  const data = mocks[location];
  if (data) {
    data.results = data.results.map(addMockImages);
  }
  response.json(data);
};
