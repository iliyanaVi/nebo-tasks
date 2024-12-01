import React, { useState, useEffect } from "react";
import styles from "./AddEntryPage.module.css";
import DisplayEntries from "../components/DisplayEntries";
import {
  doc,
  setDoc,
  getDocs,
  collection,
  Timestamp,
} from "firebase/firestore";
import { db } from "../config/firebase.ts";

const AddEntryPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [entries, setEntries] = useState([]);

  const fetchEntries = async () => {
    await getDocs(collection(db, "diaryEntries")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEntries(newData);
    });
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title && content) {
      await setDoc(doc(db, "diaryEntries", `${Timestamp.now().nanoseconds}`), {
        id: Timestamp.now().nanoseconds,
        title,
        content,
        date: new Date().toLocaleDateString(),
      });
      fetchEntries();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Add New Entry</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="title">
            Title:
          </label>
          <input
            className={styles.inputField}
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="content">
            Content:
          </label>
          <textarea
            id="content"
            className={styles.textArea}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">
          Add Entry
        </button>
      </form>
      <DisplayEntries entries={entries} fetchEntries={fetchEntries} />
    </div>
  );
};

export default AddEntryPage;
