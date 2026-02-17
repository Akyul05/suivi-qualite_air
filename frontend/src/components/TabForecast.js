/* =========================================
   ONGLET : PRÉVISIONS (TabForecast)
   =========================================
   Affiche une vue condensée des prochaines 3 jours et une courbe
   horaire (jusqu'à ~72h). Le composant transforme `forecastData`
   (tableau horaire) en un résumé journalier puis affiche des cartes
   et un graphique Recharts.

   Props:
   - forecastData: tableau d'objets horaires contenant au moins `fullDate` (Date) et `aqi`.
*/

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const TabForecast = ({ forecastData }) => {
    // 1. On groupe les données par jour pour obtenir un point représentatif
    const dailyForecasts = [];
    const processedDates = new Set();

    forecastData.forEach(item => {
        const dateStr = item.fullDate.toLocaleDateString('fr-FR');
        if (!processedDates.has(dateStr)) {
            processedDates.add(dateStr);
            // On prend la première occurrence du jour pour représenter la journée
            dailyForecasts.push({
                date: dateStr,
                weekday: item.fullDate.toLocaleDateString('fr-FR', { weekday: 'long' }),
                rawDate: item.fullDate,
                aqi: item.aqi // Simplification : point représentatif
            });
        }
    });

    // 2. Ne garder que les 3 prochains jours pour la vue condensée
    const next3Days = dailyForecasts.slice(0, 3);

    return (
        <div className="fade-in-up">
            <h2>Prévisions (3 Jours)</h2>
            <p className="subtitle" style={{ marginBottom: '30px' }}>Évolution de la qualité de l'air à venir.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                {next3Days.map((day, idx) => (
                    <div key={idx} className="bento-card" style={{ padding: '20px', textAlign: 'center' }}>
                        <h3 style={{ textTransform: 'capitalize', color: 'var(--text-primary)' }}>{day.weekday}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '15px' }}>{day.date}</p>

                        {/* Cercle AQI résumant la journée */}
                        <div style={{
                            width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            background: day.aqi > 100 ? '#ef4444' : day.aqi > 50 ? '#f59e0b' : '#10b981',
                            color: 'white', fontWeight: '900', fontSize: '1.5rem',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                        }}>
                            {day.aqi}
                        </div>
                        <p style={{ marginTop: '15px', fontWeight: 'bold', color: day.aqi > 100 ? '#ef4444' : day.aqi > 50 ? '#f59e0b' : '#10b981' }}>
                            {day.aqi > 100 ? 'Mauvais' : day.aqi > 50 ? 'Modéré' : 'Bon'}
                        </p>
                    </div>
                ))}
            </div>

            <div className="bento-card" style={{ height: '350px', padding: '20px' }}>
                <h3>Tendance Horaire</h3>
                <ResponsiveContainer width="100%" height="100%">
                    {/* Graphe limité (~72h) */}
                    <AreaChart data={forecastData.slice(0, 72)} margin={{ left: -20, right: 10 }}>
                        <defs>
                            <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--glass-border)" />
                        <XAxis dataKey="time" minTickGap={40} tick={{ fill: 'var(--text-secondary)' }} />
                        <YAxis tick={{ fontSize: 12, fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{ backgroundColor: 'var(--card-bg)', borderRadius: '12px', border: 'none' }} />
                        <Area type="monotone" dataKey="aqi" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorForecast)" strokeWidth={3} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TabForecast;