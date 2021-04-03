import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const AccNav = createStackNavigator();

const AccountNavigator = () => (
  <AccNav.Navigator headerMode="none">
    <AccNav.Screen name="Main" comonent={() => null} />
    <AccNav.Screen name="Login" comonent={() => null} />
  </AccNav.Navigator>
);

export default AccountNavigator;
