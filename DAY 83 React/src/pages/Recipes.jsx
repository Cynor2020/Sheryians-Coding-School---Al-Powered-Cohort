import React, { useContext } from 'react';
import { recipecontext } from '../context/RecipeContext';

const Recipes = () => {
  const { data } = useContext(recipecontext);

  // Safely map recipes
  const renderRecipes = data.length > 0 ? (
    data.map((recipe) => (
      <div key={recipe.id} className="p-4 border-b">
        <h1 className="text-xl font-semibold">{recipe.title}</h1>
        
        <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover mt-2" />
        <p className="text-gray-600 mt-1">{recipe.discription}</p>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-500">No recipes found.</p>
  );

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Your Recipes</h2>
      {renderRecipes}
    </div>
  );
};

export default Recipes;
