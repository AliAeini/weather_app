import {forecastResponse} from "@/components/types/api/forecastResponse";
import {weatherResponse} from "@/components/types/api/weatherResponse";
import {forcastProps, weatherProps} from "@/components/types/api/fetcherProps";

const apiKey:string = '3dce9b1c66837262a25b3f448d354a76';
const baseUrl :string = "https://api.openweathermap.org/data/2.5/"

export default async function WeatherApiRender({city}: weatherProps): Promise<weatherResponse | undefined> {
    try {
        const response_city_find: Response = await fetch(baseUrl + `weather?q=${city}&appid=${apiKey}&units=metric`);
        if (response_city_find.ok) {
            return await response_city_find.json();
        } else {
            throw new Error("error")
        }
    } catch (error) {
        console.log(error)
    }
}


export async function ForcastApiRender({lat, lon}:forcastProps): Promise<forecastResponse | undefined> {
    try {
        const current_weather: Response = await fetch(baseUrl + `onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        if (current_weather.ok) {
            return await current_weather.json();
        } else {
            throw new Error("error")
        }
    } catch (error) {
        console.log(error)
    }
}





