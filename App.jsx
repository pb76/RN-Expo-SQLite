import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { initDatabase } from "./utils/database";
import { useEffect } from "react";
import sharedStyles from "./styles/sharedStyles";
import ReadDB from "./components/ReadDB";
import WriteDB from "./components/WriteDB";
import DeleteDB from "./components/DeleteDB";
import UpdateDB from "./components/UpdateDB";

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
    <ScrollView style={[sharedStyles.container, { marginTop: 40 }]}>
      <Text>Open up App.js to start working on your app!</Text>
      <WriteDB />
      <ReadDB />
      <DeleteDB />
      <UpdateDB />
      <StatusBar style="auto" />
    </ScrollView>
  );
}
