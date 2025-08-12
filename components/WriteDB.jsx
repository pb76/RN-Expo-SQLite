import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { getDatabase } from "../utils/database";
import { useState } from "react";

export default function WriteDB() {
  const [txtName, setTxtName] = useState("");
  const [txtEmail, setTxtEmail] = useState("");

  const writeData = async () => {
    console.log("Writing data to the database...");
    const db = await getDatabase();
    //console.log("Database instance:", db);
    console.log(txtName, txtEmail);
    if (txtName !== "" || txtEmail !== "") {
      try {
        const result = await db.execAsync(
          "INSERT INTO users (name, email) VALUES ('" + txtName + "', '" + txtEmail + "')"
        );
        //console.log(result.lastInsertRowId, result.changes);
      } catch (error) {
        console.error("Error inserting data:", error);
      }
    }
  };

  return (
    <View>
      <Text>WriteDB Component</Text>
      <TextInput placeholder="Name" value={txtName} onChangeText={setTxtName} />
      <TextInput placeholder="Email" value={txtEmail} onChangeText={setTxtEmail} />
      <Button title="Write Data" onPress={writeData} />
    </View>
  );
}
