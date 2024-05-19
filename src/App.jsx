import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import Millonarios from './assets/imagenes/Millonarios.png'
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    // Datos de ejemplo
    const examplePlayers = [
      { name: 'Álvaro Montero', position: 'Goalkeeper', goals: 0, age: 29 },
      { name: 'Diego Novoa', position: 'Goalkeeper', goals: 0, age: 34},
      { name: 'Andrés Llinás', position: 'Defender', goals: 8, age: 26 },
      { name: 'Juan Vargas', position: 'Defender', goals: 9, age: 28 },
      { name: 'Jorge Arias', position: 'Defender', goals: 3, age: 31 },
      { name: 'Omar Bertel', position: 'Defender', goals: 3, age: 27 },
      { name: 'Jhoan Hernández', position: 'Defender', goals: 0, age: 18 },
      { name: 'Delvin Alfonzo', position: 'Defender', goals: 0, age: 23 },
      { name: 'Larry Vásquez', position: 'Midfielder', goals: 4, age: 31 },
      { name: 'Daniel Giraldo', position: 'Midfielder', goals: 4, age: 31},
      { name: 'Stiven Vega', position: 'Midfielder', goals: 0, age: 25},
      { name: 'Daniel Ruíz', position: 'Midfielder', goals: 16, age: 22},
      { name: 'Daniel Cataño', position: 'Midfielder', goals: 11, age: 32},
      { name: 'David Silva', position: 'Midfielder', goals: 56, age: 37},
      { name: 'Juan Pereira', position: 'Midfielder', goals: 14, age: 31},
      { name: 'Émerson Rodríguez', position: 'Forward', goals: 10, age: 23},
      { name: 'Santiago Giordana', position: 'Forward', goals: 3, age: 29},
      { name: 'Leonardo Castro', position: 'Forward', goals: 36, age: 31},
      { name: 'Jader Valencia', position: 'Forward', goals: 18, age: 24},
      { name: 'Beckham Castro', position: 'Forward', goals: 8, age: 24}
    ];
    setPlayers(examplePlayers);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPlayers = filteredPlayers.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.goals - b.goals;
    } else {
      return b.goals - a.goals;
    }
  });

  return (
    <>
    <div className="top-bar__container">
      <div className="container-fluid">
        <div className="contact-info__container">
          <span className="arriba-izquierda__container"><i class="bi bi-at">contact@website.com</i></span>
          <span><i class="bi bi-telephone">+1 234 567 890</i></span>
          <span><i class="bi bi-geo-alt">27 Calle St, Portland</i></span>
          <span className="superior-derecha1__container">Buy tickets</span>
          <span className="superior-derecha2__container">Login</span>
          <span className="superior-derecha2__container">Register</span>
          <span><i class="bi bi-cart"></i></span>
        </div>
      </div>
    </div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary color-navbar__container">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={Millonarios} className="logo-equipo__container"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
            <a className="nav-link dropdown-toggle color-letra2__container" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              SOCCER
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle color-letra__container" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              PAGES
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle color-letra__container" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              SHOP
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link color-letra__container" href="#">PURCHASE</a>
          </li>
        </ul>
        <div className="search-box__container">
          <input type="text" placeholder="Search                                                  🔎"/>
        </div>
       </div>
      </div>
    </nav>


    <div className="container">
      <h1>Top Scorers</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por nombre jugador..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <button onClick={handleSort}>
        Ordenar por goles ({sortOrder === 'asc' ? 'menor a mayor' : 'mayor a menor'})
      </button>
      <table>
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
          {sortedPlayers.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td>{player.goals}</td>
              <td>{player.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default App;
