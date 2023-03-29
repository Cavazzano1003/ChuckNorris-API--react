import { useState, useEffect } from 'react'
import './styles/App.css'
import Title from './components/Title.jsx'
import Button from './components/Button.jsx'
import Dropdown from './components/Dropdown.jsx'
import JokeText from './components/JokeText.jsx'


function App() 
{

  const [joke, setJoke] = useState("");
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("")
  const [clicked, setClicked] = useState(false);

   let loadJokeCallback = function ()
   {
    
    let url = "https://api.chucknorris.io/jokes/random" + (currentCategory==="" ? "": "?category=" + currentCategory);
    fetch(url).then((resp)=>{
      return resp.json();
    }).then(data=>{
      setJoke(data.value);
      setClicked(true);
    }).catch((e)=>{
      console.log(e)
    })
   }

   let copyTextCallback = function ()
   {
    let JokeText = document.getElementById("JokeText");
    navigator.clipboard.writeText(JokeText.innerText);
   }



   useEffect(()=>{
    let url = "https://api.chucknorris.io/jokes/categories";
    fetch(url).then((resp)=>{
      return resp.json();
    }).then(data=>{
      if(categories.length=== 0){
        console.log("setCategories")
        setCategories(data);

      }
    }).catch((e)=>{
      console.log(e)
    })
   }, [])
   

   return (
     <div className="App" align="center">


        
        <Title>Joke norris</Title>
        
        <JokeText id='JokeText'>{joke}</JokeText><br/><br/>

          
        <Dropdown id='dropdown' list={categories} onselect={setCurrentCategory}></Dropdown>
        <br/><br/><br/><br/>
          <Button name='Carica' text='Carica il joke' callback={loadJokeCallback}></Button>
          <Button name='Clipboard' text='Copia il joke' callback={copyTextCallback} variant={clicked === true ? undefined : "disabled"}></Button>
     </div>
   )
}

export default App