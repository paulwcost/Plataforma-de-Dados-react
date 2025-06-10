import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderFooterLayout from '../components/HeaderFooterLayout';

function FloraBrasil() {
  const [familias, setFamilias] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itemsPorPagina = 12;
  const [erro, setErro] = useState('');

  useEffect(() => {
    fetch('https://servicos.jbrj.gov.br/v2/flora/families')
      .then(res => res.json())
      .then(setFamilias)
      .catch(() => setErro('Erro ao buscar famílias.'));
  }, []);

  const inicio = (paginaAtual - 1) * itemsPorPagina;
  const fim = inicio + itemsPorPagina;
  const familiasPagina = familias.slice(inicio, fim);

  return (
    <HeaderFooterLayout pageTitle="Flora Brasil">
      {erro && <p style={{color:'red'}}>{erro}</p>}
      <div className="familias-container">
        {familiasPagina.map(familia => (
          <Link className="card" key={familia} to={`/especies?family=${familia}`}><h3>{familia}</h3></Link>
        ))}
      </div>
      <div className="paginacao">
        <button onClick={() => setPaginaAtual(p => Math.max(1, p-1))} disabled={paginaAtual===1}>Anterior</button>
        <button onClick={() => setPaginaAtual(p => p*itemsPorPagina<familias.length?p+1:p)} disabled={paginaAtual*itemsPorPagina>=familias.length}>Próximo</button>
      </div>
    </HeaderFooterLayout>
  );
}

export default FloraBrasil;
