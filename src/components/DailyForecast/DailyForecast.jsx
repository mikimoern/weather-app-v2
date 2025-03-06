import React from "react";
import "./DailyForecast.scss";

const DailyForecast = ({ data }) => {
  // Функция для получения данных за текущий день
  const getTodayForecast = (list) => {
    const today = new Date().toISOString().split("T")[0]; // Получаем текущую дату в формате YYYY-MM-DD
    const todayData = list.filter((item) => item.dt_txt.startsWith(today)); // Фильтруем данные по текущей дате

    // Если данных за текущий день нет, берем данные за следующий день
    if (todayData.length === 0) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowDate = tomorrow.toISOString().split("T")[0];
      return list.filter((item) => item.dt_txt.startsWith(tomorrowDate));
    }

    return todayData;
  };

  // Получаем данные за текущий день (или следующий, если данных за текущий день нет)
  const todayForecast = getTodayForecast(data.list);

  return (
    <section className="daily-forecast">
      <ul className="daily-forecast__list">
        {todayForecast.map((item, index) => {
          const time = new Date(item.dt * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }); // Форматируем время
          const temp = Math.round(item.main.temp);
          const iconUrl = `/icons/${item.weather[0].icon}.png`; // URL иконки погоды

          return (
            <li className="daily-forecast__item" key={index}>
              <span>{time}</span>
              <img src={iconUrl} alt={item.weather[0].description} width="40" />
              <p>{temp}°C</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default DailyForecast;