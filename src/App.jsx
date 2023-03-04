import { useState } from 'react'
import Homepage from './components/Homepage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Homepage/>
    </div>
  )
}

export default App
