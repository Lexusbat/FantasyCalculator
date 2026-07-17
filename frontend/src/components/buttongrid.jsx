import Buttons from './buttons'

function ButtonGrid({ display }, { setDisplay }) {
return (
<>
<button>
    value = "1"
    display = {display}
    setdisplay = {setDisplay}
</button>

<button>
    value = "1"
    display = {display}
    setdisplay = {setdisplay}
</button>

</>
)
}
export default ButtonGrid;