import apiStatus from "@/components/types/api/apiStatus";
import {Rings} from "react-loader-spinner";
import {ReactNode} from "react";

interface Props {
    status: apiStatus,
    children: ReactNode
}

export default function ApiLoader({status, children}:Props){
    return(
        <>
            {
                status == "isLoading" ?
                    <div className={"flex flex-col justify-center items-center w-full gap-2"}>
                        <Rings
                            height="80"
                            width="80"
                            color="#ec8e45"
                            radius="6"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="rings-loading"
                        />
                        <p>Data Is Loading, Please Wait...</p>
                    </div> :
                    status == "hasError" ? <p className={"text-center"}> error in api </p>:
                        children
            }
        </>
    )
}