import dynamite from "./fx/Boom goes the dynamite.mp3"
import greatSuccess from "./fx/Borat Great Success.mp3"
import DJ from "./fx/DJ Airhorn Sound Effect.mp3"

import "./App.css"

const fireSound = (effect) => {
  const audio = new Audio(effect)
  audio.play()
}

function App() {
  return (
    <div className="App">
      <button onClick={() => fireSound(dynamite)} className="absolute top-20 left-20">🧨</button>
      <button onClick={() => fireSound(greatSuccess)} className="absolute top-20 right-20">👍👍</button>
      <button onClick={() => fireSound(DJ)} className="absolute bottom-20 right-20">📯</button>
    </div>
  )
}

export default App
