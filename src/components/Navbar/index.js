import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ searchInput, onChange }) => {
  return (
    <>
      <nav className={styles.header}>
        <h1>Note Apps</h1>
        <div>
          <input
            className={styles["note-input"]}
            value={searchInput}
            onChange={onChange}
            type="text"
            placeholder="Search Note..."
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
