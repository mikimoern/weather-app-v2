import { ThermometerSun } from "lucide-react";
import "./AirPollusion.scss";

const AirPollusion = ({data}) => {

    const getAirPollusionDescription = (aqi) => {
      if (aqi == 1) {
        return "Good";
      }
      if (aqi == 2) {
        return "Fair";
      }
      if (aqi == 3) {
        return "Moderate";
      }
      if (aqi == 4) {
        return "Poor";
      }
      if (aqi == 5) {
        return "Very poor";
      }
    };

    // Получаем описание
    const description = getAirPollusionDescription(data.list[0].main.aqi);

  return (
    <section className="air-pollution">
      <div className="air-pollution__title">
        <div>
          <ThermometerSun />
          <h4>Air Quality Index</h4>
        </div>

        <div className="air-pollution_desc">
          <p>{description}</p>
        </div>
      </div>
      <ul className="air-pollution__list">
        <li className="air-pollution__item">
          <span>PM25</span>
          <p>{data.list[0].components.pm2_5}</p>
        </li>
        <li className="air-pollution__item">
          <span>SO2</span>
          <p>{data.list[0].components.so2}</p>
        </li>
        <li className="air-pollution__item">
          <span>NO2</span>
          <p>{data.list[0].components.no2}</p>
        </li>
        <li className="air-pollution__item">
          <span>O3</span>
          <p>{data.list[0].components.o3}</p>
        </li>
      </ul>
      {/* <div className="air-pollution_desc">
        <p>{description}</p>
      </div> */}
    </section>
  );
};

export default AirPollusion;
