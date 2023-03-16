import { useState } from 'react'
import '../styles/Button.css'


function Button({text, variant, callback}) {
    const [count, setCount] = useState(0)
    let clickHandler = function(e){
        if(callback != undefined && variant != "disable")
        {
            callback();
        }
    }

    let classRender = function (){
        let classes = [
            'Button', variant
        ]
        return cclasses.join("")
    }

    return (
        <div onclick={ clickHandler } className= { classRender() }>
            {text}
        </div>
    )
}

export default Button