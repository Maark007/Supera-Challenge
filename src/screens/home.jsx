import React from "react";

import { SafeAreaView, StatusBar, Platform, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Text>Hello</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
