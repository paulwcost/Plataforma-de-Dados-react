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
    <HeaderFooterLayout 
      title="Guia para Visitantes | Plataforma de Dados"
      description="É um entusiasta da flora brasileira? Saiba como você pode usar nossa plataforma para explorar dados, aprender sobre espécies e contribuir para a ciência."
    >
      <p>{dados?.descricao}</p>
    </HeaderFooterLayout>
  );
}

export default PaginaVisitante;
