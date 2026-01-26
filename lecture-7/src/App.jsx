import { useEffect, useState } from "react";
import { usePost } from "../hooks/usePost";
import { useFetch } from "../hooks/useFetch";
function App(){
  const [ currentPost, setcurrentPost] = useState(1);
  const {finaldata} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);
  return <div>
  <button onClick={() => setcurrentPost(1)}>1</button>
  <button onClick={() => setcurrentPost(2)}>2</button>
  <button onClick={() => setcurrentPost(3)}>3</button>
  {JSON.stringify(finaldata)}
  </div>

}
export default App;