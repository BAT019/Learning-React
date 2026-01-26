import { useEffect, useState } from "react";

export function useFetch(url){
    const [finaldata, setFinaldata] = useState();
    const [loading, setLoading] = useState(true);
    async function getdetails(){
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinaldata(json);
        setLoading(false);
    }

    useEffect(() => {
        getdetails();
    }, [url])

    useEffect(() => {
       setInterval(getdetails , 10*1000)
    }, [])

    return{
        finaldata,
        loading
    }
}