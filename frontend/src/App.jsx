import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'

function App() {

  return (
    <div>
      <div className="flex flex-row">
        <div className= " w-20 bg-blue-500 rounded-md p-8">01</div>
        <div className= " w-20 bg-blue-500 rounded-md p-8">02</div>
        <div className= " w-20 bg-blue-500 rounded-md p-8">03</div>
      </div>
      <div className="flex flex-row">
        <div className= " w-20 bg-blue-500 rounded-md p-8">04</div>
        <div className= " w-20 bg-blue-500 rounded-md p-8">05</div>
        <div className= " w-20 bg-blue-500 rounded-md p-8">06</div>

      </div>
      <div className="flex flex-row">
        <div className= " w-20 bg-blue-500 rounded-md p-8">07</div>
        <div className= " w-20 bg-blue-500 rounded-md p-8">08</div>
        <div className= " w-20 bg-blue-500 rounded-md p-8">09</div>
      </div>
    </div>
  )
}

export default App
