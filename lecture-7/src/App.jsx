import { useEffect, useState } from "react";
import { usePost } from "../hooks/usePost";
import { useFetch } from "../hooks/useFetch";
import { usePrev } from "../hooks/usePrev";
function App(){
  
}
export default App;






//-------------------UsePrev--------------
//  const[state, setState] = useState(0);
//  const prev = usePrev(state);
//  return(<div>
//    <p>{state}</p>
//    <button onClick={() => {setState(c => c+1)}}>Click</button>
//    <p>Previous value was: {prev}</p>
//  </div>
//  )


//--------------------UseFetch---------------
// const [ currentPost, setcurrentPost] = useState(1);
// const {finaldata, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);
// if(loading){
//   return <div>
//     Loading....
//   </div>
// }
// return <div>
// <button onClick={() => setcurrentPost(1)}>1</button>
// <button onClick={() => setcurrentPost(2)}>2</button>
// <button onClick={() => setcurrentPost(3)}>3</button>
// {JSON.stringify(finaldata)}
// </div>
