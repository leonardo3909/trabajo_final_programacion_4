import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  return (
    <>
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
