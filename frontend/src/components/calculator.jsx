import { useState } from 'react'
import Display from './display'
import ButtonGrid from './buttongrid'

function Calculator() {

    const [display, setdisplay] = useState("")

    return
    <>
        < Display value={display} />
        < ButtonGrid
            display={display}
            setdisplay={setdisplay} />
    </>

}

export default Calculator;