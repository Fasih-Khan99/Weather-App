"use client";
const WeatherCard = ({ data }: { data: any }) => {
  // Calculate local time using timezone offset
  const utcTime = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000);
  const localTime = new Date(utcTime.getTime() + data.timezone * 1000);

  const formattedDate = localTime.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="bg-white/50 p-6 rounded shadow-lg text-center text-gray-900 backdrop-blur-md w-[90%] md:w-[30%] mx-auto">
      <h2 className="text-2xl font-semibold">{data.name}</h2>
      <p className="text-sm mb-2">{formattedDate}</p>
      <p className="text-lg capitalize">{data.weather[0].description}</p>
      <p className="text-3xl">{data.main.temp}°C</p>
      <div className="flex justify-center mt-6">
        <div className="flex flex-col mx-4">
          <p className="text-sm">Feels Like</p>
          <p>{data.main.feels_like}°C</p>
        </div>
        <div className="flex flex-col mx-4">
          <p className="text-sm">Humidity</p>
          <p>{data.main.humidity}%</p>
        </div>
        <div className="flex flex-col mx-4">
          <p className="text-sm">Wind</p>
          <p>{data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
