import dynamite from "./fx/Boom goes the dynamite.mp3"
import greatSuccess from "./fx/Borat Great Success.mp3"
import DJ from "./fx/DJ Airhorn Sound Effect.mp3"
import * as sounds from './fx'
// import every MP3 from the fx directory

import "./App.css"

const fireSound = (effect) => {
  const audio = new Audio(effect)
  audio.play()
}

function App() {
  console.log(sounds)
  return (
    <div className="App">
      <button onClick={() => fireSound(dynamite)} className="absolute top-20 left-20">🧨boom goes the dynamite🧨</button>
      <button onClick={() => fireSound(greatSuccess)} className="absolute top-20 right-20">👍great success👍</button>
      <button onClick={() => fireSound(greatSuccess)} className="absolute top-20 right-20">👍great success👍</button>
      <button onClick={() => fireSound(DJ)} className="absolute bottom-20 right-20">📯</button>

      <div className="h-28"/>
      {Object.entries(sounds).map(([name, effect]) => (
        <button key={name} onClick={() => fireSound(effect)} className="m-1 p-1 border text-sm border-black rounded">{name}</button>
      ))
      }
    </div>
  )
}

export default App
