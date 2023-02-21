import { React ,useState } from "react";


export default function Todo() {
  const [list, setList] = useState([{ id:'',text:'Default data'}]);
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  

  //on clicking add this function
  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };


//checks wheather is empty if not set to todo 
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setList([
        ...list,
        {
          id: list.length + 1,
          text: todo.trim(),
        },
      ]);
    }

    setTodo("");
  };

  // Delete functionality
  const handleDeleteClick = (id) => {
    const removeItem = list.filter((todo) => {
      return todo.id !== id;
    });
    setList(removeItem);
  };

  // function to edit a todo item
  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = list.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setList(updatedItem);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
    
  };

  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  };

  // function to handle when the "Edit" button is clicked
  const handleEditClick = (todo) => {
    // set editing to true
    setIsEditing(true);
    // set the currentTodo to the todo item that was clicked
    setCurrentTodo({ ...todo });
  };

  return (
    <div style={{textAlign:'center'}}>

    
   
      {isEditing ? (
        <form onSubmit={handleEditFormSubmit}>
          <h2>Edit Todo</h2>
          <label >Edit todo: </label><br />
          <input
            name="editTodo"
            type="text"
            placeholder="Edit todo"
            value={currentTodo.text}
            onChange={handleEditInputChange}
          />
          <button type="submit" onClick={()=>{
            
          }}>save</button>
          <button onClick={() => setIsEditing(false)}>cancel</button>
        </form>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <h2>Add Todo</h2>
          <label>Add todo: </label><br />
          <input
            name="todo"
            type="text"
            placeholder="Create a new todo"
            value={todo}
            onChange={handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
      )}

      <ul className="todo-list">
        {list.map((todo, index) => (
          <div key={todo.id}>
            <p>{todo.text}</p>
          
            <button onClick={() => handleEditClick(todo)}>Edit</button>
            <button onClick={() => handleDeleteClick(todo.id)}>Delete</button>

          </div>
          
        ))}


       
       
      </ul>
      {/* <button onClick={()=> setList([{id:'', text:''}])}>Delete All </button> */}
    </div>
  );
}