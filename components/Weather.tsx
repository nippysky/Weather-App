"use client";

import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "@/redux/store";

export default function Weather() {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const cities = useSelector((state: RootState) => state.weather.cities);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!cities) return;

      const weatherData = await Promise.all(
        cities.map(async (city) => {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${process.env.NEXT_PUBLIC_WEATHERAPIKEY}`
          );
          return { cityName: city.name, weatherData: response.data };
        })
      );

      setWeatherData(weatherData);
    };

    fetchWeather();
  }, [cities]);

  console.log(weatherData);

  return (
    <section className="">
      <h1 className=" font-bold text-[1.5rem] lg:text-[2.5rem] uppercase tracking-wider text-center">
        NIPPY's Weather Station
      </h1>

      {/* RENDER WEATHER */}
      <section className="lg:mt-20 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {weatherData.map((item, index) => (
          <WeatherCard
            key={index}
            city={item.cityName}
            celcius={Math.round(item.weatherData.main.temp - 273.15)}
            fanrenheit={Math.round(
              ((item.weatherData.main.temp - 273.15) * 9) / 5 + 32
            )}
            desc={item.weatherData.weather[0].description}
            icon={`https://openweathermap.org/img/wn/${item.weatherData.weather[0].icon}@2x.png`}
          />
        ))}
      </section>
    </section>
  );
}
