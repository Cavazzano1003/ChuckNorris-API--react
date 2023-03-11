import { useState } from 'react'
import '../styles/Button.css'


function Button({text, variant, callback}) {
    const [count, setCount] = useState(0)

    }

    function clickHandler(){
        if(props.callback && props.vaariant!=="disable"){
            props.callback();
        }
        else{
            classRender();
        }
    }

    return(
        <div className="Button">
            <p><button className={"Button" + (props.varint!==undefined ? "disable" : "")} id = {props.id} onCick={clickHandler}>Caricare una random joke</button></p>
        </div>
    )


export default Button