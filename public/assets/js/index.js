const addNotesButton = document.getElementById("addNotesButton");
const notesList = document.getElementById("notesList");
const notesView = document.getElementById("notesView");
let allNotes = [];
let deleteClicked = false;

function displayNotes(notesToDisplay) {
  if (notesToDisplay && notesToDisplay.length > 0) {
    // Clear notesList
    notesList.replaceChildren();
    notesToDisplay.forEach((note) => {
      const listItem = document.createElement("li");
      const listDiv = document.createElement("div");
      const titleElement = document.createElement("h3");
      const textElement = document.createElement("p");
      const buttonDiv = document.createElement("div");
      const deleteButton = document.createElement("button");

      titleElement.textContent = note.title;
      textElement.textContent = note.text;
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("data-delete", note.id);

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

      listItem.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        const noteTitle = document.createElement("h2");
        const noteText = document.createElement("p");
        noteTitle.textContent = note.title;
        noteText.textContent = note.text;

        notesView.replaceChildren();
        notesView.appendChild(noteTitle);
        notesView.appendChild(noteText);
      });

      deleteButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (!deleteClicked) {
          deleteClicked = true;
          fetch(`/api/notes/${note.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: note.id }),
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              notesView.replaceChildren();
              getAllNotes();
            })
            .catch((error) => {
              console.error("Error:", error);
            });
          //console.log("Clicked:", note.id);
        }
        deleteClicked = false;
      });
    });
  } else {
    const noNotesItem = document.createElement("li");
    const noNotesMessage = document.createElement("h3");
    noNotesMessage.textContent = "No Notes Added";
    noNotesItem.appendChild(noNotesMessage);
    notesList.replaceChildren();
    notesList.appendChild(noNotesItem);
  }
}

function getAllNotes() {
  fetch("/api/notes")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok:", response.statusText);
      }
      return response.json();
    })
    .then((notes) => {
      if (!notes) {
        throw new Error("Object returned is empty");
      }
      displayNotes(notes);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

function initializePage() {
  getAllNotes();
}

addNotesButton.addEventListener("click", (event) => {
  event.preventDefault();

  window.location.href = "/notes";
});

initializePage();
