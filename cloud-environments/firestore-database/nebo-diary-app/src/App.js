import React from "react";
import AddEntryPage from "./pages/AddEntryPage";
import Navbar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddEntryPage />
    </div>
  );
}

export default App;
