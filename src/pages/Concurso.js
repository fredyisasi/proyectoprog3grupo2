import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import './ArticleList.css';

function Concurso() {
  return (
    <div >
<div >
<section class="articles-section">
        <h2>BIENVENIDO AL MUNDO </h2>
          <h2> FOTOGRAFICOS </h2>
        <p>Aqui en nuestro concurso anual de fotografia , celebramos el talento la creatividad y la pasion de aquellos que logra capturar la belleza del mundo a travez de sus lentes. ya sea un instatante fugaz , un paisajesublime o una mirada cautivadora cada fotografia cuenta con una historia unica y nos invita haber el mundo desde una nueva perpectiva. En esta emocionante competecia , nos enorgullecen brindar una plataforma para que fotografos aficionados y profesionales de todas prtes del mundo compartan sus mejores obras y pongan a prueba su habilidades. En nuestras categoria abarcan una amplia variedad de generos desde retratos cuativadores hasta impresionastes paisajes , pasando por la vida silvestre la abstraccion y mucho mas.  </p>
        <p> ¡EL MUNDO ESTA ESPERANDO SER CAPTURADO A TRAVES DE SUS LENTES! </p>   
    </section>
<section class="articles-section">
        <h2>PARTICIPA EN NUESTROS CONCURSO</h2>
        <p>¡Hola a todos! Les invitamos a participar en la nueva edición de nuestro concurso. Este año, el tema es "El futuro que soñamos". Podrán expresarse a través de fotografía, redacción, dibujo u otras disciplinas. Queremos conocer su visión del mañana.Los ganadores serán premiados y tendrán la oportunidad de impulsar sus carreras. Los mejores trabajos se exhibirán para más público.Encuentren las bases en nuestra página web. Tienen hasta el 31 de julio para enviar sus creaciones.</p>
        <p>¡CONFIAMOS EN SU TALENTO, LES DESEAMOS LA MAYOR DE LA SUERTE! </p> 
        </section>
  
  <div className="article-list"> 
      <div className="article-card">
          <img src="/Assets-2/imagenes/article1.png" alt="Article 1" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>RETRATO</h2>
            <p>La fotografía de paisajes nocturnos es un campo fascinante...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>

      <div className="article-card">
          <img src="/Assets-2/imagenes/article2.png" alt="Article 2" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>PAISAJES</h2>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
      <div className="article-card">
          <img src="/Assets-2/imagenes/article3.png" alt="Article 3" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>NATURALES</h2>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
      <div className="article-card">
          <img src="/Assets-2/imagenes/article4.png" alt="Article 4" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>VIDA URBANA</h2>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
      <div className="article-card">
          <img src="/Assets-2/imagenes/article5.png" alt="Article 5" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>ANTIGUAS</h2>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
      <div className="article-card">
          <img src="/Assets-2/imagenes/article6.png" alt="Article 6" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>BLANCO Y NEGRO</h2>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
      <div className="article-card">
          <img src="/Assets-2/imagenes/article7.png" alt="Article 7" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>MACRO</h2>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
      <div className="article-card">
          <img src="/Assets-2/imagenes/article8.png" alt="Article 8" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>VIAJES</h2>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
      <div className="article-card">
          <img src="/Assets-2/imagenes/article9.png" alt="Article 9" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>ENFOCANDO MOMENTOS </h2>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
      <div className="article-card">
          <img src="/Assets-2/imagenes/article10.png" alt="Article 10" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>CAPTURAS BRILLANTES</h2>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
      <div className="article-card">
          <img src="/Assets-2/imagenes/article11.png" alt="Article 11" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>LENTES MAGICOS</h2>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
      <div className="article-card">
          <img src="Assets-2/imagenes//article12.png" alt="Article 12" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>MIRADAS INSPIRADORAS</h2>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
      <div className="article-card">
          <img src="/Assets-2/imagenes/article13.png" alt="Article 13" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>INSTATANEAS ETERNA</h2>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
      <div className="article-card">
          <img src="/Assets-2/imagenes/article14.png" alt="Article 14" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>PEPECTIVA INFINITAS</h2>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
      <div className="article-card">
          <img src="/Assets-2/imagenes/article15.png" alt="Article 15" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>LUCES Y SOMBRAS</h2>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
      <div className="article-card">
          <img src="/Assets-2/imagenes/article16.png" alt="Article 16" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>HISTORIAS DE IMAGEN</h2>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
      <div className="article-card">
          <img src="/Assets-2/imagenes/article17.png" alt="Article 17" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>OBJETIVO ARTISTICO </h2>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
      <div className="article-card">
          <img src="/Assets-2/imagenes/article18.png" alt="Article 18" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>ARQUITECTURA</h2>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
      <div className="article-card">
          <img src="/Assets-2/imagenes/article19.png" alt="Article 19" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>MURALES CALLEGEROS</h2>
            <p>La fotografía de alta velocidad en retratos es una técnica ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
      <div className="article-card">
          <img src="/Assets-2/imagenes/article20.png" alt="Article 20" />
          <div className="article-content">
          <h2>CONCURSO DE FOTOGRAFÍA</h2>
          <h2>OCEANICAS</h2>
            <p>La macro fotografía de insectos es una disciplina que ...</p>
            < Link to="/ConcursoDetail">
            <button class="register-btn">Registrarte</button>
            </Link>
          </div>
      </div>
  </div>
  </div>
</div>
    

    
    
    
  );
}

export default Concurso;
