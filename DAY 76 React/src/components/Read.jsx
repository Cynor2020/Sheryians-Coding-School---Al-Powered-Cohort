import { useState } from 'react';

function Read(props) {
    const todos = props.todos;
    const setTodos = props.setTodos;

    const [title, setTitle] = useState("");

  return (
    <div>
      <br />
      <br />
      <h2>Panding Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title} - {todo.isCompleted ? "Done" : "Pending"}</li>
        ))}
      </ul>
    </div>
  )
}

export default Read
