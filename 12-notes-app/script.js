const createNoteBtn = document.getElementById("createNote");
const notesBox = document.querySelector(".notes-content");

createNoteBtn.addEventListener("click", () => {
  const noteBox = document.createElement("div");
  noteBox.setAttribute("contenteditable", true);
  noteBox.classList.add("input-box");

  //   Add delete icon
  const deleteIcon = document.createElement("img");
  deleteIcon.src = "/images/delete.png";
  deleteIcon.alt = "delete icon";
  deleteIcon.classList.add("delete-icon");

  //   Add delete functionality
  deleteIcon.addEventListener("click", () => {
    noteBox.remove();
    saveNotes();
  });

  noteBox.addEventListener("input", saveNotes);
  //   Append delete icon to note
  noteBox.appendChild(deleteIcon);

  notesBox.style.display = "block";
  notesBox.appendChild(noteBox);

  saveNotes(); // save when created
});

function saveNotes() {
  const notes = [];
  document.querySelectorAll(".input-box").forEach((note) => {
    notes.push(note.innerText); // store note content
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  console.log(savedNotes);

  savedNotes.forEach((text) => {
    const noteBox = document.createElement("div");
    noteBox.setAttribute("contenteditable", true);
    noteBox.classList.add("input-box");
    noteBox.innerText = text;

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "/images/delete.png";
    deleteIcon.alt = "delete icon";
    deleteIcon.classList.add("delete-icon");

    noteBox.appendChild(deleteIcon);
    notesBox.appendChild(noteBox);

    deleteIcon.addEventListener("click", () => {
      noteBox.remove();
      saveNotes();
    });
  });

  if (savedNotes.length > 0) {
    notesBox.style.display = "block";
  }
}


document.addEventListener("DOMContentLoaded", loadNotes);
