export const geoApiOptions = {
  method: "GET",
  headers: {
    // "X-RapidAPI-Key": "aebce30ee1msh8f043693b14df61p180880jsncafc0b1ee9ac",
    // "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
  },
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
// export const WEATHER_API_KEY = "0539eec4ecee6ec28e186b365be060e3";
export const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const fetchWeather = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  );
  return response.json();
};

const fetchForecast = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  );
  return response.json();
};

const fetchAirPollution = async (lat, lon) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
  );
  return response.json();
};

export { fetchWeather, fetchForecast, fetchAirPollution };