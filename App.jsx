import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { initDatabase } from "./utils/database";
import { useEffect } from "react";
import ReadDB from "./components/ReadDB";

export default function App() {
  useEffect(() => {
    // Initialize the database when the app starts
    initDatabase()
      .then(() => {
        console.log("Database initialized successfully");
      })
      .catch((error) => {
        console.error("Database initialization failed:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ReadDB />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
