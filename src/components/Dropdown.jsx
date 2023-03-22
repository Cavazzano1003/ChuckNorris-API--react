import { useState } from 'react'
import '../styles/Dropdown.css'

function Dropdown({list}) {

function renderClasses(){
    let classes = [
      'Dropdown', 'text-center', 'd-flex',
    ]

    return classes.join(" ")
  }

  return (
    <div className={renderClasses()}>
      <select>
        <option>Scegli una opzione</option>
        {list.map((el,index)=> {return <option value={el} key={index}>{el}</option>})}
      </select>
    </div>
  )
}

export default Dropdown