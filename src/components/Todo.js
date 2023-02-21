import React from "react";
import { useState } from "react";

const Todo = () => {
  //to set the todo in the list
  const [todo, setTodo] = useState("");

  //to check if todo list editing
  const [isEditing, setIsEditing] = useState(false);

  //  const [todos,setTodos] = useState('');

  const onAddHandler = (e) => {
    e.preventdefault();
    setTodo(list)
  };
  const list = () =>{
    ...todo ,
    
  }

  const onDeleteHandler = (e) => {};

  const onChangeEditHandler = (e) => {
    // e.preventdefault()
    setIsEditing(true);
  };

  const onSaveHandler = (e) => {
    // e.preventdefault()
    setIsEditing(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center" }}>Todo </h1>

      {!isEditing ? (
        <form onSubmit={onAddHandler}>
          <label>Add Todo </label>
          <br />
          <br />
          <input type="text" placeholder="Add text here"></input>
          <button onClick={onAddHandler} value={todo} type="submit">
            Add
          </button>

          <li> Default </li>
          <button onClick={onChangeEditHandler}> Edit</button>
          <button onClick={onDeleteHandler}>Delete</button>
        </form>
      ) : (
        <form>
          <label>Edit Todo</label>
          <br />
          <br />
          <input type="text" placeholder="Add text here"></input>

          <button onClick={onSaveHandler} value={isEditing}>
            save
          </button>
          <button>cancel</button>
        </form>
      )}
    </div>
  );
};

export default Todo;
