// Database Helper for Expo SQLite
import * as SQLite from "expo-sqlite";

// Database configuration
const DATABASE_NAME = "app.db";
const DATABASE_VERSION = "1.0";

// Singleton database instance (cached as a promise to avoid duplicate opens/inits on concurrent calls)
let dbPromise = null;

const setupDatabase = async () => {
  const db = await SQLite.openDatabaseAsync(DATABASE_NAME);
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
  return db;
};

/**
 * Initialize and return the database instance.
 * Safe to call concurrently from multiple components - schema setup only ever runs once.
 * @returns {SQLiteDatabase} Database instance
 */
export const getDatabase = async () => {
  if (!dbPromise) {
    dbPromise = setupDatabase();
  }
  return dbPromise;
};

/**
 * Initialize database with tables
 * Call this function when your app starts
 */
export const initDatabase = async () => {
  try {
    await getDatabase();
  } catch (error) {
    console.error("Database initialization failed:", error);
    throw error;
  }
};
