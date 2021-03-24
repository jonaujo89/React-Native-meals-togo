import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import RestaurantInfoCard from "../components/restaurant-info-card.component";

const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar />
      </View>
      <View style={styles.contentContainer}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  searchContainer: {
    padding: 16,
    backgroundColor: "green"
  },
  contentContainer: {
    flex: 1,
    padding: 16
  }
});

export default RestaurantsScreen;
