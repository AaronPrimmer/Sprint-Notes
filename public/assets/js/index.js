
const addNotesButton = document.getElementById("addNotesButton");
const notesList = document.getElementById("notesList");
let allNotes = [];

function displayNotes(notesToDisplay){
    if(notesToDisplay){
        // Clear notesList
        notesList.replaceChildren();
        notesToDisplay.forEach(note => {
            const listItem = document.createElement("li");
            const listDiv = document.createElement("div");
            const titleElement = document.createElement("h3");
            const textElement = document.createElement("p");
            const buttonDiv = document.createElement("div");
            const deleteButton = document.createElement("button");
            const foundIndex = notesToDisplay.findIndex(item => item.title === note.title);

            titleElement.textContent = note.title;
            textElement.textContent = note.text;
            deleteButton.textContent = "Delete";
            deleteButton.setAttribute("data-delete", foundIndex);

            listItem.classList.add("note-item");
            listDiv.classList.add("note-item-container");
            buttonDiv.classList.add("note-item-button-container");
            deleteButton.classList.add("note-item-delete-button");

            listDiv.appendChild(titleElement);
            listDiv.appendChild(textElement);
            buttonDiv.appendChild(deleteButton);
            listItem.appendChild(listDiv);
            listItem.appendChild(buttonDiv);

            notesList.appendChild(listItem);
        });
    }
}

function getAllNotes(){
    fetch("/api/notes").then((response) => {
        if (!response.ok){
            throw new Error("Network response was not ok:", response.statusText);
        }
        return response.json();
    }).then((notes) => {
        if(!notes){
            throw new Error("Object returned is empty");
        }
        displayNotes(notes);
    }).catch((error) => {
        console.log("Error: ", error);
    });
}

function initializePage(){
    getAllNotes();
}

addNotesButton.addEventListener("click", (event) => {
    event.preventDefault();

    window.location.href = "/notes"
});

initializePage();