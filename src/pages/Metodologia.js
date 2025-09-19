import React, { useEffect, useState } from 'react';
import HeaderFooterLayout from '../components/HeaderFooterLayout';

function Metodologia() {
  const [metodologia, setMetodologia] = useState(null);

  useEffect(() => {
    fetch('/html_dados_variaveis/metodologia.json')
      .then(res => res.json())
      .then(setMetodologia);
  }, []);

  return (
    <HeaderFooterLayout 
      title="Nossa Metodologia de Coleta de Dados | Plataforma de Dados"
      description="Entenda como coletamos, processamos e disponibilizamos os dados em nossa plataforma. Conheça as etapas e a tecnologia por trás do nosso trabalho."
    >
      <p>{metodologia?.descricao}</p>
      {metodologia?.etapas?.map((etapa, idx) => (
        <div key={idx} style={{marginBottom: 16}}>
          <h3>{etapa.titulo}</h3>
          <p>{etapa.descricao}</p>
        </div>
      ))}
      <p><strong>{metodologia?.mensagem_final}</strong></p>
    </HeaderFooterLayout>
  );
}

export default Metodologia;
