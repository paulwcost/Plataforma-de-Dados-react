import React, { useEffect, useState } from 'react';
import HeaderFooterLayout from '../components/HeaderFooterLayout';

function Catalogo() {
  const [especies, setEspecies] = useState([]);
  const [erro, setErro] = useState('');

  useEffect(() => {
    fetch('/html_dados_variaveis/especie_local.json')
      .then(res => res.json())
      .then(setEspecies)
      .catch(() => setErro('Erro ao buscar espécies.'));
  }, []);

  return (
    <HeaderFooterLayout pageTitle="Catálogo de Espécies">
      <p>Veja as principais espécies nativas catalogadas.</p>
      {erro && <p style={{color:'red'}}>{erro}</p>}
      <div className="grid-especies">
        {especies.map((esp, idx) => (
          <div className="quadro" key={idx}>
            <img src={esp.imagem?.replace('./img', '/img')} alt={esp.nome} />
            <h3>{esp.nome}</h3>
            <p>{esp.descricao}</p>
          </div>
        ))}
      </div>
    </HeaderFooterLayout>
  );
}

export default Catalogo;
