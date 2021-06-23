import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View, Text, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

console.log();

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: isAndroid ? StatusBar.currentHeight: 0 }}>
        <View style={{ padding: 16, backgroundColor: "lightgreen" }}>
          <Text>search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "lightblue" }}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
