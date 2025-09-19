import React, { useEffect, useState } from 'react';
import HeaderFooterLayout from '../components/HeaderFooterLayout';

function PaginaPesquisadores() {
  const [dados, setDados] = useState(null);
  useEffect(() => {
    fetch('/html_dados_variaveis/pagina-pesquisadores.json')
      .then(res => res.json())
      .then(setDados);
  }, []);
  return (
    <HeaderFooterLayout 
      title="Recursos para Pesquisadores | Plataforma de Dados"
      description="Você é um pesquisador? Descubra como acessar nosso banco de dados, utilizar nossas ferramentas e colaborar com a Plataforma de Dados de Espécies Nativas."
    >
      <p>{dados?.descricao}</p>
    </HeaderFooterLayout>
  );
}

export default PaginaPesquisadores;
