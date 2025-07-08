import React from 'react';

export default function BrowserRecommendationBar() {
  return (
    <div className="browser-recommendation-bar" style={{
      background: 'linear-gradient(90deg, #e3f2fd 60%, #fff 100%)', // azul claro discreto
      color: '#1976d2', // azul escuro
      textAlign: 'center',
      fontSize: '0.98rem',
      fontWeight: 500,
      padding: '6px 0',
      borderBottom: '1px solid #90caf9',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      boxShadow: '0 2px 8px #0001',
      letterSpacing: '0.01em',
      opacity: 0.96
    }}>
      <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <span style={{marginRight: 6, fontSize: '1.1em', verticalAlign: 'middle'}}>⚡</span>
        Para uma experiência de carregamento otimizada, recomendamos o uso do navegador <b>Chrome</b>.
      </span>
    </div>
  );
}
