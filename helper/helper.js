const fs = require("fs");
const path = require("path");
const db = require("../db/db.json");

function addNote(noteToAdd){
    db.push(noteToAdd);
    fs.writeFileSync(path.join(__dirname, "..", "db", "db.json"), db, (error) => {
        console.log("Error Writing File: ", error);
    });
}

function uniqueID(){
    let foundID = "";
    const id = Math.random().toString(36).substring(2) + Date.now().toString(36);
    const foundItem = db.find(item => {if(item.id === id){
        foundID = item.id;
    }});

    if(!foundID){
        return id;
    }else{
        return uniqueID();
    }

    
}

module.exports = { addNote, uniqueID };