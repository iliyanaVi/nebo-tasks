/* eslint-disable react/prop-types */
import React from "react";
import styles from "./DisplayEntries.module.css";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase.ts";

const DisplayEntries = ({ entries, fetchEntries }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    const entryId = e.target.id;
    await deleteDoc(doc(db, "diaryEntries", `${entryId}`));
    fetchEntries();
  };

  return (
    <>
      {entries?.length > 0 && (
        <>
          <h2 className={styles.header}>Diary Entries</h2>
          <section className={styles.wrapper}>
            {entries?.map((entry) => (
              <div key={entry.id}>
                <button
                  onClick={handleDelete}
                  id={entry.id}
                  className={styles.deleteButton}
                >
                  X
                </button>
                <div className={styles.card}>
                  <h3>{entry.title}</h3>
                  <p>{entry.content}</p>
                  <div className={styles.dateWrapper}>
                    <small>{entry.date}</small>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default DisplayEntries;
