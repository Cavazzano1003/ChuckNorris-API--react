import { useState } from 'react'
import '../styles/Dropdown.css'

function Dropdown({list, onselect}) {

function renderClasses(){
    let classes = [
      'Dropdown', 'text-center', 'd-flex',
    ]

    return classes.join(" ")
  }

  function callback(e){
    console.log(e.currentTarget.value)
    if(onselect !== undefined){
      onselect(e.currentTarget.value)
    }
  }

  return (
    <div className={renderClasses()}>
      <select onChange={callback}>
        <option>Scegli una opzione</option>
        {list.map((el,index)=> {return <option value={el} key={index}>{el}</option>})}
      </select>
    </div>
  )
}

export default Dropdown