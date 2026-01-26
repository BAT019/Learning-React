import { useEffect, useState } from "react";
import { usePost } from "../hooks/usePost";
function App(){
  const post = usePost();
  return <div>
  hello  <br />
  {post}
  </div>

}
export default App;