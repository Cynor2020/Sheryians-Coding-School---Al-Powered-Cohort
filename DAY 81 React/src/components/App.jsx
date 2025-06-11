import Create from "./Create";
import Read from "./Read";

function App() {
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 py-10">
      
        <div className="flex-1">
          <Create />
        </div>

        <div className="flex-1">
          <Read />
        </div>
      </div>
    </div>
  );
}

export default App;
