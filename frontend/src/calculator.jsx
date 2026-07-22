import { useState } from 'react'
import Display from './components/display'
import ButtonGrid from './components/buttongrid'

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
 return (
    <div className="calculator">
      <div className="calculator-input">
        <div className="result">{result} </div>
      </div>
      <div className="calculator-keypad">
        <div className="keys-function">
          <CalculatorKey keyValue={"c"} onClick={handleOperation} />
          <CalculatorKey keyValue={"\xB1"} onClick={handleOperation} />
          <CalculatorKey keyValue={"%"} onClick={handleOperation} />
        </div>
        <div className="keys-operators">
          <CalculatorKey keyValue={"+"} onClick={handleOperation} />
          <CalculatorKey keyValue={"-"} onClick={handleOperation} />
          <CalculatorKey keyValue={"*"} onClick={handleOperation} />
          <CalculatorKey keyValue={"/"} onClick={handleOperation} />
          <CalculatorKey keyValue={"="} onClick={handleOperation} />
        </div>
        <div className="keys-numbers">
          <CalculatorKey keyValue={9} onClick={handleOperation} />
          <CalculatorKey keyValue={8} onClick={handleOperation} />
          <CalculatorKey keyValue={7} onClick={handleOperation} />
          <CalculatorKey keyValue={6} onClick={handleOperation} />
          <CalculatorKey keyValue={5} onClick={handleOperation} />
          <CalculatorKey keyValue={4} onClick={handleOperation} />
          <CalculatorKey keyValue={3} onClick={handleOperation} />
          <CalculatorKey keyValue={2} onClick={handleOperation} />
          <CalculatorKey keyValue={1} onClick={handleOperation} />
          <CalculatorKey
            className="key-dot"
            keyValue={"."}
            onClick={handleOperation}
          />
          <CalculatorKey
            className="key-zero"
            keyValue={0}
            onClick={handleOperation}
          />
        </div>
      </div>
    </div>
  );
    </>
  )
}

export default Calculator;
