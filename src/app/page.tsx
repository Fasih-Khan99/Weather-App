// "use client";
// import { useState, useEffect } from "react";
// import SearchBar from "./components/SearchBar";
// import WeatherCard from "./components/WeatherCard";

// const HomePage = () => {
//   const [weatherData, setWeatherData] = useState<any>(null);
//   const API_KEY = "e4bd2e3231f7f0b998c050771a9d3d09"; // OpenWeather API key
//   const defaultCity = "Karachi"; // Default city

//   const fetchWeather = async (city: string) => {
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//       );
//       const data = await response.json();
//       setWeatherData(data);
//     } catch (error) {
//       console.error("Error fetching weather:", error);
//     }
//   };

//   useEffect(() => {
//     fetchWeather(defaultCity);
//   }, []);

//   return (
//     <div className="w-screen h-screen bg-[url('/weather.jpg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center p-6 overflow-x-hidden">
//       <SearchBar onSearch={fetchWeather} />
//       {weatherData ? (
//         <WeatherCard data={weatherData} />
//       ) : (
//         <p className="text-white mt-8">Loading...</p>
//       )}
//     </div>
//   );
// };

// export default HomePage;
import {HomePage} from './pages/page';

export default function WeatherApp() {
  return (
  <div className="w-screen h-screen bg-[url('/hm2.jpg')] bg-no-repeat bg-contain bg-center flex flex-col justify-center items-center">
      <HomePage />
    </div>
  )
}
 
