import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Title from './components/Title.jsx'
import Button from './components/Button.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Title>hello world</Title>
      <Button callback={clickHndler}>hello world</Button>
    </div>
  )
}

export default App