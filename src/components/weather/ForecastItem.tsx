import {Daily} from "@/components/types/api/forecastResponse";
import WeatherIcon from "@/components/weather/WeatherIcon";

interface Props{
    item: Daily
}

export default function ForecastItem({item}:Props){
    const day:string = new Date(item.dt * 1000).toLocaleString("en-us",{weekday: "long"})
    const min_temp:number = Math.round(item.temp.min)
    const max_temp:number = Math.round(item.temp.max)
    return(
       <div className={"flex flex-col justify-center items-center gap-2"}>
            <div className={"text-base"}>{day}</div>
            <WeatherIcon icon={item.weather[0].icon} size={36}/>
           <div>
               <span className={"text-primary"}>{min_temp}</span>
               -
               <span className={"text-primary"}>{max_temp}</span>
           </div>
       </div>
    )
}