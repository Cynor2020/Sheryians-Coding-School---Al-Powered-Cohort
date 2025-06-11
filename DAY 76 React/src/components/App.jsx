import { useState } from 'react';
import Create from './Create';
import Read from './Read';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Done Bhia", isCompleted: true }
  ]);


  return (
    <div>
      <Create todos={todos} setTodos={setTodos}/>
      <Read todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
