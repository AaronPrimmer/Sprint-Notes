let saveButtonPressed = false;
const saveButton = document.getElementById("saveButton");
const cancelNoteButton = document.getElementById("cancelNoteButton");

saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if(saveButtonPressed){
        return;
    }
    saveButtonPressed = true;
    console.log("Save button pressed");
    saveButtonPressed = false;
});

cancelNoteButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.location.replace("/");
});