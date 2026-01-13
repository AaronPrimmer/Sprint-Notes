const express = require("express");
const fs = require("fs");
const path = require("path");
const db = require("./db/db.json");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

app.get("/api/notes", (req, res) => {
  res.json(db);
});

app.post("/api/notes", (req, res) => {
  const { title, text } = req.body;

  if (!title || !text) {
    return res.status(400).json({ error: "Title and text are required" });
  }

  const newNote = { title, text };
  db.push(newNote);
  fs.writeFileSync(path.join(__dirname, "db", "db.json"), JSON.stringify(db));
  res.json({ success: true, note: newNote });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
