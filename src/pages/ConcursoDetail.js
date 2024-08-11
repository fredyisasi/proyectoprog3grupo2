import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './AppConcurso.css';
import './App.css';
import './ArticleList.css';


const ConcursoDetail= () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="App-concurso">
      <form className="form-concurso">
        <h2>Formulario de Concurso de Fotografía</h2>
        
        <div className="form-group-concurso">
          <label>1. ¿Cuál es tu nombre?</label>
          <div className="form-row-concurso">
            <input type="text" placeholder="Primer nombre" />
            <input type="text" placeholder="Apellido" />
          </div>
        </div>
        
        <div className="form-group-concurso">
          <label>2. Correo electrónico</label>
          <div className="form-row-concurso">
            <span className="icon-concurso">✉</span>
            <input type="email" placeholder="Correo electrónico" />
          </div>
        </div>
        
        <div className="form-group-concurso">
          <label>3. Número de teléfono</label>
          <div className="form-row-concurso">
            <span className="icon-concurso">📞</span>
            <input type="tel" placeholder="Número de teléfono" />
          </div>
        </div>
        
        <div className="form-group-concurso">
          <label>4. Foto (s)</label>
          <div className="form-row-concurso file-input-concurso">
            <span className="icon-concurso">📷</span>
            <input type="file" onChange={handleImageChange} id="fileInput" />
            <label htmlFor="fileInput" className="file-placeholder-concurso">
              {image ? <img src={image} alt="Preview" className="image-preview-concurso" /> : "Haga clic aquí / soltar archivo aquí"}
            </label>
          </div>
        </div>
        
        <div className="form-group-concurso">
          <label>5. Categoría concurso de fotografía</label>
          <select>
            <option>Seleccione</option>
            <option>Retrato</option>
            <option>Paisajes</option>
            <option>Naturaleza</option>
            <option>Vida Urbana</option>
            <option>Antiguas</option>
            <option>Blanco y Negro</option>
            <option>Macro</option>
            <option>Viajes</option>
            <option>Enfocando Momentos</option>
            <option>Captura Brillantes</option>
            <option>Lentes Mágicos</option>
            <option>Miradas Inspiradoras</option>
            <option>Instantáneas Eternas</option>
            <option>Perspectivas Infinitas</option>
            <option>Luces y Sombras</option>
            <option>Historias de Imagen</option>
            <option>Objetivo Artístico</option>
            <option>Arquitectura</option>
            <option>Murales Callejeros</option>
            <option>Océanicas</option>
          </select>
        </div>
        
        <button className="entrega-codigo-btn">Entregar</button>
      </form>
    </div>
  
  );
};

export default ConcursoDetail;