import React from "react";
import "./DefaultCity.scss";
import defaultCities from "../../utils/defaultCities";

const DefaultCity = ({ onCityClick, resetSearch }) => {
  const handleClick = (city) => {
    // Передаем координаты в формате, который ожидает handleSearchChange
    onCityClick({ value: `${city.lat} ${city.lon}` });
    // Сбрасываем поле поиска
    if (resetSearch) {
      resetSearch(); // Вызываем resetSearch
    }
  };

  return (
    <section className="default-city">
      <h4>Top cities</h4>
      <ul className="default-city__list">
        {defaultCities.map((city, index) => (
          <li key={index} onClick={() => handleClick(city)}>
            {city.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DefaultCity;
