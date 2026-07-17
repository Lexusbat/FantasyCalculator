import Calculator from "./components/calculator";
import Mascot from "./assets/mascot2.png";
function App() {
  return (
    <> 
    <div className="bg-blue-950 ">
          <div className="bg-white rounded-full flex justify-start">
            <img className="animate-bounce" src={Mascot} alt="Mascot" />
          </div>
    </div>
      <div className="bg-blue-950 min-h-screen flex items-center justify-center  ">
        <Calculator />
        

        
      </div>
    </>
  )
}

export default App;
