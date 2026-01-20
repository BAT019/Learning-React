// Counter Application using context API vs Using Recoil Library

// 1. Using Context API
import { createContext, useContext, useState } from "react";

const CountContext = createContext();
function App(){
    return <div>
         <Parent />
    </div>
}
function CountContextprovider({children}){
    const [count , setCount] = useState(0);
    return (<CountContext.Provider value = {{count, setCount}}>{children}</CountContext.Provider>)
}
function Parent (){
  return(
    <CountContextprovider>
    <Value />
    <Increase />
    <Decrease />
    </CountContextprovider>
  )
}
function Value(){
    const {count} = useContext(CountContext)
    return <div>
      Count : {count}
    </div>
}
function Increase(){   
    const {setCount} = useContext(CountContext) 
    return <button onClick={() => setCount(count => count+1)}>Increase</button>
}
function Decrease(){
    const {setCount} = useContext(CountContext) 
    return <button onClick={() => setCount(count => count-1)}>Decrease</button>
}

export default App;


// 2. USing Recoil Library

