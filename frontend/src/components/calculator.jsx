import { useState } from 'react'
import Display from './display'
import ButtonGrid from './buttongrid'

function Calculator() {
  const [display, setDisplay] = useState("")

  return (
    <>
     <div className='bg-white rounded-xl absolute inset-center flex items-center justify-center top-70 w-50 h-10'>
        <Display value={display} />
     </div>
      <ButtonGrid display={display} setDisplay={setDisplay} />
    </>
  )
}

export default Calculator;
