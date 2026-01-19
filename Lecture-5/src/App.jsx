import {BrowserRouter, Routes, Route , Link, Outlet} from "react-router-dom";
function App(){
    return <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path = "/project/my-info" element = {<Myinfo />} />
            <Route path = "/project/project-info" element = {< Projectinfo />} />
            <Route path = "/"  element = {< Landing />} />
            <Route path="*" element={<Errorpage />} />
            </Route>
        </Routes>
        </BrowserRouter>
      </div>
}
 
function Layout(){
    return <div style ={{height: "100vh"}}>
        <div> Header</div>
        <Link to= "/">Landing Page</Link>
        <Link to= "/project/my-info">Creator</Link>
        <Link to= "/project/project-info">Language</Link>
        <div style={{height:"90vh"}}>
          <Outlet/>
        </div>
        Footer
    </div>
}


function Landing(){
    return <div>
        Hello this is the landing page
    </div>
}

function Myinfo (){
    return <div>
        This project is created by Atharv Gupta
    </div>
}
function Projectinfo (){
    return <div>
        This project is created in React
    </div>
}
function Errorpage(){
    return <div>
        Error 404 page not found!
    </div>
}
export default App;