import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BrowserRecommendationBar from './BrowserRecommendationBar';

export default function HeaderFooterLayout({ children, pageTitle }) {
  const [header, setHeader] = useState(null);
  const [footer, setFooter] = useState('');

  useEffect(() => {
    fetch('/html_dados_variaveis/header.json')
      .then(res => res.json())
      .then(setHeader);
    fetch('/html_dados_variaveis/footer.json')
      .then(res => res.json())
      .then(data => setFooter(data.texto));
  }, []);

  return (
    <div>
      <BrowserRecommendationBar />
      <header>
        <div className="logo">
          <img id="logo_img" src={header?.logo_url?.replace('./img', '/img')} alt="Logo da Plataforma de Dados sobre Espécies Nativas" />
          <span id="titulo-site">{header?.titulo_site}</span>
        </div>
        <nav>
          <ul id="menu-links">
            {header?.menu_links?.map((link, idx) => (
              <li key={idx}><Link to={link.href}>{link.texto}</Link></li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        <p id="footer-texto" dangerouslySetInnerHTML={{ __html: footer }}></p>
      </footer>
    </div>
  );
}
