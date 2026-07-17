import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'

function Button() {
  return <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition duration-200">Click Me</button>;
}



function App() {


  return (
    <div className=" m-20">
      <div className="flex flex-row  space-x-4 space-y-4 flex justify-center ">
        <div className=" w-20 h-20 bg-blue-500 rounded-md flex justify-center items-center ">01</div>
        <div className=" w-20 h-20 bg-blue-500 rounded-md flex justify-center items-center">02</div>
        <div className=" w-20 h-20 bg-blue-500 rounded-md flex justify-center items-center">03</div>
      </div>
      <div className="flex flex-row  space-x-4 space-y-4 flex justify-center ">
        <div className=" w-20 h-20 bg-blue-500 rounded-md flex justify-center items-center ">04</div>
        <div className=" w-20 h-20 bg-blue-500 rounded-md flex justify-center items-center">05</div>
        <div className=" w-20 h-20 bg-blue-500 rounded-md flex justify-center items-center">06</div>
      </div>
      <div className="flex flex-row  space-x-4 space-y-4 flex justify-center ">
        <div className=" w-20 h-20 bg-blue-500 rounded-md flex justify-center items-center ">07</div>
        <div className=" w-20 h-20 bg-blue-500 rounded-md flex justify-center items-center ">08</div>
        <div className=" w-20 h-20 bg-blue-500 rounded-md flex justify-center items-center ">09</div>
      </div>
      <Button />

    </div>
  )
}

export default App
