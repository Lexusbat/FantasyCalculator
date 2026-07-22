import { useState } from 'react'
import Display from './display'
import ButtonGrid from './buttongrid'

function Calculator() {

const [display, setDisplay] = useState("0")        // What the user sees
const [firstValue, setFirstValue] = useState(null)  // Left operand (e.g., 7 in "7+3")
const [operator, setOperator] = useState(null)      // Pending operator (e.g., "+")
const [waitingForNext, setWaitingForNext] = useState(false)  // Whether next digit starts a new number

function handleButtonClick(value) {
  // We'll build this logic step by step below
}



  return (
    <>
     <div className='bg-white rounded-xl absolute inset-center flex items-center justify-center top-70 w-50 h-10'>
      
     </div>
    </>
  )
}

export default Calculator;
