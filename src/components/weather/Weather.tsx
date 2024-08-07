import CitySearchForm from "@/components/weather/CitySearchForm";
import WeatherInfo from "@/components/weather/WeatherInfo";
import SolidLine from "@/components/SolidLine";
import {useEffect, useState} from "react";
import {ForecastList} from "@/components/weather/ForecastList";
import ApiLoader from "@/components/share/ApiLoader";
import useApiCall from "@/hook/useApiCall";
import {weatherResponse} from "@/components/types/api/weatherResponse";
import WeatherApiRender, {ForcastApiRender} from "@/components/api/api";
import {forcastProps, weatherProps} from "@/components/types/api/fetcherProps";
import {forecastResponse} from "@/components/types/api/forecastResponse";
interface Props{
    city: string
}
export default function Weather({city}:Props){
    const[cityState, setCityState ] = useState(city)
    const [coord, setCoord] = useState({lat : 0, lon : 0})
    const {status, response} = useApiCall<weatherResponse, weatherProps>({func: WeatherApiRender, params: {city: cityState}, refresh: [cityState]})
    const {status: ForcastStatus, response : ForcastResponse} = useApiCall<forecastResponse, forcastProps>({func: ForcastApiRender, params: coord, refresh: [coord], enabled: (coord.lat != 0 && coord.lon != 0)})

    useEffect(()=>{
        response && setCoord(response.coord)
    }, [response])

    let weather: null | weather = null
    if(response){
        weather = {
            city : response.name,
            wind : response.wind.speed,
            humidity : response.main.humidity,
            description : response.weather[0].description,
            icon : response.weather[0].icon,
            daily : [],
        }
    }

    return (
        <section className={"p-4 rounded-2xl bg-white flex flex-col gap-4 m-3"}>
            <CitySearchForm city={cityState} setCityState={setCityState}/>
            <SolidLine/>
            <ApiLoader status={status}>
                {weather && <WeatherInfo weather={weather}/>}
                <ApiLoader status={ForcastStatus}>
                    {ForcastResponse && <ForecastList forecast={ForcastResponse}/>}
                </ApiLoader>
            </ApiLoader>
        </section>
    )
}