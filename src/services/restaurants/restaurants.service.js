import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return fetch(
    `https://us-central1-rn-meals-togo.cloudfunctions.net/placesNearby?location=${location}`
  )
    .then((response) => {
      // console.log("response rest", response);
      return response.json();
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//transform some_name to someName in response object. adding new fields
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY"
    };
  });
  return camelize(mappedResults);
};
