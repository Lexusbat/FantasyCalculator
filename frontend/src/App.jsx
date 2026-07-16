import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'

function App() {

  return (
    <div>
      <div className="flex flex-row  space-x-4 ">
        <div className= " w-20 h-20 bg-blue-500 rounded-md ">01</div>
        <div className= " w-20 h-20 bg-blue-500 rounded-md">02</div>
        <div className= " w-20 h-20 bg-blue-500 rounded-md">03</div>
      </div>
      <div className="flex flex-row  space-x-4 ">
        <div className= " w-20 h-20 bg-blue-500 rounded-md ">04</div>
        <div className= " w-20 h-20 bg-blue-500 rounded-md ">05</div>
        <div className= " w-20 h-20 bg-blue-500 rounded-md ">06</div>

      </div>
      <div className="flex flex-row  space-x-4 ">
        <div className= " w-20 h-20 bg-blue-500 rounded-md ">07</div>
        <div className= " w-20 h-20 bg-blue-500 rounded-md ">08</div>
        <div className= " w-20 h-20                                                    bg-blue-500 rounded-md ">09</div>
      </div>
    </div>
  )
}

export default App
