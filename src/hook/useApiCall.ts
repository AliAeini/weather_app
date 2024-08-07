import {useEffect, useState} from "react";
import apiStatus from "@/components/types/api/apiStatus";

interface Props<T, S>{
    func: (arg : T) =>  Promise<S | undefined> ;
    params: T;
    refresh? : Array<any>;
    enabled? : boolean
}

export default function useApiCall<S, T>({func, params, refresh = [], enabled = true}: Props<T, S>){
    const [response, setResponse] = useState<S | undefined>(undefined)
    const [status, setStatus] = useState<apiStatus>("pending")

    useEffect(() => {
        if(enabled){
            setStatus("isLoading");
            func(params).then((resolve) => {
                if (!resolve) {
                    setStatus("hasError");
                    return;
                }
                setStatus("successes");
                setResponse(resolve);
            });
        }
    }, refresh);

    return{status, response}
}