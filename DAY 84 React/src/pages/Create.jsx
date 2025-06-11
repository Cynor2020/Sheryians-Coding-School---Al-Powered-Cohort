import { nanoid } from 'nanoid';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { recipecontext } from '../context/RecipeContext';

function Create() {
  const { data, setData } = useContext(recipecontext); // Fixed: setdata to setData
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState('');

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    const updatedData = [...data, recipe];
    setData(updatedData); // Fixed: setdata to setData
    reset();
    setSuccessMessage('Recipe saved successfully!');
    setTimeout(() => {
      setSuccessMessage('');
      navigate('/recipes'); // Redirect to recipes page after 2 seconds
    }, 2000);
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      {successMessage && (
        <p className="text-green-500 text-center mb-4">{successMessage}</p>
      )}
      <form onSubmit={handleSubmit(SubmitHandler)} className="flex flex-col gap-4 w-full">
        <div>
          <input
            className={`border-b outline-0 p-2 w-full bg-gray-800 text-white ${errors.title ? 'border-red-500' : 'border-gray-600'}`}
            {...register("title", { required: "Recipe name is required" })}
            type="text"
            placeholder="Enter Recipe Name"
          />
          {errors.title && (
            <small className="text-red-400">{errors.title.message}</small>
          )}
        </div>

        <div>
          <input
            className={`border-b outline-0 p-2 w-full bg-gray-800 text-white ${errors.image ? 'border-red-500' : 'border-gray-600'}`}
            {...register("image", { required: "Image URL is required" })}
            type="url"
            placeholder="Enter image URL"
          />
          {errors.image && (
            <small className="text-red-400">{errors.image.message}</small>
          )}
        </div>

        <div>
          <textarea
            className={`border-b outline-0 p-2 w-full bg-gray-800 text-white ${errors.discription ? 'border-red-500' : 'border-gray-600'}`}
            {...register("discription", { required: "Description is required" })}
            placeholder="Enter Description"
            rows="4"
          />
          {errors.discription && (
            <small className="text-red-400">{errors.discription.message}</small>
          )}
        </div>

        <div>
          <textarea
            className={`border-b outline-0 p-2 w-full bg-gray-800 text-white ${errors.inst ? 'border-red-500' : 'border-gray-600'}`}
            {...register("inst", { required: "Instructions are required" })}
            placeholder="Enter instruction"
            rows="4"
          />
          {errors.inst && (
            <small className="text-red-400">{errors.inst.message}</small>
          )}
        </div>

        <div>
          <select
            className="border-b outline-0 p-2 w-full bg-gray-800 text-white"
            {...register("category", { required: "Category is required" })}
          >
            <option value="" disabled>Select a category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
          {errors.category && (
            <small className="text-red-400">{errors.category.message}</small>
          )}
        </div>

        <button
          type="submit"
          className="mt-5 block bg-zinc-900 hover:bg-zinc-800 px-4 py-2 text-white rounded-lg transition-colors"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
}

export default Create;