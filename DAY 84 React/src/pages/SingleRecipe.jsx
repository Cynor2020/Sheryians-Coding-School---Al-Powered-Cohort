import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { recipecontext } from '../context/RecipeContext';

const SingleRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, setData } = useContext(recipecontext);
  const [recipe, setRecipe] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    title: '',
    image: '',
    discription: '',
    inst: '',
    category: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const found = data.find((item) => item.id === id);
    if (found) {
      setRecipe(found);
      setForm(found);
    }
  }, [id, data]);

  const handleDelete = () => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    setSuccessMessage('Recipe deleted successfully!');
    setTimeout(() => {
      navigate('/recipes');
    }, 1500);
  };

  const handleUpdate = () => {
    const updatedData = data.map((item) => (item.id === id ? { ...item, ...form } : item));
    setData(updatedData);
    setRecipe(form);
    setIsEditing(false);
    setSuccessMessage('Recipe updated successfully!');
    setTimeout(() => {
      setSuccessMessage('');
    }, 1500);
  };

  if (!recipe) {
    return <p className="text-center mt-10 text-gray-400">Recipe not found</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-900 rounded-lg shadow-lg text-white">
      {successMessage && (
        <p className="text-green-500 text-center mb-4">{successMessage}</p>
      )}
      {isEditing ? (
        <div className="space-y-4">
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
            placeholder="Title"
          />
          <input
            type="text"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
            placeholder="Image URL"
          />
          <textarea
            value={form.discription}
            onChange={(e) => setForm({ ...form, discription: e.target.value })}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
            placeholder="Description"
            rows="4"
          />
          <textarea
            value={form.inst}
            onChange={(e) => setForm({ ...form, inst: e.target.value })}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
            placeholder="Instruction"
            rows="4"
          />
          <input
            type="text"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
            placeholder="Category"
          />
          <button
            onClick={handleUpdate}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-300 mb-2">{recipe.discription}</p>
          <p className="text-gray-400 text-sm mb-1">Instruction: {recipe.inst}</p>
          <p className="text-gray-400 text-sm mb-6">Category: {recipe.category}</p>
          <div className="flex gap-4">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleRecipe;