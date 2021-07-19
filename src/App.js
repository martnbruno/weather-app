import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {
  // state principal
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  // state que almacena la busqueda para consultarla con la API. Se pasa a Formulario y se vuelve true si los campos se completan correctamente.
  const [consultar, guardarConsultar] = useState(false);

  // respuesta traida de la API
  const [resultado, guardarResultado] = useState({});

  // state en caso que la respuesta de la API sea error.
  const [error, guardarError] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = "1ce2fdd7f94fcd209bda932c44c309ff";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarResultado(resultado);
        guardarConsultar(false);
        // detecta si hubo resultados correctos en la consulta
        if (resultado.cod === "404") {
          guardarError(true);
        } else {
          guardarError(false);
        }
      }
    };
    consultarAPI();
    // eslint-disable-next-line
  }, [consultar]);

  // carga condicional de componentes
  let componente;

  if (error) {
    componente = <Error mensaje="No hay resultados" />;
  } else {
    componente = <Clima resultado={resultado} />;
  }

  return (
    <div>
      <Header titulo="Clima desde Casa" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">{componente}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
