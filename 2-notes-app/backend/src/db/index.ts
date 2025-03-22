import Database from "better-sqlite3";

const db = new Database("database.sqlite");

// Create a table if it doesn't exist
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    note TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`
).run();

export default db;
