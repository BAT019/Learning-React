import { useEffect, useState } from "react";

export function useFetch(url){
    const [finaldata, setFinaldata] = useState();
    async function getdetails(){
        const response = await fetch(url);
        const json = await response.json();
        setFinaldata(json);
    }

    useEffect(() => {
        getdetails();
    }, [url])

    return{
        finaldata
    }
}