import React from "react";
import { NoteFormInput, NotesList } from "../index";
import styles from "./NoteBody.module.css";

const NoteBody = ({
  handleSubmit,
  limitTitle,
  inputTitle,
  handleChange,
  createNote,
  onChange,
  notes,
  searchInput,
  searchKeywords,
  handleDelete,
  handleArchive,
}) => {
  return (
    <div className={styles.body}>
      <NoteFormInput
        limitTitle={limitTitle}
        inputTitle={inputTitle}
        createNote={createNote}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        onChange={onChange}
      />

      <NotesList
        listTitle="All Notes"
        notes={notes}
        searchInput={searchInput}
        searchKeywords={searchKeywords}
        handleDelete={handleDelete}
        handleArchive={handleArchive}
        conditionArchived={false}
      />

      <NotesList
        listTitle="Archives"
        notes={notes}
        searchInput={searchInput}
        searchKeywords={searchKeywords}
        handleDelete={handleDelete}
        handleArchive={handleArchive}
        conditionArchived={true}
      />
    </div>
  );
};

export default NoteBody;
