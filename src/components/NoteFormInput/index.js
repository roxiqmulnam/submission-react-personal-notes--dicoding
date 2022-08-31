import React from "react";
import styles from "./NoteInput.module.css";
const NoteFormInput = ({ handleSubmit, limitTitle, inputTitle, handleChange, createNote, onChange }) => {
  return (
    <div className={styles["note-input"]}>
      <h2>Add Notes</h2>
      <form action="#" onSubmit={handleSubmit}>
        <p className={styles["char-limit"]}>{limitTitle} / 50</p>
        <input
          className={styles.title}
          value={inputTitle}
          onChange={handleChange}
          type="text"
          placeholder="Title ..."
          required
        />
        <textarea
          className={styles['create-note']}
          value={createNote}
          onChange={onChange}
          type="text"
          placeholder="Creata a Note ...."
          required
        ></textarea>
        <button className="btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default NoteFormInput;
