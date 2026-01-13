// import { useEffect, useState } from "react";
// function App() {
//   // conditional rendering :  rendering something on the basis of a condition i.e. not everytime
//   let [counterVisible, setCounterVisible] = useState(true);
//   useEffect(function () {
//     setInterval(function () {
//       setCounterVisible((counterVisible) => !counterVisible);
//     }, 5000);
//   }, []);
//   return (
//     <div>
//       hi
//       {counterVisible && <Counter></Counter>}
//       hello
//     </div>
//   );
// }

// // -----------Counter Application---------------

// function Counter() {
//   const [count, setCount] = useState(0); //usestate hook i.e. creating state for our function
//   useEffect(function () {
//     // use effet hook prevents a function from gettng re-renderder again and again the function insisde useeffect hook will only run onc when the component is mounted.
//     console.log("Mounted")
//     let clock = setInterval(function () {
//       console.log("from inside setinterval")
//       setCount(count => count + 1);
//     }, 1000);
//     // cleanup function below
//     return function () {
//       console.log("Unmounted")
//       clearInterval(clock);    // this will run when the component unmounts.
//     };  
//   }, []); 
//   //this [] is called dependency array

//   function increaseCount() {
//     setCount(count + 1);
//   }
//   function decreaseCount() {
//     setCount(count - 1);
//   }
//   function resetCount() {
//     setCount(0);
//   }
//   //  this is a component
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increaseCount}>Increasre count</button>
//       <button onClick={decreaseCount}>decrease count</button>
//       <button onClick={resetCount}>reset count</button>
//     </div>
//   );
// }

// export default App;



// ------------------ Learning Dependency array ----------------------
 
import { useState , useEffect } from "react";

function App(){
const [count,setCount] = useState(0);
const [count2,setCount2] = useState(0);
function increase(){
setCount(c=> c+1);
}
function decrease(){
setCount2(c=> c-1);
}
return (
 <div>
  <Counter count = {count} count2 = {count2}></Counter>
  <button onClick={increase}>Increase Count</button>
  <button onClick={decrease}>Decrease Count</button>
  </div>
)
}
function Counter(props){
  useEffect(function(){
   console.log("mount")
   return function(){
    console.log("unmount")
   }
  }, []);

// this return logic says that run the funsion of mountng and run the return logc on unmounting but t is only true when the dependecy array is empty
// Depedency array basically tells when to run this useeffect function i its is empty then the useeffect funtion will run according to the code written

  useEffect(function(){
   console.log("COunter has changed")
  }, [props.count, props.count2])

  return(
    <div>
      Counter {props.count} <br />
      Counter {props.count2} <br />
    </div>
  )
}

export default App