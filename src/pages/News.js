import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import './ArticleList.css';

function News() {
  return (
    <div >
<div >
<h1>ARTICULOS DE FOTOGRAFIA AVANZADA</h1>
  
  <div className="article-list"> 
      <div className="article-card">
          <img src="/assets/images/article1.png" alt="Article 1" />
          <div className="article-content">
          <Link to="/ArticleDetail">
          <h2>Fotografía de Paisajes Nocturnos</h2>
          </Link>
            <p>La fotografía de paisajes nocturnos es un campo fascinante...</p>
          </div>
      </div>

      <div className="article-card">
          <img src="/assets/images/article2.png" alt="Article 2" />
          <div className="article-content">
          <Link to="/ArticleDetail">
          <h2>Artículo 2: Retratos de Alta Velocidad </h2>
          </Link>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
          </div>
      </div>
      <div className="article-card">
          <img src="/assets/images/article3.png" alt="Article 3" />
          <div className="article-content">
          <Link to="/ArticleDetail">
          <h2>Artículo 3: Macro Fotografía de Insectos</h2>
          </Link>
            <p>La macro fotografía de insectos es una disciplina que ...</p>
          </div>
      </div>
  </div>
  <h1>ARTICULOS DE FOTOGRAFIA INTERMEDIA</h1>
  
  <div className="article-list"> 
      <div className="article-card">
          <img src="/assets/images/article1.png" alt="Article 1" />
          <div className="article-content">
          <Link to="/ArticleDetail">
          <h2>Fotografía de Paisajes Nocturnos</h2>
          </Link>
            <p>La fotografía de paisajes nocturnos es un campo fascinante...</p>
          </div>
      </div>

      <div className="article-card">
          <img src="/assets/images/article2.png" alt="Article 2" />
          <div className="article-content">
          <Link to="/ArticleDetail">
          <h2>Artículo 2: Retratos de Alta Velocidad </h2>
          </Link>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
          </div>
      </div>
      <div className="article-card">
          <img src="/assets/images/article3.png" alt="Article 3" />
          <div className="article-content">
          <Link to="/ArticleDetail">
          <h2>Artículo 3: Macro Fotografía de Insectos</h2>
          </Link>
            <p>La macro fotografía de insectos es una disciplina que ...</p>
          </div>
      </div>
  </div>
  <h1>ARTICULOS DE FOTOGRAFIA PRINCIPIANTES</h1>
  
  <div className="article-list"> 
      <div className="article-card">
          <img src="/assets/images/article1.png" alt="Article 1" />
          <div className="article-content">
          <Link to="/ArticleDetail">
          <h2>Fotografía de Paisajes Nocturnos</h2>
          </Link>
            <p>La fotografía de paisajes nocturnos es un campo fascinante...</p>
          </div>
      </div>

      <div className="article-card">
          <img src="/assets/images/article2.png" alt="Article 2" />
          <div className="article-content">
          <Link to="/ArticleDetail">
          <h2>Artículo 2: Retratos de Alta Velocidad </h2>
          </Link>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
          </div>
      </div>
      <div className="article-card">
          <img src="/assets/images/article3.png" alt="Article 3" />
          <div className="article-content">
          <Link to="/ArticleDetail">
          <h2>Artículo 3: Macro Fotografía de Insectos</h2>
          </Link>
            <p>La macro fotografía de insectos es una disciplina que ...</p>
          </div>
      </div>
  </div>
</div>
    </div>

    
    
    
  );
}

export default News;
