import React, { useContext } from 'react';
import { recipecontext } from '../context/RecipeContext';
import { useNavigate } from 'react-router-dom';

const Recipes = () => {
  const { data, favorites, toggleFavorite } = useContext(recipecontext);
  const navigate = useNavigate();

  const renderRecipes = data.length > 0 ? (
    data.map((recipe) => (
      <div
        key={recipe.id}
        className="p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700 rounded-lg transition-colors"
        onClick={() => navigate(`/recipe/${recipe.id}`)}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">{recipe.title}</h1>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent navigation on heart click
              toggleFavorite(recipe.id);
            }}
            className="text-2xl"
          >
            {favorites.includes(recipe.id) ? '❤️' : '🤍'}
          </button>
        </div>
        <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover mt-2 rounded-lg" />
        <p className="text-gray-300 mt-1">{recipe.discription}</p>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-400">No recipes found.</p>
  );

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Your Recipes</h2>
      {renderRecipes}
    </div>
  );
};

export default Recipes;