

function Button({value},{display},{setdisplay}){


 function HandleClick(){
    setdisplay(display + value)

    return
    <button onClick={HandleClick}> 
       {value}
    </button>


 }

export default Button;




}