import { useState } from 'react';
import { nanoid } from 'nanoid';

function Create(props) {
    const todos = props.todos;
    const setTodos = props.setTodos;

    const [title, setTitle] = useState("");

    const buttoncss = {
       color: "red",
       padding: "5px 10px",
       border: "2px solid white",
       backgroundColor: "transperent",
       borderRadius: "10px"
        
    }

    const submitHandler = (e) => {
        e.preventDefault();
    
        const newtodo = {
          id: nanoid(),
          title,
          isCompleted: true
        };
    
        const copyTodos = [...todos];
        copyTodos.push(newtodo);
        setTodos(copyTodos);
    
        setTitle("");
      };
  return (
    <div>
        <form onSubmit={submitHandler}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />

      <button style={buttoncss} type="submit">Add Todo</button>
      <br />
    </form>
    </div>
  )
}

export default Create
