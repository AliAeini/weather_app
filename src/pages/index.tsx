import Weather from "@/components/weather/Weather";

export default function Home(){
    return (
        <main className={"w-fit m-auto rounded-2xl"}>
            <Weather city={"paris"}/>
        </main>
    )
}

