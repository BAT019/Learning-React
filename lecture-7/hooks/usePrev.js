import { useEffect, useRef } from "react"

export function usePrev(value){
    const ref =useRef();
     useEffect(() => {
           ref.current = value;    // ref dont re-render when they get changed
     } , [value])

return ref.current;
}

// Flow, it returns first, effect gets called later