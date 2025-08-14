import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { getDatabase } from "../utils/database";
import { sharedStyles } from "../styles/sharedStyles"; // Assuming styles are defined in a separate file

export default function DeleteDB() {
  const [userId, setUserId] = useState(null);

  const deleteLastRow = async () => {
    console.log("deleteLastRow");
    const db = await getDatabase();
    const result = await db.execAsync("DELETE FROM users WHERE id = (SELECT MAX(id) FROM users)");
    console.log("deleteLastRow:", result);
    //console.log("deleteLastRow:", result.lastInsertRowId, result.changes);
  };

  const deleteId = async (id) => {
    console.log("deleteId:", id);
    const db = await getDatabase();
    if (id === null) {
      console.warn("User ID should not be null when deleting a specific user.");
      return;
    }
    const result = await db.execAsync(`DELETE FROM users WHERE id = ${id}`);
    //console.log("deleteId:", result);
  };

  return (
    <View style={sharedStyles.card}>
      <Text style={sharedStyles.title}>Delete Database</Text>
      <TextInput
        placeholder="Enter User ID to delete"
        keyboardType="numeric"
        onChangeText={(text) => setUserId(text)}
      />
      <Button title="Delete User by ID" onPress={() => deleteId(userId)} />
      <Button title="Delete Last Row" onPress={deleteLastRow} />
    </View>
  );
}
