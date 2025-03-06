import { Thermometer } from "lucide-react";
import "./FeelsLike.scss";

const FeelsLike = ({ data }) => {
  // Функция для получения описания
  const getFeelsLikeDescription = (feelsLike, avgTemp) => {
    if (feelsLike < avgTemp - 5) {
      return "Feels significantly colder than actual temperature.";
    }
    if (feelsLike > avgTemp - 5 && feelsLike <= avgTemp + 5) {
      return "Feels close to the actual temperature.";
    }
    if (feelsLike > avgTemp + 5) {
      return "Feels significantly warmer than actual temperature.";
    }
    return "Temperature feeling is typical for this range.";
  };

  // Получаем описание
  const description = getFeelsLikeDescription(
    data.main.feels_like,
    data.main.temp
  );

  return (
    <section className="feels-like">
      <div className="feels-like__title">
        <Thermometer />
        <h4>Feels Like</h4>
      </div>
      <p className="feels-like__temp">{data.main.feels_like.toFixed(0)}°C</p>
      <span>{description}</span>
    </section>
  );
};

export default FeelsLike;
