import './App.css'; // On importe notre fichier CSS

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Suivi de la Qualité de l'Air</h1>
      </header>

      <main>
        <div className="search-container">
          <input type="text" placeholder="Rechercher une ville..." />
          <button>Rechercher</button>
        </div>

        <div className="results-container">
          <h2>Résultats pour : Paris</h2>

          {/* On simule une alerte "orange". 
            Le "className" nous servira pour le style.
          */}
          <div className="card-resultat card-orange"> 
            <p>Indice de l'air (AQI)</p>
            <span className="aqi-valeur">78</span>
            <p className="aqi-niveau">Modéré</p>
            <p className="aqi-reco">Recommandation : Les groupes sensibles doivent être prudents.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;