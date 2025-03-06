import React, { useState, useEffect } from "react";
import "./CurrentTemp.scss";

const CurrentTemp = ({ data }) => {
  const [localTime, setLocalTime] = useState("");

  const formatLocalTime = (timezone) => {
    const now = new Date(); 
    const utcTimestamp = now.getTime() + now.getTimezoneOffset() * 60 * 1000; // Переводим в UTC, убирая локальное смещение
    const localTimestamp = utcTimestamp + timezone * 1000; // Добавляем смещение временной зоны
    const localDate = new Date(localTimestamp);

    const dayOfWeek = localDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const formattedTime = localDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // 24-часовой формат
    });

    return { dayOfWeek, formattedTime };
  };

  // Обновляем время каждую секунду
  useEffect(() => {
    if (data) {
      const updateTime = () => {
        const { dayOfWeek, formattedTime } = formatLocalTime(data.timezone);
        setLocalTime(`${dayOfWeek} ${formattedTime}`);
      };

      // Обновляем время сразу
      updateTime();

      // Обновляем время каждую секунду
      const interval = setInterval(updateTime, 1000);

      // Очистка интервала при размонтировании компонента
      return () => clearInterval(interval);
    }
  }, [data]);


  return (
    <section className="current-temp">
      <div className="current-temp__date">
        <p>{localTime ? localTime.split(" ")[0] : "Loading..."}</p>
        <span>{localTime ? localTime.split(" ")[1] : "00:00:00"}</span>
      </div>
      <h4 className="current-temp__city">{data.name}</h4>
      <p className="current-temp__temp">{data.main.temp.toFixed(0)}°C</p>
      <img src={`/icons/${data.weather[0].icon}.png`} alt="icon" width="40" />
      <p className="current-temp__desc">{data.weather[0].description}</p>
      <div className="current-temp__wrap">
        <span>Low: {Math.round(data.main.temp_min)}°C</span>
        <span>High: {Math.round(data.main.temp_max)}°C</span>
      </div>
    </section>
  );
};

export default CurrentTemp;
