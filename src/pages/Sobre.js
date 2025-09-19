import React, { useEffect, useState } from 'react';
import HeaderFooterLayout from '../components/HeaderFooterLayout';

function Sobre() {
  const [sobre, setSobre] = useState(null);

  useEffect(() => {
    fetch('/html_dados_variaveis/sobre.json')
      .then(res => res.json())
      .then(setSobre);
  }, []);

  return (
    <HeaderFooterLayout 
      title={sobre?.titulo ? `${sobre.titulo} | Plataforma de Dados` : 'Sobre a Plataforma de Dados'}
      description={sobre?.descricao || 'Conheça a missão, as instituições envolvidas e os responsáveis pela Plataforma de Dados de Espécies Nativas.'}
    >
      <p>{sobre?.descricao}</p>
      <section className="missao">
        <h2>Missão</h2>
        <p>{sobre?.missao}</p>
      </section>
      <section className="instituicoes">
        <h2>Instituições Envolvidas</h2>
        <ul>
          {sobre?.instituicoes?.map((inst, idx) => (
            <li key={idx}>{inst}</li>
          ))}
        </ul>
      </section>
      <section className="responsaveis">
        <h2>Responsáveis</h2>
        <div className="responsavel">
          <img src="/img/sobre-equipe.jpg" alt="Equipe de desenvolvimento do projeto" />
          <div>
            <h3>Equipe de Desenvolvimento</h3>
            <p>{sobre?.responsaveis}</p>
          </div>
        </div>
      </section>
    </HeaderFooterLayout>
  );
}

export default Sobre;
