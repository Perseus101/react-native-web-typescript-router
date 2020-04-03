import React from "react";
import { AppRegistry, Platform } from "react-native";

import { Router, Switch, Route } from './router';

import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';

const appName = "example";

export const Main = function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/about"><About /></Route>
        <Route path="/users"><Users /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </Router>
  );
};

AppRegistry.registerComponent(appName, () => Main);
if (Platform.OS === "web") {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById("root")
  });
}
