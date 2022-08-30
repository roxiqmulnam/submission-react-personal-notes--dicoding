import styles from "./index.module.css";
const NoteFormInput = ({
  handleSubmit,
  limit,
  inputTitle,
  handleChange,
  inputBody,
  onChange,
}) => {
  return (
    <div className={styles.noteInput}>
      <h2>Add Notes</h2>
      <form action="#" onSubmit={handleSubmit}>
        <p className={styles.charLimit}>Max length title: {limit} / 50</p>
        <input
          value={inputTitle}
          onChange={handleChange}
          type="text"
          className={styles.title}
          placeholder="Title ..."
          required
        />
        <textarea
          className={styles.body}
          value={inputBody}
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
