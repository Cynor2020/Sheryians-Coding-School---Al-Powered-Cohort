import React, { useState } from 'react'

const Event = () => {
    const [username , setUsername] = useState("Sarthak");

    const changehandler = () =>{
        setUsername("Lokesh");
    };

    return(
        <div>
 <h2>{username}</h2>
 <button onClick={changehandler} > </button>

        </div>
       
    )
}

export default Event;
