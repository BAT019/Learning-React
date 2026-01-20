import { createContext, useContext, useState } from "react"

const BulbContext = createContext();   //defined the context

function App() {
const [bulbOn, SetBulbOn] = useState(true);      //provided the context
return <div>
  <BulbContext.Provider value ={{bulbOn : bulbOn, SetBulbOn : SetBulbOn }}> 
      <LightBulb />
  </BulbContext.Provider>
</div>
}

function LightBulb(){
  return <div>
  <BulbState />
  <ToggleBulbState/>
 </div>
}

function BulbState(){
   const {bulbOn} = useContext(BulbContext);       //consumed the context
  return <div>
     {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function ToggleBulbState(){     //but need to be used here : here come rolling state
  const {bulbOn, SetBulbOn} = useContext(BulbContext);
  function toggle(){
    SetBulbOn (!bulbOn)
  }
 return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App
