"use client"
import SearchComponent from "@/component/searchComponent"
import { Rain } from "@/atoms/rain"
import { Sun } from "@/atoms/sun"
import { Cloud } from "@/atoms/cloud"
import { HumidityIcon } from "@/atoms/humidity"
import { WindIcon } from "@/atoms/wind"
import { useWeatherStore } from '@/store/useWeatherStore';
import { useEffect } from "react"
export default function WeatherComponent() {
    const { weather, isLoading, fetchWeather, error } = useWeatherStore();
    useEffect(() => {
        fetchWeather("theni");
    }, []);

    useEffect(() => {
        if (weather) {
            console.log("Weather data updated:", weather);
        }
    }, [weather]);
    const handleSearch = (city: string) => {
        if (city) fetchWeather(city);
    };

 return(
    <div >
      <div className="bg-[linear-gradient(135deg,_#00feba,_#5b548a)] h-[500px] w-[400px] rounded-2xl p-4">
        {/* Search Box */}
        <div className="relative top-5">
        <SearchComponent onSearch={handleSearch}/>
        </div>

        {/* Loader */}
        {isLoading && (
          <div className="text-white text-center mt-10">
            Loading weather...
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-red-300 text-center mt-10">
            Failed to load weather: {error}
          </div>
        )}

        {/* Weather UI */}
        {weather && !isLoading && !error && (
          <>
            <div className="flex justify-center mt-4">
              {weather.weathertype === "Clouds" ? (
                <Cloud />
              ) : weather.weathertype === "Clear" ? (
                <Sun />
              ) : (
                <Rain />
              )}
            </div>

            <div className="flex justify-center text-7xl flex-col items-center">
              <h1 className="flex items-baseline">
                {weather.temperature}°<span className="text-6xl ml-1">C</span>
              </h1>
              <h1 className="text-3xl">{weather.city}</h1>
            </div>

            <div className="flex justify-between pt-4 px-5">
              <div className="flex items-center gap-2">
                <HumidityIcon />
                <div>
                  <h1>{weather.humidity}%</h1>
                  <h1 className="text-sm">Humidity</h1>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <WindIcon />
                <div>
                  <h1>{weather.windSpeed} km/h</h1>
                  <h1 className="text-sm">Wind</h1>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}


