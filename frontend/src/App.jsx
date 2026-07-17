import Calculator from "./components/calculator";
function Button() {
  return <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition duration-200">Click Me</button>;
}



function App() {


  return (
    <div className="min-h-screen flex items-center justify-center">
      <Calculator />
    </div>
  )
}

export default App
