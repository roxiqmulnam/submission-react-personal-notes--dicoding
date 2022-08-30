import "./App.css";
import { getInitialData } from "./utils/index.js";
import { useState } from "react";
import { Navbar, NoteBody } from "./components/index.js";
import Swal from "sweetalert2";

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [limit, setLimit] = useState(50);

  const resultBySearch = notes.filter((note) => {
    const noteTitle = note.title.toLowerCase();
    const searchKeyword = searchInput.toLowerCase();
    return noteTitle.includes(searchKeyword);
  });

  function handleChange(e) {
    if (e.target.value.length > 50) {
      setLimit(0);
    } else {
      setInputTitle(e.target.value);
      setLimit(50 - e.target.value.length);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      text: "Your note has been Added",
      showConfirmButton: true,
      confirmButtonColor: "#f58840",
      timer: 2000,
    });
    const addedNote = [
      {
        id: +new Date(),
        title: inputTitle,
        body: inputBody,
        createdAt: new Date().toISOString(),
        archived: false,
      },
      ...notes,
    ];
    setNotes(addedNote);
    setInputTitle("");
    setInputBody("");
    setLimit(50);
  }

  function handleDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f58840",
      cancelButtonColor: "#b85252",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newNotes = [...notes];
        const index = newNotes.findIndex((object) => {
          return object.id === id;
        });
        newNotes.splice(index, 1);
        setNotes(newNotes);

        Swal.fire({
          text: "Your note has been deleted!",
          icon: "success",
        });
      }
    });
  }

  function handleArsip(id) {
    
    const newNotes = [...notes];
    const index = newNotes.findIndex((object) => {
      return object.id === id;
    });

    newNotes[index].archived = !newNotes[index].archived;
    setNotes(newNotes);
    
  }

  return (
    <>
      <Navbar
        searchInput={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <NoteBody
        handleSubmit={handleSubmit}
        limit={limit}
        inputTitle={inputTitle}
        handleChange={handleChange}
        inputBody={inputBody}
        onChange={(e) => setInputBody(e.target.value)}
        notes={notes}
        searchInput={searchInput}
        resultBySearch={resultBySearch}
        handleDelete={handleDelete}
        handleArsip={handleArsip}
      />
    </>
  );
}

export default App;
