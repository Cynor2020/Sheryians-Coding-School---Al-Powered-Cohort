import { Fragment } from "react"

const App = () => {

  // js login
  const lokesh = () =>{
    alert("Hello")
  }


  
  const data =(msg)=>{
    alert(msg)
  }






  const chat = (msgs) => {
    alert(msgs)
  }
  const chatadd = () => {
     chat("Mi Alert Send Kiya function me")
  }


  return(
    <>
      <div>Sarthak</div>
      <div>Gadakh</div>
      <button onClick={lokesh}>Click Hear</button>

      <button onClick={chatadd}>function me data bhej</button>

      <button onClick={() => data("Done sarthak")}>This Is Paramitrizes Function</button>
    </>
  )
  
}

export default App
