import { nanoid } from 'nanoid';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';

import { recipecontext } from '../context/RecipeContext';

function Create() {

  const { data , setdata} = useContext(recipecontext)
  const { register , handleSubmit , reset} = useForm();


  const SubmitHandler = (recipe) => {
    console.log(recipe);
    recipe.id = nanoid();

    const copydata = [...data];
    copydata.push(recipe)
    setdata(copydata)
    reset();
  }

  return (
    <form onSubmit={handleSubmit(SubmitHandler)} className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      <input className="border-b outline-0 p-2" {...register("title")} type="text" placeholder='Enter Racipe Name'/>
      <small className="text-red-400">This is error Show</small>
      <input className="border-b outline-0 p-2" {...register("image")} type="url" placeholder='Enter image url'/>
      <small className="text-red-400">This is error Show</small>
      <textarea className="border-b outline-0 p-2" {...register("discription")} placeholder="//Enter Description"></textarea>
      <small className="text-red-400">This is error Show</small>
      <textarea className="border-b outline-0 p-2" {...register("instruction")} placeholder="//Enter instruction"></textarea>
      <small className="text-red-400">This is error Show</small>
      <select {...register("category")}>
        <option className='text-red-800' value="cat-1">category 1</option>
        <option className='text-red-800' value="cat-2">category 2</option>
        <option className='text-red-800' value="cat-3">category 3</option>
      </select>
      <button className='mt-5 block bg-zinc-900 px-4 py-2'>Save Racipe</button>
    </form>
  )
}

export default Create
