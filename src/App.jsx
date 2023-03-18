import { useState } from 'react'
import './styles/App.css'
import Title from './components/Title.jsx'
import Button from './components/Button.jsx'
import Dropdown from './components/Dropdown.jsx'
import JokeText from './components/JokeText.jsx'


function App() 
{

  const [joke, setJoke] = useState("")

   let loadJokeCallback = function (){
     console.log("carica joke");
     setJoke("testo joke");
   }
   let copyTextCallback = function (){
     console.log("copiato")
   }
   return (
     <div className="App">
        {joke}
        <Title>hello world</Title>
        <div>
          <Button text='Carica il joke' callback={loadJokeCallback}/>
          <Button text='Carica il joke con una categoria' callback={loadJokeCallback}/>
        </div>
       <Button text='Copia il joke' variant={ joke === "" ? "disable" : undefined} callback={copyTextCallback}/>
     </div>
   )
}

export default App