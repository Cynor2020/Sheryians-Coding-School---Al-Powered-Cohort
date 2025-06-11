import { useState } from 'react';
import { nanoid } from 'nanoid';

function Create({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      setError(true);
      return;
    }

    const newtodo = {
      id: nanoid(),
      title,
      isCompleted: false
    };

    setTodos([...todos, newtodo]);
    setTitle("");
    setError(false);
  };

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-semibold">
        Set <span className="text-red-400">Reminders</span> for tasks
      </h1>

      <form onSubmit={submitHandler} className="mt-8 space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
          className="w-full bg-transparent border-b-2 border-gray-500 outline-none text-lg p-2"
        />
        {error && (
          <p className="text-sm text-red-500">title can not be empty</p>
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
