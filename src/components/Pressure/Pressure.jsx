import { Gauge } from "lucide-react";
import "./Pressure.scss";

const Pressure = ({data}) => {

const getPressureDescription = (pressure) => {
  if (pressure < 1000) return "Very low pressure";

  if (pressure >= 1000 && pressure < 1015)
    return "Low pressure. Expect weather changes.";

  if (pressure >= 1015 && pressure < 1025)
    return "Normal pressure. Expect weather changes.";

  if (pressure >= 1025 && pressure < 1040)
    return "High pressure. Expect weather changes.";

  if (pressure >= 1040) return "Very high pressure. Expect weather changes.";

  return "Unavailable pressure data";
};

const description = getPressureDescription(data.main.pressure);

  return (
    <section className="pressure">
      <div className="pressure__title">
        <Gauge />
        <h4>Pressure</h4>
      </div>
      <p className="pressure__temp">{data.main.pressure} hPa</p>
      <span>{description}</span>
    </section>
  );
};

export default Pressure;
