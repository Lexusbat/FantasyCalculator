import { useState } from 'react'
import Display from './display'
import ButtonGrid from './buttongrid'

function Calculator() {

    const [display, setDisplay] = useState("")

    return (
    <>
        < Display value={display} />
        < ButtonGrid
            display={display}
            setdisplay={setDisplay} />
    </>
    )
}

export default Calculator;