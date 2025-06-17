import React, { useEffect, useState } from 'react';
import HeaderFooterLayout from '../components/HeaderFooterLayout';

function PaginaVisitante() {
  const [dados, setDados] = useState(null);
  useEffect(() => {
    fetch('/html_dados_variaveis/pagina-visitante.json')
      .then(res => res.json())
      .then(setDados);
  }, []);
  return (
    <HeaderFooterLayout pageTitle={dados?.titulo || 'Visitantes'}>
      <p>{dados?.descricao}</p>
    </HeaderFooterLayout>
  );
}

export default PaginaVisitante;
