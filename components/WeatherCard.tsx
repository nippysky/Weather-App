import React from "react";

const today = new Date();
const dayOfWeek = today.getDay();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDay = days[dayOfWeek];

export default function WeatherCard({
  city,
  celcius,
  fanrenheit,
  desc,
  icon,
}: {
  city: string;
  celcius: number;
  fanrenheit: number;
  desc: string;
  icon: string;
}) {
  return (
    <div className="w-full rounded-xl p-5 bg-black text-white">
      <h3 className="text-[1.3rem] font-semibold">{city}</h3>
      <p className="text-[0.7rem]">{currentDay}</p>

      <div className="w-full flex justify-between items-center mt-3">
        <h4 className="text-[2rem] font-bold">{celcius} °C</h4>
        <p className=" tracking-wider">{fanrenheit} °F</p>
      </div>

      <div className="w-full flex justify-between items-center mt-5">
        <small>{desc}</small>
        <img src={icon} width={100} height={100} alt={city} />
      </div>
    </div>
  );
}
