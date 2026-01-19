import { useState } from "react";
import { PostContent } from "./post";
function App() {
  const[posts , setPosts] = useState([]);

  const PostComponents = posts.map(post => <PostContent
    name = {post.name}
    subtitle={post.subtitle}
    time={post.time}
    image ={post.image}
    description = {post.description}
  />)
  function addPost(){
    setPosts([...posts, {
    name : "Atharv",
    subtitle : "500 followers",
    time : "2m ago",
    image : "https://tinypng.com/static/images/panda_with_cord.webp",
    description : "Hey there! I am on linkedin"
    }])
    
  }
  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add Post</button>
      <div style= {{display:"flex", justifyContent: "Center"}}>
        <div>
        {PostComponents}
        </div>
      </div>
    </div>
  )
}
export default App;