import React, { useEffect } from "react";
import "./MapBox.scss";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Импортируем Leaflet для настройки маркера

// Импортируем иконки маркеров
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Фикс для корректного отображения иконки маркера
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Компонент для обновления карты при изменении координат
const UpdateMap = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const MapBox = ({ data }) => {
  const lat = data.coord.lat;
  const lon = data.coord.lon 
  const position = [lat, lon]; // Позиция для карты и маркера

  return (
    <section className="map-box">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Selected city: <br /> Latitude: {lat}, Longitude: {lon}
          </Popup>
        </Marker>
        <UpdateMap center={position} zoom={13} />{" "}
        {/* Обновляем карту при изменении координат */}
      </MapContainer>
    </section>
  );
};

export default MapBox;