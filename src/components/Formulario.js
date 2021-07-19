import { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {
  const [error, guardarError] = useState(false);

  // extraer ciudad y pais
  const { ciudad, pais } = busqueda;

  // funcion que guarda los elementos en el state
  const handleChange = (e) => {
    // actualizar el state
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  // cuando el usuario da submit al form
  const handleSubmit = (e) => {
    e.preventDefault();
    // validar
    if (ciudad.trim() === "" || pais.trim() === "") {
      guardarError(true);
      return;
    }
    // si pasa la validacion
    guardarError(false);
    // actualizar componente principal
    guardarConsultar(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
      <div>
        <div className="input-field col s12">
          <input
            type="text"
            name="ciudad"
            id="ciudad"
            value={ciudad}
            onChange={handleChange}
          />
          <label htmlFor="ciudad">Ciudad</label>
        </div>

        <div className="input-field col s12">
          <select name="pais" id="pais" value={pais} onChange={handleChange}>
            <option value="">-- Seleccione un país --</option>
            <option value="AF">Afganistán</option>
            <option value="AX">Islas Aland</option>
            <option value="AL">Albania</option>
            <option value="DZ">Argelia</option>
            <option value="AS">Samoa Americana</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguila</option>
            <option value="AQ">Antártida</option>
            <option value="AG">Antigua y Barbuda</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AW">Aruba</option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="AZ">Azerbaiyán</option>
            <option value="BS">Bahamas</option>
            <option value="BH">Bahréin</option>
            <option value="BD">Bangladesh</option>
            <option value="BB">Barbados</option>
            <option value="BY">Bielorrusia</option>
            <option value="BE">Bélgica</option>
            <option value="BZ">Belice</option>
            <option value="BJ">Benin</option>
            <option value="BM">islas Bermudas</option>
            <option value="BT">Bután</option>
            <option value="BO">Bolivia</option>
            <option value="BQ">Bonaire, Sint Eustatius y Saba</option>
            <option value="BA">Bosnia y Herzegovina</option>
            <option value="BW">Botswana</option>
            <option value="BV">Isla Bouvet</option>
            <option value="BR">Brasil</option>
            <option value="IO">Territorio Británico del Océano Índico</option>
            <option value="BN">Brunei Darussalam</option>
            <option value="BG">Bulgaria</option>
            <option value="BF">Burkina Faso</option>
            <option value="BI">Burundi</option>
            <option value="KH">Camboya</option>
            <option value="CM">Camerún</option>
            <option value="CA">Canadá</option>
            <option value="CV">Cabo Verde</option>
            <option value="KY">Islas Caimán</option>
            <option value="CF">República Centroafricana</option>
            <option value="TD">Chad</option>
            <option value="CL">Chile</option>
            <option value="CN">porcelana</option>
            <option value="CX">Isla de Navidad</option>
            <option value="CC">Islas Cocos (Keeling)</option>
            <option value="CO">Colombia</option>
            <option value="KM">Comoras</option>
            <option value="CG">Congo</option>
            <option value="CD">Congo, República Democrática del Congo</option>
            <option value="CK">Islas Cook</option>
            <option value="CR">Costa Rica</option>
            <option value="CI">Costa de Marfil</option>
            <option value="HR">Croacia</option>
            <option value="CU">Cuba</option>
            <option value="CW">Curazao</option>
            <option value="CY">Chipre</option>
            <option value="CZ">Republica checa</option>
            <option value="DK">Dinamarca</option>
            <option value="DJ">Djibouti</option>
            <option value="DM">Dominica</option>
            <option value="DO">República Dominicana</option>
            <option value="EC">Ecuador</option>
            <option value="EG">Egipto</option>
            <option value="SV">El Salvador</option>
            <option value="GQ">Guinea Ecuatorial</option>
            <option value="ER">Eritrea</option>
            <option value="EE">Estonia</option>
            <option value="ET">Etiopía</option>
            <option value="FK">Islas Falkland (Malvinas)</option>
            <option value="FO">Islas Faroe</option>
            <option value="FJ">Fiyi</option>
            <option value="FI">Finlandia</option>
            <option value="FR">Francia</option>
            <option value="GF">Guayana Francesa</option>
            <option value="PF">Polinesia francés</option>
            <option value="TF">Territorios Franceses del Sur</option>
            <option value="GA">Gabón</option>
            <option value="GM">Gambia</option>
            <option value="GE">Georgia</option>
            <option value="DE">Alemania</option>
            <option value="GH">Ghana</option>
            <option value="GI">Gibraltar</option>
            <option value="GR">Grecia</option>
            <option value="GL">Groenlandia</option>
            <option value="GD">Granada</option>
            <option value="GP">Guadalupe</option>
            <option value="GU">Guam</option>
            <option value="GT">Guatemala</option>
            <option value="GG">Guernsey</option>
            <option value="GN">Guinea</option>
            <option value="GW">Guinea-Bissau</option>
            <option value="GY">Guayana</option>
            <option value="HT">Haití</option>
            <option value="HM">Islas Heard y McDonald</option>
            <option value="VA">
              Santa Sede (Estado de la Ciudad del Vaticano)
            </option>
            <option value="HN">Honduras</option>
            <option value="HK">Hong Kong</option>
            <option value="HU">Hungría</option>
            <option value="IS">Islandia</option>
            <option value="IN">India</option>
            <option value="ID">Indonesia</option>
            <option value="IR">Irán (República Islámica de</option>
            <option value="IQ">Irak</option>
            <option value="IE">Irlanda</option>
            <option value="IM">Isla del hombre</option>
            <option value="IL">Israel</option>
            <option value="IT">Italia</option>
            <option value="JM">Jamaica</option>
            <option value="JP">Japón</option>
            <option value="JE">Jersey</option>
            <option value="JO">Jordán</option>
            <option value="KZ">Kazajstán</option>
            <option value="KE">Kenia</option>
            <option value="KI">Kiribati</option>
            <option value="KP">
              República de Corea, Popular Democrática de
            </option>
            <option value="KR">Corea, república de</option>
            <option value="XK">Kosovo</option>
            <option value="KW">Kuwait</option>
            <option value="KG">Kirguistán</option>
            <option value="LA">República Democrática Popular Lao</option>
            <option value="LV">Letonia</option>
            <option value="LB">Líbano</option>
            <option value="LS">Lesoto</option>
            <option value="LR">Liberia</option>
            <option value="LY">Jamahiriya Arabe Libia</option>
            <option value="LI">Liechtenstein</option>
            <option value="LT">Lituania</option>
            <option value="LU">Luxemburgo</option>
            <option value="MO">Macao</option>
            <option value="MK">Macedonia, la ex República Yugoslava de</option>
            <option value="MG">Madagascar</option>
            <option value="MW">Malawi</option>
            <option value="MY">Malasia</option>
            <option value="MV">Maldivas</option>
            <option value="ML">Mali</option>
            <option value="MT">Malta</option>
            <option value="MH">Islas Marshall</option>
            <option value="MQ">Martinica</option>
            <option value="MR">Mauritania</option>
            <option value="MU">Mauricio</option>
            <option value="YT">Mayotte</option>
            <option value="MX">México</option>
            <option value="FM">Micronesia, Estados Federados de</option>
            <option value="MD">Moldavia, República de</option>
            <option value="MC">Mónaco</option>
            <option value="MN">Mongolia</option>
            <option value="ME">Montenegro</option>
            <option value="MS">Montserrat</option>
            <option value="MA">Marruecos</option>
            <option value="MZ">Mozambique</option>
            <option value="MM">Myanmar</option>
            <option value="NA">Namibia</option>
            <option value="NR">Nauru</option>
            <option value="NP">Nepal</option>
            <option value="NL">Países Bajos</option>
            <option value="AN">Antillas Holandesas</option>
            <option value="NC">Nueva Caledonia</option>
            <option value="NZ">Nueva Zelanda</option>
            <option value="NI">Nicaragua</option>
            <option value="NE">Níger</option>
            <option value="NG">Nigeria</option>
            <option value="NU">Niue</option>
            <option value="NF">Isla Norfolk</option>
            <option value="MP">Islas Marianas del Norte</option>
            <option value="NO">Noruega</option>
            <option value="OM">Omán</option>
            <option value="PK">Pakistán</option>
            <option value="PW">Palau</option>
            <option value="PS">Territorio Palestino, Ocupado</option>
            <option value="PA">Panamá</option>
            <option value="PG">Papúa Nueva Guinea</option>
            <option value="PY">Paraguay</option>
            <option value="PE">Perú</option>
            <option value="PH">Filipinas</option>
            <option value="PN">Pitcairn</option>
            <option value="PL">Polonia</option>
            <option value="PT">Portugal</option>
            <option value="PR">Puerto Rico</option>
            <option value="QA">Katar</option>
            <option value="RE">Reunión</option>
            <option value="RO">Rumania</option>
            <option value="RU">Federación Rusa</option>
            <option value="RW">Ruanda</option>
            <option value="BL">San Bartolomé</option>
            <option value="SH">Santa elena</option>
            <option value="KN">Saint Kitts y Nevis</option>
            <option value="LC">Santa Lucía</option>
            <option value="MF">San Martín</option>
            <option value="PM">San Pedro y Miquelón</option>
            <option value="VC">San Vicente y las Granadinas</option>
            <option value="WS">Samoa</option>
            <option value="SM">San Marino</option>
            <option value="ST">Santo Tomé y Príncipe</option>
            <option value="SA">Arabia Saudita</option>
            <option value="SN">Senegal</option>
            <option value="RS">Serbia</option>
            <option value="CS">Serbia y Montenegro</option>
            <option value="SC">Seychelles</option>
            <option value="SL">Sierra Leona</option>
            <option value="SG">Singapur</option>
            <option value="SX">San Martín</option>
            <option value="SK">Eslovaquia</option>
            <option value="SI">Eslovenia</option>
            <option value="SB">Islas Salomón</option>
            <option value="SO">Somalia</option>
            <option value="ZA">Sudáfrica</option>
            <option value="GS">
              Georgia del sur y las islas Sandwich del sur
            </option>
            <option value="SS">Sudán del Sur</option>
            <option value="ES">España</option>
            <option value="LK">Sri Lanka</option>
            <option value="SD">Sudán</option>
            <option value="SR">Surinam</option>
            <option value="SJ">Svalbard y Jan Mayen</option>
            <option value="SZ">Swazilandia</option>
            <option value="SE">Suecia</option>
            <option value="CH">Suiza</option>
            <option value="SY">República Árabe Siria</option>
            <option value="TW">Taiwan, provincia de China</option>
            <option value="TJ">Tayikistán</option>
            <option value="TZ">Tanzania, República Unida de</option>
            <option value="TH">Tailandia</option>
            <option value="TL">Timor-Leste</option>
            <option value="TG">Para llevar</option>
            <option value="TK">Tokelau</option>
            <option value="TO">Tonga</option>
            <option value="TT">Trinidad y Tobago</option>
            <option value="TN">Túnez</option>
            <option value="TR">pavo</option>
            <option value="TM">Turkmenistán</option>
            <option value="TC">Islas Turcas y Caicos</option>
            <option value="TV">Tuvalu</option>
            <option value="UG">Uganda</option>
            <option value="UA">Ucrania</option>
            <option value="AE">Emiratos Árabes Unidos</option>
            <option value="GB">Reino Unido</option>
            <option value="US">Estados Unidos</option>
            <option value="UM">
              Islas menores alejadas de los Estados Unidos
            </option>
            <option value="UY">Uruguay</option>
            <option value="UZ">Uzbekistan</option>
            <option value="VU">Vanuatu</option>
            <option value="VE">Venezuela</option>
            <option value="VN">Vietnam</option>
            <option value="VG">Islas Vírgenes Británicas</option>
            <option value="VI">Islas Vírgenes, EE. UU.</option>
            <option value="WF">Wallis y Futuna</option>
            <option value="EH">Sahara Occidental</option>
            <option value="YE">Yemen</option>
            <option value="ZM">Zambia</option>
            <option value="ZW">Zimbabue</option>
          </select>

          <label htmlFor="pais">País</label>
        </div>
      </div>

      <div className="input-field col s12">
        <button
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
        >
          Buscar Clima
        </button>
      </div>
    </form>
  );
};

Formulario.propTypes = {
  busqueda: PropTypes.object.isRequired,
  guardarBusqueda: PropTypes.func.isRequired,
  guardarConsultar: PropTypes.func.isRequired,
};

export default Formulario;
