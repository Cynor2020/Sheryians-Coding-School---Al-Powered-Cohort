import { useState } from 'react'

const App = () => {
    const [user, setUser] = useState([
      {name:"Sarthak", age:20},
      {name:"Sarthak", age:20}
    ]);


    const render = user.map((user, index) => {
      return <p>name: {user.name}</p>
    })


    const [fullname , setfullname] = useState("");
    const changehandler = (e) => {
         setfullname(e.target.value);
    };


    const handles = (e) => {
      e.preventDefault();
      const newuser = {fullname}
      console.log(newuser);
      
    }

    return(
    <div>App
      {render}
      <form onSubmit={handles}>
        <h1>Enter Data</h1>
        <h2>{fullname}</h2>
        <input type="text" onChange={changehandler} value={fullname} placeholder='Name' />
        <button type="submit">Send Data</button>
      </form>
    </div>
    )
}

export default App
