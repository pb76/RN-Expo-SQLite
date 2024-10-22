import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
//https://docs.expo.dev/versions/latest/sdk/sqlite/
import * as SQLite from "expo-sqlite";

let db;

export default function App() {
  const [SQLiteData, setSQLiteData] = useState([]);
  const [varde, setVarde] = useState("");
  const [intVarde, setIntVarde] = useState(0);

  useEffect(() => {
    openDB();
  }, []);
  useEffect(() => {
    readData();
  }, [SQLiteData]);

  const readData = async () => {
    let tabelData = [];
    const allRows = await db.getAllAsync("SELECT * FROM test");
    for (const row of allRows) {
      console.log(row.id, row.value, row.intValue);
      //console.log(row);
      tabelData.push(row);
    }
    setSQLiteData(tabelData);
  };

  const writeData = async () => {
    console.log(varde, intVarde);
    if (varde !== "" || intVarde !== 0) {
      const result = await db.execAsync(
        "INSERT INTO test (value, intValue) VALUES ('" + varde + "', " + intVarde + ")"
      );
    }
    console.log(result.lastInsertRowId, result.changes);
  };

  const deleteLastRow = async () => {
    const result = await db.execAsync("DELETE FROM test WHERE id = (SELECT MAX(id) FROM test)");
    console.log(result.lastInsertRowId, result.changes);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput style={{ height: 40 }} placeholder="Skriv text" onChangeText={(varde) => setVarde(varde)} />
      <TextInput
        inputMode="numeric"
        style={{ height: 40 }}
        placeholder="Skriv siffra"
        onChangeText={(intVarde) => setIntVarde(intVarde)}
      />
      <Button title="Write Data" onPress={writeData} />
      <Button title="Read Data" onPress={readData} />
      <Button title="Delete Last Row" onPress={deleteLastRow} />
      {SQLiteData.map((item, index) => {
        return (
          <View key={index}>
            <Text>
              {item.id}, {item.value}, {item.intValue}
            </Text>
          </View>
        );
      })}
      <Text>{JSON.stringify(SQLiteData)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const openDB = async () => {
  db = await SQLite.openDatabaseAsync("databaseName");
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
    `);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
