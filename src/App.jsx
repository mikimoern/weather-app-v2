import React, { useState } from "react";
import "./App.scss";
import AirPollusion from "./components/AirPollusion/AirPollusion";
import CurrentTemp from "./components/CurrentTemp/CurrentTemp";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import DefaultCity from "./components/DefaultCity/DefaultCity";
import FeelsLike from "./components/FeelsLike/FeelsLike";
import Footer from "./components/Footer/Footer";
import Forecast from "./components/Forecast/Forecast";
import Header from "./components/Header/Header";
import Humidity from "./components/Humidity/Humidity";
import MapBox from "./components/MapBox/MapBox";
import Pressure from "./components/Pressure/Pressure";
import SunsetSunrise from "./components/SunsetSunrise/SunsetSunrise";
import Visibility from "./components/Visibility/Visibility";
import { fetchWeather, fetchForecast, fetchAirPollution } from "./utils/api.js";

function App() {
  const [weatherData, setWeatherData] = useState(null); // Нет данных по умолчанию
  const [forecastData, setForecastData] = useState(null);
  const [airPollutionData, setAirPollutionData] = useState(null);

  // Функция для загрузки данных по городу
  const loadData = async (lat, lon) => {
    const weather = await fetchWeather(lat, lon);
    const forecast = await fetchForecast(lat, lon);
    const airPollution = await fetchAirPollution(lat, lon);

    setWeatherData(weather);
    setForecastData(forecast);
    setAirPollutionData(airPollution);
  };

  // Функция для обработки выбора города
  const handleSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    loadData(parseFloat(lat), parseFloat(lon));
  };

  
  // Функция для сброса состояния поиска
  const resetSearch = (handleReset) => {
    if (handleReset) {
      handleReset(); // Вызываем handleReset, если он передан
    }
    console.log("Search field has been reset");
  };

  return (
    <div className="container">
      <Header onSearchChange={handleSearchChange} resetSearch={resetSearch} />
      {weatherData ? ( // Показываем контент только если есть данные
        <div className="content">
          <div className="content-left">
            <CurrentTemp data={weatherData} />
            <Forecast data={forecastData} />
          </div>
          <div className="content-right">
            <div className="content-right__top">
              <AirPollusion data={airPollutionData} />
              <SunsetSunrise data={weatherData} />
            </div>
            <div className="content-right__middle">
              <FeelsLike data={weatherData} />
              <Humidity data={weatherData} />
              <Visibility data={weatherData} />
              <Pressure data={weatherData} />
            </div>
            <div className="content-right__center">
              <DailyForecast data={forecastData} />
            </div>
            <div className="content-right__bottom">
              <MapBox data={weatherData} />
              <DefaultCity
                onCityClick={handleSearchChange}
                resetSearch={resetSearch}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="loading-message">
          <p>Please select a city to see the weather</p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;