import React from "react";
import { showFormattedDate } from "../../utils/index";
import styles from './NoteItem.module.css'

const NoteItem = ({ note, handleDelete, handleArchive }) => {
  return (
    <div className={styles.items}>
      <div className={styles.item}>
        <h3 className={styles.title}>{note.title}</h3>
        <p className={styles.date}>{showFormattedDate(note.createdAt)}</p>
        <p className={styles.body}>{note.body}</p>
      </div>
      <div className={styles.action}>
        <button
          onClick={() => handleDelete(note.id)}
          className={styles['delete-button']}
        >
          Delete
        </button>
        <button
          onClick={() => handleArchive(note.id)}
          className={styles['archive-button']}
        >
          {note.archived ? "Move Note" : "Archive Note"}
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
