let saveButtonPressed = false;
const saveButton = document.getElementById("saveButton");
const saveNoteForm = document.getElementById("saveNoteForm");
const cancelNoteButton = document.getElementById("cancelNoteButton");
const titleField = document.getElementById("title");
const textField = document.getElementById("text");

saveNoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (saveButtonPressed) {
    return;
  }
  saveButtonPressed = true;

  console.log(event.target);
  console.log("Save button pressed");
  if (titleField.value.trim() !== "" && textField.value.trim() !== "") {
    const formData = new FormData(event.target);
    //console.log("Form Data:", ...formData.entries());
    const data = Object.fromEntries(formData.entries());
    //console.log("Data to be sent:", data);
    fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          window.location.replace("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    saveButtonPressed = false;
    return;
  }
  saveButtonPressed = false;
});

cancelNoteButton.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  window.location.replace("/");
});
