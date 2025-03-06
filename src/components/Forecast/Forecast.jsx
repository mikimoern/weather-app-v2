import React from "react";
import { CalendarDays } from "lucide-react";
import "./Forecast.scss";

const Forecast = ({ data }) => {
  // Функция для группировки данных по дням
  const groupByDay = (list) => {
    const grouped = {};
    list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0]; // Получаем дату без времени
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(item);
    });
    return grouped;
  };

  // Функция для получения минимальной и максимальной температуры за день
  const getMinMaxTemp = (dayData) => {
    let minTemp = Infinity;
    let maxTemp = -Infinity;
    dayData.forEach((item) => {
      if (item.main.temp_min < minTemp) minTemp = item.main.temp_min;
      if (item.main.temp_max > maxTemp) maxTemp = item.main.temp_max;
    });
    return { minTemp, maxTemp };
  };

  // Группируем данные по дням
  const groupedData = groupByDay(data.list);

  // Получаем данные за следующие 5 дней
  const forecastData = Object.keys(groupedData)
    .slice(0, 5)
    .map((date) => {
      const dayData = groupedData[date];
      const { minTemp, maxTemp } = getMinMaxTemp(dayData);
      return {
        date,
        minTemp: Math.round(minTemp), // Конвертируем из Кельвинов в Цельсии
        maxTemp: Math.round(maxTemp), // Конвертируем из Кельвинов в Цельсии
      };
    });

  return (
    <section className="forecast">
      <div className="forecast__title">
        <CalendarDays />
        <h4>5-Day Forecast for CityName</h4>
      </div>
      {forecastData.map((day, index) => (
        <div className="forecast__temp" key={index}>
          <p className="forecast__temp-day">
            {new Date(day.date).toLocaleDateString("en-US", {
              weekday: "long",
            })}
          </p>
          <div className="forecast__temp-title">
            <span>(low)</span>
            <span>(high)</span>
          </div>
          <div className="forecast__temp-cel">
            <p>{day.minTemp}°C</p>
            <span className="forecast__temp-progressbar"></span>
            <p>{day.maxTemp}°C</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Forecast;
