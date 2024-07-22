import "./App.css";

function App() {
  console.log(import.meta.env.VITE_COOL_TEST);

  return (
    <>
      <h1>{import.meta.env.VITE_COOL_TEST}</h1>
    </>
  );
}

export default App;
