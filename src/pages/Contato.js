import React, { useEffect, useState } from 'react';
import HeaderFooterLayout from '../components/HeaderFooterLayout';

function Contato() {
  const [contato, setContato] = useState(null);

  useEffect(() => {
    fetch('/html_dados_variaveis/contato.json')
      .then(res => res.json())
      .then(setContato);
  }, []);

  return (
    <HeaderFooterLayout 
      title="Entre em Contato Conosco | Plataforma de Dados"
      description="Fale com a equipe da Plataforma de Dados. Envie suas dúvidas, sugestões ou propostas de colaboração através do nosso formulário de contato."
    >
      <div className="contato-header">
        <p>{contato?.descricao}</p>
      </div>
      <div className="form-container">
        <form className="contato-form">
          <div className="input-group">
            <label>Nome</label>
            <input type="text" name="nome" required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="input-group">
            <label>Mensagem</label>
            <textarea name="mensagem" required></textarea>
          </div>
          <button className="botao" type="submit">Enviar</button>
        </form>
      </div>
      <div className="informacoes-contato">
        <h2>Informações de Contato</h2>
        <ul>
          {contato?.informacoes?.map((info, idx) => (
            <li key={idx}><a href={info.href}>{info.texto}</a></li>
          ))}
        </ul>
      </div>
    </HeaderFooterLayout>
  );
}

export default Contato;
