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
    <HeaderFooterLayout 
      title="Catálogo de Espécies Nativas | Plataforma de Dados"
      description="Navegue por nosso catálogo de espécies nativas do Brasil. Encontre informações detalhadas, descrições e imagens da flora brasileira."
    >
      <p>Veja as principais espécies nativas catalogadas.</p>
      {erro && <p style={{color:'red'}}>{erro}</p>}
      <div className="grid-especies">
        {especies.map((esp, idx) => (
          <div className="quadro" key={idx}>
            <img src={esp.imagem?.replace('./img', '/img')} alt={esp.nome} loading="lazy" />
            <h3>{esp.nome}</h3>
            <p>{esp.descricao}</p>
          </div>
        ))}
      </div>
    </HeaderFooterLayout>
  );
}

export default Catalogo;
