import dynamite from "./fx/Boom goes the dynamite.mp3"
import greatSuccess from "./fx/Borat Great Success.mp3"
import DJ from "./fx/DJ Airhorn Sound Effect.mp3"
import rickDJ from "./fx/DJ DROP THAT BEAT - AUDIO FROM JAYUZUMI.COM.mp3"
import lol from "./fx/El Risitas.mp3"
import bart from "./fx/The Full Postgame Interview Bart Scott Flies Over To Sal Paolantonio after Jets Win.mp3"
import toxic from "./fx/Britney Spears - Toxic (Official HD Video).mp3"
import zipItUp from "./fx//Dave Chappelle -zip it up and zip it out.mp3"
import canada from "./fx/AS THEY SAY IN CANADA PEACE OUT - AUDIO FROM JAYUZUMI.COM.mp3"
import stopIt from "./fx/Michael Jordan Stop It, Get Some Help.mp3"
import * as sounds from './fx'
import "./App.css"

const used_mp3z = [dynamite, greatSuccess, DJ, rickDJ, lol, bart, toxic, zipItUp, canada, stopIt].map((f) => f.split("/").slice(-1)[0])
//regex if needed: .replace(/\.[0-9a-z]+\.mp3/, ".mp3")

const used = (file) => used_mp3z.includes(file.split("/").slice(-1)[0])

const fireSound = (effect, start, duration) => {
  const audio = new Audio(effect)
  if (start) {
    audio.currentTime = start
  }
  if (duration) {
    audio.addEventListener('timeupdate', () => {
      if (audio.currentTime > start + duration) {
        audio.pause()
      }
    })
  }
  audio.play()
}

function App() {
  return (
    <div className="App">
    <button onClick={() => fireSound(dynamite)} className="absolute top-20 left-20">🧨boom goes the dynamite🧨</button>
      <button onClick={() => fireSound(stopIt)} className="absolute top-20 left-1/2">🛑stop it</button>
      <button onClick={() => fireSound(greatSuccess)} className="absolute top-20 right-20">👍great success👍</button>
      <div className="absolute bottom-20 left-20 gap-4 flex">
        <button onClick={() => fireSound(lol, 27, 10)}>🤣😹</button>
        <button onClick={() => fireSound(bart, 17.5, 1.5)}>💪anybody can be beat</button>
        <button onClick={() => fireSound(bart, 22.5, 1)}>💪felt great</button>
        <button onClick={() => fireSound(bart, 64.5, 2)}>💪can't wait!</button>
      </div>

      <div className="absolute bottom-20 left-[50%] gap-4 flex">
        <button onClick={() => fireSound(toxic, 0, 3.5)}>☣toxic</button>
      </div>

      <div className="absolute bottom-20 right-20 gap-4 flex">
        <button onClick={() => fireSound(rickDJ)}>drop that beat</button>
        <button onClick={() => fireSound(DJ)}>📯</button>
      </div>

      <div className="h-28"/>
      {Object.entries(sounds)
        .filter(([_, effect]) => !used(effect))
        // sort by name
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([name, effect]) => (
        <button key={name} onClick={() => fireSound(effect)} className="m-1 p-1 border text-sm border-black rounded">{name}</button>
      ))
      }
      <br/><br/>
      <div className="flex gap-2">
        <button onClick={() => fireSound(canada)}>🍁</button>
        <button onClick={() => fireSound(zipItUp, 29.5, 1.5)}>✌</button>
        <button onClick={() => fireSound(zipItUp, 58, 3.12)}>🤐</button>
      </div>
    </div>
  )
}

export default App
