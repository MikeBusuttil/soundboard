import { useState } from "react"

import dynamite from "./fx/Boom goes the dynamite.mp3"
import greatSuccess from "./fx/Borat Great Success.mp3"
import DJ from "./fx/DJ Airhorn Sound Effect.mp3"

import "./App.css"

function App() {
  const [audio1] = useState(new Audio(dynamite))
  const [audio2] = useState(new Audio(greatSuccess))
  const [audio3] = useState(new Audio(DJ))
  return (
    <div className="App">
      <button onClick={() => audio1.play()}>🧨</button>
      <button onClick={() => audio2.play()}>👍👍</button>
      <button onClick={() => audio3.play()}>📯</button>
    </div>
  )
}

export default App
