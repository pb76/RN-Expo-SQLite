import { getDatabase } from "../utils/database";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ReadDB() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    readData();
  }, []);

  const readData = async () => {
    const db = await getDatabase();
    const allRows = await db.getAllAsync("SELECT * FROM users");
    setUsers(allRows);
  };

  return (
    <View>
      <Text>Users List</Text>
      <Button title="Refresh" onPress={readData} />
      {users.length === 0 && <Text>No users found</Text>}
      {users.map((user) => (
        <Text key={user.id}>
          {user.id} - {user.name} - {user.email}
        </Text>
      ))}
    </View>
  );
}
