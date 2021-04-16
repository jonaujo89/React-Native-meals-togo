import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import Spacer from "../../../components/spacer/spacer.component";
import SafeArea from "../../../components/utils/safe-area.component";
import Search from "../components/search.component";
import Text from "../../../components/typography/text.component";
import { FadeInView } from "../../../components/animations/fade.animation";
import FavoritesBar from "../../../components/favorites/favorites-bar.component";
import { RestaurantList } from "../components/restaurant-list.styles";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { LocationContext } from "../../../services/location/location.context";

const CenteredSafelView = styled(SafeArea)`
  justify-content: center;
  align-items: center;
`;

const RestaurantsScreen = ({ navigation }) => {
  const { error: locationError } = useContext(LocationContext);
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  const hasError = !!error || !!locationError;

  return (
    <SafeArea>
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isLoading && (
        <CenteredSafelView>
          <ActivityIndicator size={50} color={Colors.blue300} />
        </CenteredSafelView>
      )}
      {isToggled && (
        <FavoritesBar favorites={favorites} goToDetail={navigation.navigate} />
      )}
      {hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">Something went wrong retrieving the data</Text>
        </Spacer>
      )}
      {!hasError && (
        <RestaurantList
          data={restaurants}
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
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </SafeArea>
  );
};

export default RestaurantsScreen;
