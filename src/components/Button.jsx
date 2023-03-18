import { useState } from 'react'
import '../styles/Button.css'


function Button(props) 
{
   function defaultCallBack(){

   }
   function onBtnClick()
   {
    if(props.callback && props.viariant !== "disable"){
        props.callback();
    }
    else
    {
        defaultCallBack();
    }
   }


   return (
    <div onClick={onBtnClick} className="Button">{props.text}</div>

   )
}



export default Button