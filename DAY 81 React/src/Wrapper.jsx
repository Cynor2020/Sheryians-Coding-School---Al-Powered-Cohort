import React, { createContext, useState } from "react";

export const todocontext = createContext(null);

const Wrapper = (props) => {
  const [todos, setTodos] = useState([]);

  return (
    <todocontext.Provider value={[todos, setTodos]}>
      {props.children}
    </todocontext.Provider>
  );
};

export default Wrapper;
