import Calculator from "./components/calculator";
import Mascot from "./assets/mascot2.png";
function App() {
  return (
    <> 
    <div className="bg-blue-950 ">
          <div className="bg-white rounded-full">
            <img className="animate-bounce flex justify-start" src={Mascot} alt="Mascot" />
                        <h1 className="flex items-center justify-center fondamento-regular text-9xl absolute inset-x-0 top-20">Calculator</h1>
          </div>
    </div>
      <div className="bg-blue-950 min-h-screen flex items-center justify-center  ">
        <Calculator />
      </div>
    </>
  )
}

export default App;
