import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import SafeArea from "../../../components/utils/safe-area.component";
import Text from "../../../components/typography/text.component";
import Spacer from "../../../components/spacer/spacer.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card.component";

import { FavoritesContext } from "../../../services/favorites/favorites.context";

const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeArea>
  ) : (
    <NoFavoritesArea>
      <Text center>NoFavorites yet</Text>
    </NoFavoritesArea>
  );
};

export default FavoritesScreen;
