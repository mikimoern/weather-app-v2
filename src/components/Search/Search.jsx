import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../utils/api";
import "./Search.scss";

const Search = ({ onSearchChange, resetSearch }) => {
  const [search, setSearch] = useState(null);
  const [resetKey, setResetKey] = useState(0); // Добавляем ключ для сброса

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  // Функция для сброса состояния поиска
  const handleReset = () => {
    setSearch(null);
    setResetKey((prevKey) => prevKey + 1); // Изменяем ключ для сброса
  };

  // Вызываем handleReset при изменении resetSearch
  React.useEffect(() => {
    if (resetSearch) {
      resetSearch(handleReset); // Передаем handleReset в resetSearch
    }
  }, [resetSearch]);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "5px",
      border: "2px solid #ccc",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#3699FF" : null,
      color: state.isFocused ? "white" : null,
    }),
  };

  return (
    <AsyncPaginate
      key={resetKey} // Используем ключ для сброса
      placeholder="Search for city"
      debounceTimeout={900}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      styles={customStyles}
    />
  );
};

export default Search;
