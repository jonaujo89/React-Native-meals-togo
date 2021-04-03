import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app.navigator";
import AccountNavigator from "./account.navigator";

import { AuthenticationContext } from "../../services/authentication/authentication.context";

const Navigation = () => {
  const { isAutnenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAutnenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
