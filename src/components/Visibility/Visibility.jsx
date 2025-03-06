import { Eye } from "lucide-react";
import "./Visibility.scss";

const Visibility = ({data}) => {

const getVisibilityDescription = (visibility) => {
  const visibilityInKm = Math.round(visibility / 1000);

  if (visibilityInKm > 10) return "Excellent: Clear and vast view";
  if (visibilityInKm > 5) return "Good: Easily navigable";
  if (visibilityInKm > 2) return "Moderate: Some limitations";
  if (visibilityInKm <= 2) return "Poor: Restricted and unclear";
  return "Unavailable: Visibility data not available";
};

const description = getVisibilityDescription(data.visibility);

  return (
    <section className="visibility">
      <div className="visibility__title">
        <Eye />
        <h4>Visibility</h4>
      </div>
      <p className="visibility__temp">{Math.round(data.visibility / 1000)} km</p>
      <span>{description}</span>
    </section>
  );
};

export default Visibility;
