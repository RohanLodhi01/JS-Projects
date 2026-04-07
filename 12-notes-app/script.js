const createNoteBtn = document.getElementById("createNote");
const notesBox = document.querySelector(".notes-content");

function createNote(text = "") {
  const noteBox = document.createElement("div");
  noteBox.classList.add("input-box");

  // note text
  const notetext = document.createElement("div");
  notetext.setAttribute("contenteditable", true);
  notetext.classList.add("note-text");
  notetext.style.placeholder = "Enter you notes here";
  notetext.innerText = text;

  // note delete icon
  const deleteIcon = document.createElement("img");
  deleteIcon.src = "images/delete.png";
  deleteIcon.alt = "delete icon";
  deleteIcon.classList.add("delete-icon");

  // delete note
  deleteIcon.addEventListener("click", () => {
    noteBox.remove();
    saveNotes();
  });

  // save note on edit
  notetext.addEventListener("input", saveNotes);

  // insert in notes container
  noteBox.appendChild(notetext);
  noteBox.appendChild(deleteIcon);
  notesBox.appendChild(noteBox);
}

function saveNotes() {
  const notes = [];
  document.querySelectorAll(".note-text").forEach((notetext) => {
    if (notetext.innerText.trim() !== "") {
      notes.push(notetext.innerText.trim()); // store note content
    }
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

  savedNotes.forEach((text) => createNote(text));

  if (savedNotes.length > 0) {
    notesBox.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", loadNotes);

createNoteBtn.addEventListener("click", () => {
  createNote();
  notesBox.style.display = "block";
  saveNotes();
});
