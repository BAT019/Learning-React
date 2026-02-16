// -------------------Using Memo------------------------
import { memo, useEffect, useState } from "react";
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 3000);
  }, []);
  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}
// method 1
// const MemoizedCurrentCount = memo(CurrentCount)

// method 2
const CurrentCount = memo(function () {
  return <div>1</div>;
});
const Increase = memo(function () {
  return (
    <div>
      <button>Increase</button>
    </div>
  );
});
const Decrease = memo(function () {
  return (
    <div>
      <button>Decrease</button>
    </div>
  );
});

export default App;

// --------------------Using Recoil--------------------
// import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
// import { counterAtom } from "./store/atoms/counter";
// import { atom } from "recoil";

// function App() {
//   return <div>
//     <RecoilRoot>
//       <Counter />
//     </RecoilRoot>
//   </div>

// }

// function Counter() {
//   return <div>
//       <CurrentCount />
//       <Increase />
//       <Decrease />
//     </div>
// }

// function CurrentCount() {
//   const count = useRecoilValue(counterAtom);
//   return <div>{count}</div>;
// }

// function Increase() {
//   const setCount = useSetRecoilState(counterAtom);
//   function increase() {
//     setCount((c) => c + 1);
//   }
//   return <div>
//       <button onClick={increase}>Increase</button>
//     </div>
// }

// function Decrease() {
//   const setCount = useSetRecoilState(counterAtom);
//   function decrease() {
//     setCount((c) => c - 1);
//   }
//   return <div>
//       <button onClick={decrease}>Decrease</button>
//     </div>
// }

// export default App;

// -------------------Unoptimal code--------------------

// import { useState } from "react";
// function App(){
//   return <div>
//     <Counter />
//   </div>
// }
// function Counter(){
//   const [count, setCount] = useState(0);

//   return <div>
//     {count}
//     <Increase setCount = {setCount}/>
//     <Decrease setCount = {setCount}/>
//   </div>
// }

// function Decrease({setCount}){
//   function decrease (){
//     setCount(c => c-1)
//   }
//  return <div>
//   <button onClick={decrease}>Decrease</button>
//  </div>
// }
// function Increase({setCount}){
//   function increase (){
//     setCount(c => c+1)
//   }
//  return <div>
//   <button onClick={increase}>Increase</button>
//  </div>
// }

// export default App;
