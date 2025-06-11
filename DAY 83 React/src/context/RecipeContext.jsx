import React, { createContext, useState } from 'react';

export const recipecontext = createContext(null);

const RecipeContext = ({ children }) => {
  const [data, setdata] = useState([]);
  console.log(data);
  
  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
