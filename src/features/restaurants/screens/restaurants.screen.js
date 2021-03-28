import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import Spacer from "../../../components/spacer/spacer.component";
import SafeArea from "../../../components/utils/safe-area.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import Search from "../components/search.component";

const RestaurantList = styled(FlatList)`
  padding: ${({ theme }) => theme.space[3]};
`;

const CenteredSafelView = styled(SafeArea)`
  justify-content: center;
  align-items: center;
`;

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search />
      {isLoading && (
        <CenteredSafelView>
          <ActivityIndicator size={50} color={Colors.blue300} />
        </CenteredSafelView>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("RestaurantDetail")}
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
  );
};

export default RestaurantsScreen;
