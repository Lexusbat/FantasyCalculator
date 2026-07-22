import Calculator from "./calculator";
import Mascot from "./assets/mascot2.png";
function App() {
  return (
    <>
      <div className="bg-blue-950 h-full">
        <div className="bg-white rounded-full h-[20vh]">
          <img className="animate-bounce flex justify-start" src={Mascot} alt="Mascot" />
          <h1 className="flex items-center justify-center pirata-one-regular  text-9xl absolute inset-x-0 top-10">Calculator</h1>
        </div>
        <div className="bg-blue-950 flex items-center justify-center h-[80vh]">
          <Calculator />
        </div>
      </div>
    </>
  )
}

export default App;
