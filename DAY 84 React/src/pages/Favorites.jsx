import React, { useContext } from 'react';
import { recipecontext } from '../context/RecipeContext';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const { data, favorites } = useContext(recipecontext);
  const navigate = useNavigate();

  const favoriteRecipes = data.filter((recipe) => favorites.includes(recipe.id));

  const renderFavorites = favoriteRecipes.length > 0 ? (
    favoriteRecipes.map((recipe) => (
      <div
        key={recipe.id}
        className="p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700 rounded-lg transition-colors"
        onClick={() => navigate(`/recipe/${recipe.id}`)}
      >
        <h1 className="text-xl font-semibold">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover mt-2 rounded-lg" />
        <p className="text-gray-300 mt-1">{recipe.discription}</p>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-400">No favorite recipes found.</p>
  );

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Your Favorite Recipes</h2>
      {renderFavorites}
    </div>
  );
};

export default Favorites;