// Custom Hook : useCounter
function useCounter(){
  const [count , setCount] = useState(0);
  function Increasecounter (){
  setCount(count+1)
 }
 return{ 
  count: count,
  Increasecounter: Increasecounter
}
 
}
 function App(){
 
const {count, Increasecounter} = useCounter();
  return <div>
    <button onClick={Increasecounter}>Increase</button>
     <div>count : {count}</div>
  </div>
 }
 export default App; 