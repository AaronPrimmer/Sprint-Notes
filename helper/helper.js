const fs = require("fs");
const path = require("path");
const db = require("../db/db.json");

function addNote(noteToAdd) {
  //console.log("Adding Note: ", noteToAdd);
  db.push(noteToAdd);
  fs.writeFileSync(
    path.join(__dirname, "..", "db", "db.json"),
    JSON.stringify(db, null, 2),
    (error) => {
      console.log("Error Writing File: ", error);
    }
  );
}

function uniqueID() {
  let foundID = "";
  const id = Math.random().toString(36).substring(2) + Date.now().toString(36);
  const foundItem = db.find((item) => {
    if (item.id === id) {
      foundID = item.id;
    }
  });

  if (!foundID) {
    return id;
  } else {
    return uniqueID();
  }
}

function deleteNote(id) {
  const noteIndex = db.findIndex((note) => note.id === id);
  if (noteIndex !== -1) {
    db.splice(noteIndex, 1);
    fs.writeFileSync(
      path.join(__dirname, "..", "db", "db.json"),
      JSON.stringify(db, null, 2),
      (error) => {
        console.log("Error Writing File: ", error);
      }
    );
  }
}

module.exports = { addNote, uniqueID, deleteNote };
