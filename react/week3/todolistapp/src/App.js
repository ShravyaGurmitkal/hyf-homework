import './App.css';
import React from "react";
import TodoTitle from "./components/TodoTitle";
import Time from "./components/Time";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className='App'>
      <TodoTitle />
      <Time />
      <TodoList/> 
    </div>
  );
}

export default App;
