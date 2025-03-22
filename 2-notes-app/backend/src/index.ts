import express, { Request, Response } from "express";
import Database from "better-sqlite3";

const db = new Database("database.sqlite");
const app = express();
app.use(express.json());

interface Note {
  note: string;
}

// GET endpoint with explicit types
app.get("/", (req: Request, res: Response) => {
  const stmt = db.prepare("SELECT * FROM notes");
  const notes = stmt.all();
  return res.json({ data: notes });
});

// POST endpoint with explicit body type
app.post("/", (req: Request<{}, any, { note?: string }>, res: Response) => {
  const { note } = req.body;

  if (!note) {
    return res.status(400).json({ message: "Note is required." });
  }

  const stmt = db.prepare("INSERT INTO notes (note) VALUES (?)");

  try {
    const result = stmt.run(note);
    return res.status(201).json({
      message: "Note created successfully",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error inserting note into the database" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
