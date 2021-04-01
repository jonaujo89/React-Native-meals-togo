import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import CompactRestaurantInfo from "../restaurant/compact-restaurant-info";
import Spacer from "../spacer/spacer.component";
import Text from "../typography/text.component";

const FavoritesWrapper = styled.View`
  padding: 10px;
`;

const FavoritesBar = ({ favorites, goToDetail }) => {
  if (!favorites.length) {
    return null;
  }

  return (
    <FavoritesWrapper>
      <Spacer position="left" size="medium">
        <Text variant="caption">Favorites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name.split(" ").join("");
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  goToDetail("RestaurantDetail", {
                    restaurant
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};

export default FavoritesBar;
