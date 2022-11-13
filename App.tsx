import React from "react";
import "react-native-reanimated"
import { NativeBaseProvider, Box, StatusBar } from "native-base";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home/>
    </NativeBaseProvider>
  );
}