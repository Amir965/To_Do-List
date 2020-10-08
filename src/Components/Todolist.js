import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function Todolist() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItem(e) {
    e.preventDefault();
    setItems((preItems) => {
      return [...preItems, inputText];
    });
    setInputText("");
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form>">
        <form>
          <input onChange={handleChange} type="text" value={inputText} />
          <button onClick={(e) => addItem(e)} disabled={!inputText}>
            <span>Add</span>
          </button>
        </form>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
