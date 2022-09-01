import React from "react";
import { NoteItem } from "../index";
import styles from "./NoteList.module.css";

const NotesList = ({
  notes,
  searchInput,
  searchKeywords,
  handleDelete,
  handleArchive,
  listTitle,
  conditionArchived,
}) => {
  return (
    <>
      <h2>{listTitle}</h2>
      {notes.length === 0 ||
      notes.filter((value) => value.archived === conditionArchived).length ===
        0 ? (
        <h3>Empty Data</h3>
      ) : (
        <div className={styles["notes-list"]}>
          {searchInput === '' ? (
            notes.map((note) => {
              return (
                note.archived === conditionArchived && (
                  <NoteItem
                    key={note.id}
                    note={note}
                    handleDelete={handleDelete}
                    handleArchive={handleArchive}
                  />
                )
              );
            })
          ) : searchKeywords.filter((value) => value.archived === conditionArchived)
              .length === 0 ? (
            <h3>Data is not found</h3>
          ) : (
            searchKeywords.map((note) => {
              return (
                note.archived === conditionArchived && (
                  <NoteItem
                    key={note.id}
                    note={note}
                    handleDelete={handleDelete}
                    handleArchive={handleArchive}
                  />
                )
              );
            })
          )}
        </div>
      )}
    </>
  );
};

export default NotesList;
