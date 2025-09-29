// Database Helper for Expo SQLite
import * as SQLite from "expo-sqlite";

// Database configuration
const DATABASE_NAME = "app.db";
const DATABASE_VERSION = "1.0";

// Singleton database instance
let dbInstance = null;

/**
 * Initialize and return the database instance
 * @returns {SQLiteDatabase} Database instance
 */
export const getDatabase = async () => {
  if (!dbInstance) {
    dbInstance = await SQLite.openDatabaseAsync(DATABASE_NAME);
  }
  return dbInstance;
};

/**
 * Initialize database with tables
 * Call this function when your app starts
 */
export const initDatabase = async () => {
  const db = await getDatabase();
  try {
    await db.execAsync(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT UNIQUE,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        `);
    console.log("Database initialized successfully");
    console.log("Database path: ", db.databasePath);
  } catch (error) {
    console.error("Database initialization failed:", error);
    throw error;
  }
};
