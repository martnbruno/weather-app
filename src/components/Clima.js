import React from "react";
import PropTypes from "prop-types";

const Clima = ({ resultado }) => {
  // extraer valores de la respuesta de la API
  const { name, main, weather } = resultado;

  // para que no ejecute el componente al iniciar la app y asi evitar que de error por no haber llamado a la API.
  if (!name) return null;

  // tomar la respuesta que viene desde la API en grados kelvin y definir a cuanto equivale 1 grado para restarlo a la respuesta y asi obtener grados centigrados.
  const kelvin = 273.15;

  // let weatherIcon = ;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>La temperatura actual en {name} es: </h2>
        <div className="temperatura-icono">
          <p className="temperatura">
            {/* tomar la respuesta de la API, convertirla en numero con parseFloat, restar el numero al equivalente a 1 grado kelvin para obtener centigrados con una base 10 y permitirle solamente 2 digitos */}
            {parseFloat(main.temp - kelvin, 10).toFixed(1)}
            {/* Simbolo de grados centigrados */}
            <span> °C</span>
          </p>
          <img
            src={`https://openweathermap.org/img/w/${weather[0].icon}.png`}
            width="150"
            height="150px"
            alt=""
          />
        </div>

        <p>
          Temperatura Máxima: {" "}  
          {parseFloat(main.temp_max - kelvin, 10).toFixed(1)}
          <span> °C</span>
        </p>
        <p>
          {" "}
          Temperatura Mínima: {" "}  
          {parseFloat(main.temp_min - kelvin, 10).toFixed(1)}
          <span> °C</span>
        </p>
        <p>
          {" "}
          Sensación Térmica: {" "}  
          {parseFloat(main.feels_like - kelvin, 10).toFixed(1)}
          <span> °C</span>
        </p>
        <p>
          {" "}
          Humedad: {" "}  
          {parseFloat(main.humidity)}
          <span> %</span>
        </p>
      </div>
    </div>
  );
};

Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
};
export default Clima;
