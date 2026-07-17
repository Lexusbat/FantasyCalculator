import { useState } from 'react'
import Display from './display'
import ButtonGrid from './buttongrid'

function Calculator() {
  const [display, setDisplay] = useState("")

  return (
    <>
     <div className='absolute inset-center top-25 h-16'>
        <Display value={display} />
     </div>
      <ButtonGrid display={display} setDisplay={setDisplay} />
    </>
  )
}

export default Calculator;
