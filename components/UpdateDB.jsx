import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { getDatabase } from "../utils/database";
import { sharedStyles } from "../styles/sharedStyles"; // Assuming styles are defined in a separate file

export default function UpdateDB() {
  const [txtName, setTxtName] = useState("");
  const [txtEmail, setTxtEmail] = useState("");
  const [userId, setUserId] = useState("");

  const handleUpdate = async () => {
    console.log("Updating data in the database...");
    if (userId === "" || txtName === "" || txtEmail === "") {
      console.warn("User ID, Name, and Email must be provided for update.");
      return;
    }
    const db = await getDatabase();
    try {
      const result = await db.execAsync(
        `UPDATE users SET name = '${txtName}', email = '${txtEmail}' WHERE id = ${userId}`
      );
      //console.log("Update result:", result);
    } catch (error) {
      console.error("Update failed:", error);
      // Handle the error appropriately, e.g., show an alert or log it
    }
  };

  return (
    <View style={sharedStyles.card}>
      <Text style={sharedStyles.title}>Update Database</Text>
      <TextInput
        style={sharedStyles.input}
        placeholder="Enter User ID"
        keyboardType="numeric"
        onChangeText={(text) => setUserId(text)}
      />
      <TextInput style={sharedStyles.input} placeholder="Enter Name" value={txtName} onChangeText={setTxtName} />
      <TextInput style={sharedStyles.input} placeholder="Enter Email" value={txtEmail} onChangeText={setTxtEmail} />
      <Button title="Update User" onPress={handleUpdate} />
    </View>
  );
}
