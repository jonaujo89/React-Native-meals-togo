import React from "react";
import CompactRestaurantInfo from "../../../components/restaurant/compact-restaurant-info";

const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo restaurant={restaurant} isMap />
);

export default MapCallout;
