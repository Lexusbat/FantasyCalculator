import Calculator from "./components/calculator";
import Mascot from "./assets/mascot2.png";
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Calculator />
      <div className="w-150 h-150">
        <img className="" src= {Mascot} alt="Mascot" />
      </div>
      
    </div>
  )
}

export default App;
