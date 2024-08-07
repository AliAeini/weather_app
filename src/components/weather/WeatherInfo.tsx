import WeatherIcon from "@/components/weather/WeatherIcon";
import React from "react";

interface Props{
    weather: weather
}
export default function WeatherInfo({weather}:Props){
    return(
        <div className={"flex justify-between items-center"}>
            <div>
                <p className={"text-xl font-semibold"}>{weather.city}</p>
                <p>{weather.description}</p>
                <div className={"flex gap-2"}>
                    <p className={"text-sm"}>Humidity : <span className={"text-primary"}>{weather.humidity}%</span></p>
                    <p className={"text-sm"}>Wind Speed : <span className={"text-primary"}>{weather.wind}km</span></p>
                </div>
            </div>
            <div>
                <WeatherIcon icon={weather.icon} size={60}/>
            </div>
        </div>
    )
}

