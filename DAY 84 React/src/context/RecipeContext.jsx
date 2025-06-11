import React, { createContext, useState, useEffect } from 'react';

export const recipecontext = createContext(null);

const RecipeContext = ({ children }) => {
  // Initialize state from localStorage or empty array
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('recipes');
    return savedData ? JSON.parse(savedData) : [];
  });

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Save recipes to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(data));
  }, [data]);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Function to toggle favorite status
  const toggleFavorite = (recipeId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(recipeId)) {
        return prevFavorites.filter((id) => id !== recipeId);
      } else {
        return [...prevFavorites, recipeId];
      }
    });
  };

  return (
    <recipecontext.Provider value={{ data, setData, favorites, toggleFavorite }}>
      {children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;