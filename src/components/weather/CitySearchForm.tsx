import {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from "react";

interface Props{
    city: string,
    setCityState: Dispatch<SetStateAction<string>>,
}
export default function CitySearchForm({city, setCityState}:Props){
    const [nameState, setNameState] = useState<string>(city)
    const CityChangeHandler = (e:ChangeEvent<HTMLInputElement>):void =>{
        setNameState(e.target.value)
    }
    function SubmitFormHandler(e:FormEvent<HTMLFormElement>):void {
        e.preventDefault()
        setCityState(nameState)
    }
    return(
        <form className={"flex gap-3 justify-center"} id={"form_city"} onSubmit={SubmitFormHandler}>
            <input className={"p-3 rounded-md flex-shrink flex-grow w-[200px] max-w-[350px] border"} value={nameState} required={true} placeholder={"City Name..."} onChange={CityChangeHandler}/>
            <button type={"submit"} className={"p-3 px-5 rounded-md bg-primary"}>Search</button>
        </form>
    )
}