import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import './PreguntasFrecuentes.css';

const preguntasFrecuentes = [
  {
    "id": 1,
    "theme": "Tecnicas",
    "question": "¿Cuál es la mejor manera de iluminar un objeto?",
    "answer": "La mejor manera de iluminar un objeto depende del tipo de objeto y del efecto deseado. Puedes utilizar luces naturales o artificiales, y experimentar con diferentes ángulos y posiciones."
  },
  {
    "id": 2,
    "theme": "Tecnicas",
    "question": "¿Cómo se logra un fondo desenfocado?",
    "answer": "Para lograr un fondo desenfocado, puedes utilizar una apertura grande (como f/1.4 o f/2.8) y una distancia focal larga. También puedes utilizar una técnica llamada 'bokeh' para crear un fondo desenfocado."
  },
  {
    "id": 3,
    "theme": "Tecnicas",
    "question": "¿Cómo se consigue un buen enfoque en la fotografía?",
    "answer": "Para conseguir un buen enfoque, utiliza el enfoque automático de la cámara o enfoca manualmente ajustando el anillo de enfoque hasta que el sujeto aparezca nítido en el visor o en la pantalla. También ayuda utilizar puntos de enfoque específicos y evitar condiciones de poca luz."
  },
  {
    "id": 4,
    "theme": "Tecnicas",
    "question": "¿Qué es la regla de los tercios en fotografía?",
    "answer": "La regla de los tercios es una técnica de composición que divide la imagen en nueve partes iguales mediante dos líneas horizontales y dos verticales, sugiriendo colocar los elementos importantes en los puntos de intersección o a lo largo de las líneas para crear una imagen equilibrada."
  },
  {
    "id": 5,
    "theme": "Tecnicas",
    "question": "¿Qué es la velocidad de obturación y cómo afecta a una foto?",
    "answer": "La velocidad de obturación es el tiempo que el obturador de la cámara permanece abierto para permitir la entrada de luz. Una velocidad rápida congela el movimiento, mientras que una velocidad lenta puede producir desenfoque de movimiento."
  },
  {
    "id": 6,
    "theme": "Equipo",
    "question": "¿Cuál es la diferencia entre un objetivo fijo y un zoom?",
    "answer": "Un objetivo fijo tiene una distancia focal única, lo que significa que no puedes acercar o alejar la imagen sin moverte físicamente. Un objetivo zoom tiene una distancia focal variable, permitiendo acercar y alejar sin cambiar de posición."
  },
  {
    "id": 7,
    "theme": "Equipo",
    "question": "¿Qué es un trípode y cuándo es necesario usarlo?",
    "answer": " Un trípode es un soporte de tres patas utilizado para estabilizar la cámara, especialmente en exposiciones largas, fotografía de paisaje, o cuando se usa un teleobjetivo pesado."
  },
  {
    "id": 8,
    "theme": "Equipo",
    "question": "¿Qué tipo de cámara es mejor para principiantes?",
    "answer": "Las cámaras sin espejo y las DSLR de nivel básico son opciones populares para principiantes debido a su facilidad de uso, calidad de imagen y la posibilidad de aprender técnicas avanzadas con el tiempo."
  },
  {
    "id": 9,
    "theme": "Equipo",
    "question": "¿Qué es un filtro ND y para qué se utiliza?",
    "answer": " Un filtro de densidad neutra (ND) reduce la cantidad de luz que entra en la cámara, permitiendo usar velocidades de obturación más lentas o aperturas más amplias en condiciones de luz brillante, sin sobreexponer la imagen."
  },
  {
    "id": 10,
    "theme": "Equipo",
    "question": " ¿Cómo elijo la tarjeta de memoria adecuada para mi cámara?",
    "answer": " Al elegir una tarjeta de memoria, considera la capacidad (en GB), la velocidad de escritura (importante para ráfagas y video), y la compatibilidad con tu cámara. Tarjetas de alta velocidad y alta capacidad son recomendables para fotografía en formato RAW y grabación de video 4K."
  },
  {
    "id": 11,
    "theme": "Postproducción",
    "question": "¿Qué es el formato RAW y por qué debería usarlo?",
    "answer": "El formato RAW es un archivo de imagen sin comprimir que conserva toda la información capturada por el sensor de la cámara, lo que permite un mayor control en la postproducción para ajustar la exposición, el balance de blancos y otros parámetros sin pérdida de calidad."
  },
  {
    "id": 12,
    "theme": "Postproducción",
    "question": " ¿Cómo corregir el color en una fotografía?",
    "answer": "Para corregir el color, utiliza software de edición como Adobe Lightroom o Photoshop, ajustando el balance de blancos, la saturación, el tono y los niveles de color hasta que los colores sean naturales y fieles a la escena original."
  },
  {
    "id": 13,
    "theme": "Postproducción",
    "question": "¿Cómo editar un video?",
    "answer": "Para editar un video, utiliza software de edición como Adobe Premiere Pro o Final Cut Pro X, ajustando la velocidad, la calidad, la duración y el tono del audio para crear un video de calidad y ajuste a tus necesidades."
  },
  {
    "id": 14,
    "theme": "Postproducción",
    "question": "¿Cómo crear un montaje de animación en un video?",
    "answer": "Para crear un montaje de animación en un video, utiliza software de animación como Adobe After Effects o Cinema 4D, diseña y anima tus elementos, y luego compila el montaje en el video editor."
  },
  {
    "id": 15,
    "theme": "Postproducción",
    "question": "¿Cómo integrar un filtro en un video?",
    "answer": "Para integrar un filtro en un video, utiliza software de edición como Adobe After Effects o Cinema 4D, diseña y anima el filtro, y luego compila el filtro en el video editor."
  },
  {
    "id": 16,
    "theme": "Aspectos Creativos",
    "question": " ¿Cómo puedo desarrollar mi estilo fotográfico?",
    "answer": " Desarrollar un estilo fotográfico requiere tiempo y experimentación. Observa el trabajo de fotógrafos que te inspiran, practica regularmente, y edita tus fotos de manera coherente para descubrir lo que te gusta y definir tu estilo personal."
  },
  {
    "id": 17,
    "theme": "Aspectos Creativos",
    "question": "¿Cómo puedo mejorar mi trabajo en la publicidad?",
    "answer": "Para mejorar tu trabajo en la publicidad, utiliza técnicas de diseño, composición, y animación para darle un toque de realismo y estilo a tus fotos. También considera las herramientas de diseño y animación como Adobe Photoshop, After Effects, o Cinema 4D para diseñar y animar tus elementos."
  },
  {
    "id": 18,
    "theme": "Aspectos Creativos",
    "question": "¿Cómo puedo mejorar mi composición fotográfica?",
    "answer": "Para mejorar la composición, utiliza técnicas como la regla de los tercios, las líneas guía, el encuadre natural, y el equilibrio visual. Además, observa cómo otros fotógrafos componen sus imágenes y experimenta con diferentes enfoques.."
  },
  {
    "id": 19,
    "theme": "Aspectos Creativos",
    "question": "¿Cómo puedo crear un estudio de diseño personalizado?",
    "answer": "Para crear un estudio de diseño personalizado, utiliza un editor de diseño vectorial como Adobe Illustrator o Inkscape, diseña tu estudio en tus propias palabras y colores, y luego compila el estudio en un archivo vectorial como SVG."
  },
  {
    "id": 20,
    "theme": "Aspectos Creativos",
    "question": "¿Cómo puedo contar una historia a través de mis fotos?",
    "answer": " Contar una historia a través de tus fotos implica pensar en la narrativa visual. Elige un tema o concepto, planifica tus tomas para que cada imagen contribuya a la historia, y presta atención a la secuencia y coherencia emocional de las imágenes."
  }
];

const PreguntasFrecuentes = () => {
  const [preguntasFrecuentesByTheme, setPreguntasFrecuentesByTheme] = useState({});
  const [activeTheme, setActiveTheme] = useState(null); // Declaración de activeTheme y setActiveTheme
  const [newQuestion, setNewQuestion] = useState(''); // Declaración de newQuestion y setNewQuestion

  useEffect(() => {
    const preguntasFrecuentesByTheme = {};
    preguntasFrecuentes.forEach((pregunta) => {
      if (!preguntasFrecuentesByTheme[pregunta.theme]) {
        preguntasFrecuentesByTheme[pregunta.theme] = [];
      }
      preguntasFrecuentesByTheme[pregunta.theme].push(pregunta);
    });
    setPreguntasFrecuentesByTheme(preguntasFrecuentesByTheme);
  }, []);

  const handleThemeChange = (theme) => {
    setActiveTheme(theme);
  };

  const handleNewQuestionChange = (e) => {
    setNewQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviar pregunta:', newQuestion);
  };

  return (
    <div className="preguntas-frecuentes">
      <h1>PREGUNTAS FRECUENTES</h1>
      <div className="preguntas-frecuentes-container">
        <ul className="preguntas-frecuentes-tabs">
          {Object.keys(preguntasFrecuentesByTheme).map((theme) => (
            <li key={theme} className="preguntas-frecuentes-tab">
              <a href="#" onClick={() => handleThemeChange(theme)}>
                {theme}
              </a>
            </li>
          ))}
        </ul>
        {activeTheme && (
          <div className="preguntas-frecuentes-theme">
            <h2>{activeTheme}</h2>
            <ul className="preguntas-frecuentes-list">
              {preguntasFrecuentesByTheme[activeTheme].map((pregunta) => (
                <li key={pregunta.id} className="preguntas-frecuentes-item">
                  <h3>{pregunta.question}</h3>
                  <p>{pregunta.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="preguntas-frecuentes-form">
        <h2>Haz tu pregunta</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={newQuestion}
            onChange={handleNewQuestionChange}
            placeholder="Escribe tu pregunta aquí"
          />
          <button type="submit" className="btn btn-large btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;