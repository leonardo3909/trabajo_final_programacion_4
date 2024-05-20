import "bootstrap/dist/css/bootstrap.min.css"
import Millonarios from './assets/imagenes/Millonarios.png'
import twitter from './assets/imagenes/Twitter-logo-png.png';
import pinteres  from './assets/imagenes/pinteres.png';
import correo from './assets/imagenes/correo_sin_fondo.png';
import mensaje from './assets/imagenes/mensaje.png';
import reddit from './assets/imagenes/logo_reddit.png';
import lupaImg from './assets/imagenes/lupa.png';
import 'bootstrap-icons/font/bootstrap-icons.css'
import React, { useState, useEffect } from 'react';
import './App.css';


const App = () => {
  const [players, setPlayers] = useState([]);
  const [botonSeleccionado, setBotonSeleccionado] = useState('');
  const [jugadoresMostrados, setJugadoresMostrados] = useState([]);
  const [rangoJugadores, setRangoJugadores] = useState('todos');
  const [searchText, setSearchText] = useState('');
  const [playersFiltered, setPlayersFiltered] = useState([]);

  useEffect(() => {
    const examplePlayers = [
      { name: 'Alvaro Montero', position: 'Goalkeeper', goals: 0, age: 29 },
      { name: 'Diego Novoa', position: 'Goalkeeper', goals: 0, age: 34 },
      { name: 'Andres Llinas', position: 'Defender', goals: 8, age: 26 },
      { name: 'Juan Vargas', position: 'Defender', goals: 9, age: 28 },
      { name: 'Jorge Arias', position: 'Defender', goals: 3, age: 31 },
      { name: 'Omar Bertel', position: 'Defender', goals: 3, age: 27 },
      { name: 'Jhoan Hernandez', position: 'Defender', goals: 0, age: 18 },
      { name: 'Delvin Alfonzo', position: 'Defender', goals: 0, age: 23 },
      { name: 'Larry Vasquez', position: 'Midfielder', goals: 4, age: 31 },
      { name: 'Daniel Giraldo', position: 'Midfielder', goals: 4, age: 31 },
      { name: 'Stiven Vega', position: 'Midfielder', goals: 0, age: 25 },
      { name: 'Daniel Ruiz', position: 'Midfielder', goals: 16, age: 22 },
      { name: 'Daniel Cataño', position: 'Midfielder', goals: 11, age: 32 },
      { name: 'David Silva', position: 'Midfielder', goals: 56, age: 37 },
      { name: 'Juan Pereira', position: 'Midfielder', goals: 14, age: 31 },
      { name: 'Emerson Rodriguez', position: 'Forward', goals: 10, age: 23 },
      { name: 'Santiago Giordana', position: 'Forward', goals: 3, age: 29 },
      { name: 'Leonardo Castro', position: 'Forward', goals: 36, age: 31 },
      { name: 'Jader Valencia', position: 'Forward', goals: 18, age: 24 },
      { name: 'Beckham Castro', position: 'Forward', goals: 8, age: 24 }
    ];

    setPlayers(examplePlayers);
    setJugadoresMostrados(examplePlayers);
    }, []);

  useEffect(() => {
    const filteredPlayers = jugadoresMostrados.filter((player) =>
      player.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setPlayersFiltered(filteredPlayers);
  }, [jugadoresMostrados, searchText]);

  const pintarFilasPares = () => {
    const filas = document.querySelectorAll('tbody tr');
    if (botonSeleccionado === 'pares') {
      filas.forEach((fila) => {
        fila.style.backgroundColor = 'transparent';
      });
      setBotonSeleccionado('');
    } 
    else{
      filas.forEach((fila, index) => {
        if (index % 2 === 0) {
          fila.style.backgroundColor = 'transparent';
        }
        else{
          fila.style.backgroundColor = 'lightgray';
        }
      });
      setBotonSeleccionado('pares');
    }
  };

  const pintarFilasImpares = () => {
    const filas = document.querySelectorAll('tbody tr');
    if (botonSeleccionado === 'impares') {
      filas.forEach((fila) => {
        fila.style.backgroundColor = 'transparent';
      });
      setBotonSeleccionado('');
    }
    else{
      filas.forEach((fila, index) => {
        if (index % 2 !== 0) {
          fila.style.backgroundColor = 'transparent';
        } 
        else{
          fila.style.backgroundColor = 'lightgray';
        }
      });
      setBotonSeleccionado('impares');
    }
  };

  const mostrarJugadores1a10 = () => {
    const jugadores1a10 = players.slice(0, 10);
    setJugadoresMostrados(jugadores1a10);
    setRangoJugadores('1a10');
  };
  
  const mostrarJugadores11a20 = () => {
    const jugadores11a20 = players.slice(10, 20);
    setJugadoresMostrados(jugadores11a20);
    setRangoJugadores('11a20');
  };
  
  const mostrarTodosJugadores = () => {
    setJugadoresMostrados(players);
    setRangoJugadores('todos');
  };

  return (
    <>
      <div className="top-bar__container">
        <div className="container-fluid">
          <div className="contact-info__container">
            <span className="arriba-izquierda__container">
              <i className="bi bi-at">contact@website.com</i>
            </span>
            <span>
              <i className="bi bi-telephone">+1 234 567 890</i>
            </span>
            <span>
              <i className="bi bi-geo-alt">27 Calle St, Portland</i>
            </span>
            <span className="superior-derecha1__container">Buy tickets</span>
            <span className="superior-derecha2__container">Login</span>
            <span className="superior-derecha2__container">Register</span>
            <span>
              <i className="bi bi-cart"></i>
            </span>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary color-navbar__container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Millonarios} className="logo-equipo__container" alt="Millonarios Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-links-bottom">
              <li className="nav-item">
                <a className="nav-link active color-letra__container" aria-current="page" href="#">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link color-letra__container" href="#">NEWS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link color-letra__container" href="#">TEAM</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle color-letra2__container" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">SOCCER</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle color-letra__container" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">PAGES</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle color-letra__container" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">SHOP</a>
              </li>
              <li className="nav-item">
                <a className="nav-link color-letra__container" href="#">PURCHASE</a>
              </li>
            </ul>
            <div className="search-box__container">
              <input type="text" placeholder="Search                                               🔎" />
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <h1 className="titlo-tabla__container">Top Scorers</h1>
        <br/>
        <div className="search-tamano__container">
          <input type="text" placeholder="Buscar por nombre jugador..." value={searchText}onChange={(e) => setSearchText(e.target.value)}/>
          <button className="boton-detalle__container"><img src={lupaImg} className="logo-lupa__container" alt="Lupa logo" /></button>
        </div>
        <br/>
        <div>
          <button className={`botones-pintar__container ${botonSeleccionado === 'pares' ? 'boton-seleccionado' : ''}`}onClick={pintarFilasPares}>Pintar Pares</button>
          <button className={`botones-pintar__container ${botonSeleccionado === 'impares' ? 'boton-seleccionado' : ''}`}onClick={pintarFilasImpares}>Pintar Impar</button>
          <button className="botones-pintar__container" onClick={mostrarJugadores1a10}>Traer de 1 a 10</button>
          <button className="botones-pintar__container" onClick={mostrarJugadores11a20}>Traer de 11 a 20</button>
          {rangoJugadores !== 'todos' && (
          <button className="botones-pintar__container" onClick={mostrarTodosJugadores}>Mostrar Todos</button>
          )}
        </div>
        <table className="tabla-jugadores__container">
          <thead>
            <tr>
              <th>#</th>
              <th>Player</th>
              <th>Position</th>
              <th>Goals</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
          {playersFiltered.map((player, index) => (
            <tr key={index}>
              <td>{players.indexOf(player) + 1}</td>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td>{player.goals}</td>
              <td>{player.age}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div className="social-icons__container">
  <a href="#" target="_blank" rel="noopener noreferrer">
    <img src={twitter} alt="Twitter" />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer">
    <img src={pinteres} alt="Facebook" />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer">
    <img src={correo} alt="Email" />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer">
    <img src={reddit} alt="Instagram" />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer">
    <img src={} alt="YouTube" />
  </a>
</div>
    </>
  );
};

export default App;
