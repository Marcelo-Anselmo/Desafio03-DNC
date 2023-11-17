// import { useState } from 'react'
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import "./index.scss";
import { db } from "./mockup/mockup.js";

function App() {
  return (
    <>
      <Header />
      <TaskList database={db} />
    </>
  );
}

export default App;
