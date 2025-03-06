import { Droplets } from "lucide-react";
import "./Humidity.scss";

const Humidity = ({data}) => {

const getHumidityText = (humidity) => {
  if (humidity < 30) return "Dry: May cause skin irritation";
  if (humidity >= 30 && humidity < 50)
    return "Comfortable: Ideal for health and comfort";
  if (humidity >= 50 && humidity < 70)
    return "Moderate: Sticky, may increase allergens";
  if (humidity >= 70) return "High: Uncomfortable, mold growth risk";
  return "Unavailable: Humidity data not available";
};

const description = getHumidityText(data.main.humidity);

  return (
    <section className="humidity">
      <div className="humidity__title">
        <Droplets />
        <h4>Humidity</h4>
      </div>
      <p className="humidity__temp">{data.main.humidity}%</p>
      <span>{description}</span>
    </section>
  );
};

export default Humidity;
