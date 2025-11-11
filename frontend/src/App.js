import React from 'react';
import './App.css';

//Le composant principal de l'applicaction(l'application en elle meme)
function App(){
  return (
    <div className="App">

    <header className="header">
        <div className="container">
            <div className="logo">
                <i className="fas fa-cloud"></i> AeroView
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#" className="active">Accueil</a></li>
                    <li><a href="#">Mes Lieux </a></li>
                    <li><a href="#">Rapports</a></li>
                    <li><a href="#">Qui Sommes-nous</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section className="hero-section">
            <div className="hero-map-overlay">
                <div className="air-quality-indicator">
                    <div className="quality-score">62</div>
                    <div className="quality-label">Modérée</div>
                </div>
            </div>
            </section>
        <section className="resume">
            <div className="container">
                <h2>Résumé</h2>
                <div className="cards-grid">
                    <div className="card">
                        <h3>PM2.5</h3>
                        <div className="value">18 <small>µg/m³</small></div>
                        <p>bon!</p>
                    </div>
                    <div className="card">
                        <h3>Ozone (O3)</h3>
                        <div className="value">45 <small>ppb</small></div>
                        <p>Bon!</p>
                    </div>
                    <div className="card">
                        <h3>dioxyde d'azote (NO2)</h3>
                        <div className="value">20 <small>%</small></div>
                        <p>Bon!</p>
                    </div>
                </div>
            </div>
        </section>

        <section className= "nosRecommandations">
          <div className= "container">
            <h2>Nos Recommandations</h2>
            <p>Pour aujourd'hui, l'indice de qualité de l'air est modéré. Il est conseillé aux personnes sensibles de limiter les activités en plein air.</p>
          </div>
        </section>

        <section className="why-choose-us-section">
            <div className="container">
                <h2>Pourquoi Nous Choisir ?</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <i className="fas fa-shield-alt"></i>
                        <p>Données Précises</p>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-bell"></i>
                        <p>Suivi en Temps Réel</p>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-user-circle"></i>
                        <p>Alertes Personnalisées</p>
                    </div>
                </div>
            </div>
        </section>


    </main>

    <footer className="footer">
        <div className="container">
            <div className="footer-links">
                <a href="#">liens utiles</a>
            </div>
            <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="contact-info">
                <p>ramy.ghezli@edu.esiee</p>
                <p>yacine.zehar@edu.esiee</p>
                <p>matis.lusine@edu.esiee</p>
                <p>mehdi.bouchama@edu.esiee</p>
                <p>wassim.djezar@edu.esiee</p>
            </div>
        </div>
    </footer>

    </div>
  );
}
export default App;