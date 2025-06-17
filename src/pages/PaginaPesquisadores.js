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
    <HeaderFooterLayout pageTitle={dados?.titulo || 'Pesquisadores'}>
      <p>{dados?.descricao}</p>
    </HeaderFooterLayout>
  );
}

export default PaginaPesquisadores;
