
import { nanoid } from 'nanoid';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { todocontext } from "../Wrapper";
import React, { useContext } from 'react';



const Create = () => {
  const [todos, setTodos] = useContext(todocontext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const submitHandler = (data) => {
    data.isComplated = false;
    data.id = nanoid();
    console.log(data);
    const copytodos = [...todos];
    copytodos.push(data);
    setTodos(copytodos);
    toast.success("Done")
    reset();
  };

  




  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-semibold">
        Set <span className="text-red-400">Reminders</span> for tasks
      </h1>

      <form onSubmit={handleSubmit(submitHandler)} className="mt-8 space-y-4">
        <input
          {...register("title")}
          type="text"
          placeholder="title"
          className="w-full bg-transparent border-b-2 border-gray-500 outline-none text-lg p-2"
        />
        {errors && errors.title && errors.title.message(
          <small className="text-sm text-red-500">{errors.title.message}</small>
        )}

        <button
          type="submit"
          className="mt-4 border border-white px-6 py-2 rounded-md text-white hover:bg-white hover:text-black transition"
        >
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default Create;
