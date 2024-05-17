import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    // Datos de ejemplo
    const examplePlayers = [
      { name: 'Michel Meier', position: 'Goalkeeper', goals: 0, age: 31 },
      { name: 'Roberto Alexis', position: 'Defender', goals: 24, age: 32 },
      { name: 'John Winfield', position: 'Defender', goals: 21, age: 32 },
      { name: 'John White', position: 'Forward', goals: 7, age: 31 },
      { name: 'Michael Davis', position: 'Midfielder', goals: 9, age: 28 },
      { name: 'David Norman', position: 'Midfielder', goals: 12, age: 31 },
      { name: 'Burton Herbertson', position: 'Forward', goals: 21, age: 31 },
      { name: 'James Brady', position: 'Forward', goals: 12, age: 20 },
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
  );
};

export default App;
