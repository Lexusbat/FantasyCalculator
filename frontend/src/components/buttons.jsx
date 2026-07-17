

function Button({value},{display},{setdisplay}){


 function HandleClick(){
    setDisplay(display + value)

    return(
    <button onClick={HandleClick}> 
       {value}
    </button>
    )


 }

export default Button;




}