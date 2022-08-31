import "./App.css";
import { getInitialData } from "./utils/index.js";
import { useState } from "react";
import { Navbar, NoteBody } from "./components/index.js";
import Swal from "sweetalert2";

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [inputTitle, setInputTitle] = useState("");
  const [createNote, setCreateNote] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [limitTitle, setLimitTitle] = useState(0);

  const searchKeywords = notes.filter((note) => {
    const noteTitle = note.title.toLowerCase();
    const searchKeyword = searchInput.toLowerCase();
    return noteTitle.includes(searchKeyword);
  });

  const handleChange = (event) => {
    if (event.target.value.length < 50) setInputTitle(event.target.value);
    setLimitTitle(0 + event.target.value.length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const AddNewNote = [
      {
        id: +new Date(),
        title: inputTitle,
        body: createNote,
        createdAt: new Date().toISOString(),
        archived: false,
      },
      ...notes,
    ];

    setNotes(AddNewNote);
    setInputTitle("");
    setCreateNote("");
    setLimitTitle(0);

    Swal.fire({
      icon: "success",
      text: "Your note has been Added",
      showConfirmButton: true,
      confirmButtonColor: "#f58840",
      timer: 2000,
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f58840",
      cancelButtonColor: "#b85252",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const listNotes = [...notes];
        const indexById = listNotes.findIndex((object) => {
          return object.id === id;
        });
        listNotes.splice(indexById, 1);
        setNotes(listNotes);

        Swal.fire({
          text: "Your note has been deleted!",
          icon: "success",
        });
      }
    });
  };

  const handleArchive = (id) => {
    const listNotes = [...notes];
    const indexById = listNotes.findIndex((object) => {
      return object.id === id;
    });

    listNotes[indexById].archived = !listNotes[indexById].archived;
    setNotes(listNotes);
  }

  return (
    <>
      <Navbar
        searchInput={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <NoteBody
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleDelete={handleDelete}
        handleArchive={handleArchive}
        notes={notes}
        onChange={(e) => setCreateNote(e.target.value)}
        inputTitle={inputTitle}
        createNote={createNote}
        limitTitle={limitTitle}
        searchKeywords={searchKeywords}
        searchInput={searchInput}
      />
    </>
  );
}

export default App;
