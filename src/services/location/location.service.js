import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `https://us-central1-rn-meals-togo.cloudfunctions.net/geocode?city=${searchTerm}`
  )
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
