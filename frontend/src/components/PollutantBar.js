/* =========================================
   COMPOSANT : BARRE DE COMPARAISON DE POLLUANTS
   =========================================
   Affiche une petite barre visuelle représentant la concentration
   d'un polluant (ex: PM2.5, NO2) relative à un maximum attendu.

   Props:
   - label: Nom du polluant affiché (ex: "PM2.5").
   - value: Valeur actuelle (nombre) en µg/m³.
   - max: Valeur maximale attendue pour calculer le pourcentage.
   - color: Couleur de la barre (hex/nom), pour l'identité visuelle.

   Ce composant est volontairement stateless et purement présentatif.
   Il calcule un pourcentage (clampé à 100%) et l'affiche via
   une div inner avec transition CSS pour un effet fluide.
*/

import React from 'react';

const PollutantComparisonBar = ({ label, value, max, color }) => {
    // Sécurité: éviter division par zéro si `max` est 0 ou falsy
    const safeMax = max || 1;
    const percentage = Math.min((value / safeMax) * 100, 100);

    return (
        <div style={{ marginBottom: '15px' }}>
            {/* Entête : label à gauche, valeur chiffrée à droite */}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '5px' }}>
                <span style={{ color: '#64748b' }}>{label}</span>
                <span style={{ fontWeight: 'bold' }}>{value} µg/m³</span>
            </div>

            {/* Barre de fond */}
            <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '10px', overflow: 'hidden' }}>
                {/* Barre remplie (la largeur suit `percentage`) */}
                <div style={{ width: `${percentage}%`, height: '100%', background: color, transition: 'width 1s ease-in-out', borderRadius: '10px' }} />
            </div>
        </div>
    );
};

export default PollutantComparisonBar;