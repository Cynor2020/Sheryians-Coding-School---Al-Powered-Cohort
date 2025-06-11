

function App() {
  const arr = [
    { name: "Sarthak", age: 20 },
    { name: "Sai", age: 29 },
    { name: "Ram", age: 30 }
  ];

  let data = arr.map((profile, index) => {
    return (
      <div key={index}>
        <h1>{profile.name}</h1>
        <p>Age: {profile.age}</p>
      </div>
    );
  });


  return (
    <div>
      {data}
    </div>
  );
}

export default App;
