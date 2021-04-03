import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../../features/account/screens/account.screen";
import LoginScreen from "../../features/account/screens/login.screen";
import RegisterScreen from "../../features/account/screens/register.screen";

const AccNav = createStackNavigator();

const AccountNavigator = () => (
  <AccNav.Navigator headerMode="none">
    <AccNav.Screen name="Main" component={AccountScreen} />
    <AccNav.Screen name="Login" component={LoginScreen} />
    <AccNav.Screen name="Register" component={RegisterScreen} />
  </AccNav.Navigator>
);

export default AccountNavigator;
