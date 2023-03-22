import { useState } from 'react'
import './styles/App.css'
import Title from './components/Title.jsx'
import Button from './components/Button.jsx'
import Dropdown from './components/Dropdown.jsx'
import JokeText from './components/JokeText.jsx'


function App() 
{

  const [joke, setJoke] = useState("");
  const [categories, setCategories] = useState([]);
  const [clicked, setClicked] = useState(false);

  //carica 
   let loadJokeCallback = function ()
   {
    let categories = document.getElementById("Dropdown")
    let url = "https://api.chucknorris.io/jokes/" + (categories==="random"?"random":("random?category=") + categories);

    fetch(url).then((resp)=>{
      return resp.json();
    }).then(data=>{
      setJoke(data.value);
      setClicked(true);
    }).catch((e)=>{
      console.log(e)
    })
   }

   //copia
   let copyTextCallback = function ()
   {
    let JokeText = document.getElementById("JokeText");
    navigator.clipboard.writeText(JokeText.innerText);
     console.log("copiato");
   }

   //dropdown
   let url = "https://api.chucknorris.io/jokes/categories";
   fetch(url).then((resp)=>{
     return resp.json();
   }).then(data=>{
     data.unshift("random");
     setCategories(data);
   }).catch((e)=>{
     console.log(e)
   })

   return (
     <div className="App" align="center">

        
        <Title>Joke norris</Title>
        
        <JokeText id='JokeText'>{joke}</JokeText>

          <Button text='Carica il joke' callback={loadJokeCallback}></Button><br></br>

          <Dropdown id='Dropdown' list={categories}></Dropdown><br></br>

      <Button id='Clipboard' text='Copia il joke' callback={copyTextCallback} variant={clicked === true ? undefined : "disabled"}></Button>
     </div>
   )
}

export default App



{/* <div className="App">
<Title />
<p><Button text='Carica il joke' callback={loadJokeCallback}/></p>
<Dropdown id='Dropdown' values={Categories}></Select>
<Joke id="Joke">{Jokes}</Joke>
<Button id="Copy" text='Copia il joke' callback={copyTextCallback}/>
</div>
) */}