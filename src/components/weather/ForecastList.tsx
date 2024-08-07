import {Daily, forecastResponse} from "@/components/types/api/forecastResponse";
import ForecastItem from "@/components/weather/ForecastItem";

interface Props{
    forecast: forecastResponse
}
export function ForecastList({forecast}:Props){
    return(
        <div className={"grid grid-cols-4 md:grid-cols-8 grid-rows-2 md:grid-rows-1 gap-4"}>
            {
                forecast.daily.map((item: Daily) =>{ return <ForecastItem item={item}/> })
            }
        </div>
    )
}