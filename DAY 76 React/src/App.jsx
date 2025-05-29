import { useState } from 'react';
import { nanoid } from 'nanoid'; // nanoid import karna zaroori hai

function App() {
  const [city, setCity] = useState("mumbai");
  const [title, setTitle] = useState(""); // title input ke liye state
  const [id , setId] = useState(nanoid());

  const buttoncss = {
    backgroundColor: "red"
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const newtodo = {
      id: nanoid(),
      title,
      isCompleted: false,
      city, // selected city bhi object mein add kar liya
    };

    setId(nanoid());
    setTitle("");
    
  };

  return (
    <form onSubmit={submitHandler}>
      <h3>Generated ID: {id}</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
     
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="delhi">Delhi</option>
        <option value="mumbai">Mumbai</option>
        <option value="nashik">Nashik</option>
      </select>

      <button style={buttoncss} type="submit">Add Todo</button>


      <h1 style={{color:"red" , backgroundColor:"black"}}>Sarthak Gadakh</h1>
    </form>
  );
}

export default App;
