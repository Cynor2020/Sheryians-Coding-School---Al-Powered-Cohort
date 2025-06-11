import { toast, ToastContainer } from "react-toastify";

function Read({ todos, setTodos }) {
  const deleteHandler = (id) => {
    const filtered = todos.filter(todo => todo.id !== id);
    setTodos(filtered);
    toast.error("Deleted!")
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-pink-400 mb-4">
        Pending <span className="text-white">Todos</span>
      </h2>

      <ul className="space-y-4">
        {todos.length === 0 ? (
          <li className="text-gray-400">No todos available.</li>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded shadow"
            >
              <span>{todo.title}</span>
              <button
                onClick={() => deleteHandler(todo.id)}
                className="text-red-400 hover:text-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Read;
