import PassGenerate from "./PassGenerate";

function App() {
  return (
    <div className="h-screen w-full bg-gray-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold text-center mb-10">Password Generator</h1>
      <PassGenerate/>
    </div>
  );
}

export default App;
