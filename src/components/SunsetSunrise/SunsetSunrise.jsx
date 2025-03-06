import { Sunrise } from "lucide-react";
import { Sunset } from "lucide-react";
import { SunMoon } from "lucide-react";
import "./SunsetSunrise.scss";

const SunsetSunrise = ({data}) => {

const formatTimeWithSeconds = (timestamp) => {
  const date = new Date(timestamp * 1000); // Переводим секунды в миллисекунды
  const hours = String(date.getHours()).padStart(2, "0"); // Часы (две цифры)
  const minutes = String(date.getMinutes()).padStart(2, "0"); // Минуты (две цифры)
  const seconds = String(date.getSeconds()).padStart(2, "0"); // Секунды (две цифры)

  return `${hours}:${minutes}:${seconds}`; // Формат 00:00:00
};


const sunriseTime = formatTimeWithSeconds(data.sys.sunrise);
const sunsetTime = formatTimeWithSeconds(data.sys.sunset);

  return (
    <section className="sunset">
      <div className="sunset__title">
        <SunMoon />
        <h4>Sunrise & Sunset</h4>
      </div>
      <div className="sunrise-sunset__wrap">
        <ul className="sunrise-sunset__list">
          <li>
            <Sunrise width="36" height="36" />
          </li>
          <li>
            <span>Sunrise</span>
            <p>{sunriseTime}</p>
          </li>
        </ul>
        <ul className="sunrise-sunset__list">
          <li>
            <Sunset width="36" height="36" />
          </li>
          <li>
            <span>Sunset</span>
            <p>{sunsetTime}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SunsetSunrise;
