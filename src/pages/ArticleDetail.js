import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import './ArticleList.css';

const ArticleDetail = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [comments, setComments] = useState([
    [
      { user: 'Juan Pérez', picture: '/Assets-2/imagenes/Avatar1.png', text: '¡Excelente artículo!' },
      { user: 'Ana Gómez', picture: '/Assets-2/imagenes/Avatar2.png', text: 'Muy informativo.' },
      { user: 'Carlos López', picture: '/Assets-2/imagenes/Avatar3.png', text: 'Me encantó la parte sobre la planificación.' }
    ],
    [
      { user: 'Laura Fernández', picture: '/Assets-2/imagenes/Avatar4.png', text: '¡Quiero intentar esto!' },
      { user: 'Pedro Martínez', picture: '/Assets-2/imagenes/Avatar5.png', text: 'Gran explicación.' },
      { user: 'Sofía Ramírez', picture: '/Assets-2/imagenes/Avatar6.png', text: 'Gracias por los consejos.' }
    ],
    [
      { user: 'Miguel Torres', picture: '/Assets-2/imagenes/Avatar7.png', text: '¡Increíble!' },
      { user: 'Lucía Morales', picture: '/Assets-2/imagenes/Avatar8.png', text: 'Muy útil.' },
      { user: 'Daniela Campos', picture: '/Assets-2/imagenes/Avatar9.png', text: 'Lo probaré este fin de semana.' }
    ],
    [
      { user: 'Jorge Herrera', picture: '/Assets-2/imagenes/Avatar10.png', text: '¡Fascinante!' },
      { user: 'Martina Castillo', picture: '/Assets-2/imagenes/Avatar11.png', text: 'No sabía esto.' },
      { user: 'Felipe Vega', picture: '/Assets-2/imagenes/Avatar12.png', text: '¡Gran artículo!' }
    ],
    [
      { user: 'Valentina Ruiz', picture: '/Assets-2/imagenes/Avatar13.png', text: '¡Inspirador!' },
      { user: 'Santiago Ríos', picture: '/Assets-2/imagenes/Avatar14.png', text: 'Me ayudó mucho.' },
      { user: 'Camila Cruz', picture: '/Assets-2/imagenes/Avatar15.png', text: 'Definitivamente lo intentaré.' }
    ],
    [
      { user: 'Gabriel Soto', picture: '/Assets-2/imagenes/Avatar16.png', text: '¡Asombroso!' },
      { user: 'Isabella Peña', picture: '/Assets-2/imagenes/Avatar17.png', text: 'Muy claro y conciso.' },
      { user: 'Francisco Núñez', picture: '/Assets-2/imagenes/Avatar18.png', text: 'Gracias por compartir.' }
    ],
    [
      { user: 'Emilia Blanco', picture: '/Assets-2/imagenes/Avatar19.png', text: '¡Me encanta!' },
      { user: 'Nicolás Luna', picture: '/Assets-2/imagenes/Avatar20.png', text: 'Muy bien explicado.' },
      { user: 'Victoria León', picture: '/Assets-2/imagenes/Avatar21.png', text: 'Aprendí algo nuevo hoy.' }
    ],
    [
      { user: 'Mateo Salazar', picture: '/Assets-2/imagenes/Avatar22.png', text: '¡Increíble dedicación!' },
      { user: 'Renata Paredes', picture: '/Assets-2/imagenes/Avatar23.png', text: 'Lo mejor que he leído en mucho tiempo.' },
      { user: 'Diego Ortega', picture: '/Assets-2/imagenes/Avatar24.png', text: '¡Gracias por esto!' }
    ],
    [
      { user: 'Antonia Bravo', picture: '/Assets-2/imagenes/Avatar25.png', text: '¡Genial!' },
      { user: 'Tomás Vidal', picture: '/Assets-2/imagenes/Avatar26.png', text: 'Aprendí mucho.' },
      { user: 'Paula Sandoval', picture: '/Assets-2/imagenes/Avatar27.png', text: 'Voy a intentarlo.' }
    ],
    [
      { user: 'Bruno Medina', picture: '/Assets-2/imagenes/Avatar28.png', text: '¡Impresionante!' },
      { user: 'Julieta Ponce', picture: '/Assets-2/imagenes/Avatar29.png', text: 'Muy detallado.' },
      { user: 'Hugo Araya', picture: '/Assets-2/imagenes/Avatar30.png', text: '¡Fantástica información!' }
    ],
  ]);

  const [commentTexts, setCommentTexts] = useState(['', '', '', '', '', '', '', '', '', '']);
  const [showEmojis, setShowEmojis] = useState([false, false, false, false, false, false, false, false, false, false]);

  const addComment = (index) => {
    if (commentTexts[index].trim() && isAuthenticated) {
      const newComments = [...comments];
      newComments[index].push({ user: user.name, picture: user.picture, text: commentTexts[index] });
      setComments(newComments);

      const newCommentTexts = [...commentTexts];
      newCommentTexts[index] = '';
      setCommentTexts(newCommentTexts);
    }
  };

  const addEmoji = (emoji, index) => {
    const newCommentTexts = [...commentTexts];
    newCommentTexts[index] += emoji;
    setCommentTexts(newCommentTexts);
  };

  const toggleEmojiPicker = (index) => {
    const newShowEmojis = [...showEmojis];
    newShowEmojis[index] = !newShowEmojis[index];
    setShowEmojis(newShowEmojis);
  };

  const shareOnFacebook = (url) => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnTwitter = (url) => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnWhatsApp = (url) => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnTelegram = (url) => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnLinkedIn = (url) => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  const articles = [
    {
      title: "Artículo 1: Fotografía de Paisajes Nocturnos",
      image: "/assets/images/article1.png",
      text: "La fotografía de paisajes nocturnos es un campo fascinante que permite capturar la belleza del cielo estrellado, la luna y otros fenómenos nocturnos. Usar una exposición prolongada es clave para obtener buenos resultados. Además, es importante elegir una ubicación alejada de la contaminación lumínica y utilizar un trípode para garantizar la estabilidad de la cámara. Esta técnica requiere paciencia y práctica, pero los resultados pueden ser espectaculares, mostrando un mundo invisible a simple vista. La planificación es esencial; conocer las fases lunares y las condiciones climáticas puede marcar la diferencia entre una buena foto y una extraordinaria. También es útil experimentar con diferentes configuraciones de cámara, como el ISO y la apertura, para encontrar el equilibrio perfecto entre claridad y luz."
    },
    {
      title: "Artículo 2: Retratos de Alta Velocidad",
      image: "/assets/images/article2.png",
      text: "La fotografía de paisajes nocturnos es un campo fascinante que permite capturar la belleza del cielo estrellado, la luna y otros fenómenos nocturnos. Usar una exposición prolongada es clave para obtener buenos resultados. Además, es importante elegir una ubicación alejada de la contaminación lumínica y utilizar un trípode para garantizar la estabilidad de la cámara. Esta técnica requiere paciencia y práctica, pero los resultados pueden ser espectaculares, mostrando un mundo invisible a simple vista. La planificación es esencial; conocer las fases lunares y las condiciones climáticas puede marcar la diferencia entre una buena foto y una extraordinaria. También es útil experimentar con diferentes configuraciones de cámara, como el ISO y la apertura, para encontrar el equilibrio perfecto entre claridad y luz."
    },
    {
      title: "Artículo 3: Macro Fotografía de Insectos",
      image: "/assets/images/article3.png",
      text: "La fotografía de paisajes nocturnos es un campo fascinante que permite capturar la belleza del cielo estrellado, la luna y otros fenómenos nocturnos. Usar una exposición prolongada es clave para obtener buenos resultados. Además, es importante elegir una ubicación alejada de la contaminación lumínica y utilizar un trípode para garantizar la estabilidad de la cámara. Esta técnica requiere paciencia y práctica, pero los resultados pueden ser espectaculares, mostrando un mundo invisible a simple vista. La planificación es esencial; conocer las fases lunares y las condiciones climáticas puede marcar la diferencia entre una buena foto y una extraordinaria. También es útil experimentar con diferentes configuraciones de cámara, como el ISO y la apertura, para encontrar el equilibrio perfecto entre claridad y luz."
    },
    {
      title: "Artículo 4: Fotografía Submarina",
      image: "/assets/images/article4.png",
      text: "La fotografía de paisajes nocturnos es un campo fascinante que permite capturar la belleza del cielo estrellado, la luna y otros fenómenos nocturnos. Usar una exposición prolongada es clave para obtener buenos resultados. Además, es importante elegir una ubicación alejada de la contaminación lumínica y utilizar un trípode para garantizar la estabilidad de la cámara. Esta técnica requiere paciencia y práctica, pero los resultados pueden ser espectaculares, mostrando un mundo invisible a simple vista. La planificación es esencial; conocer las fases lunares y las condiciones climáticas puede marcar la diferencia entre una buena foto y una extraordinaria. También es útil experimentar con diferentes configuraciones de cámara, como el ISO y la apertura, para encontrar el equilibrio perfecto entre claridad y luz."
    },
    {
      title: "Artículo 5: Fotografía Aérea con Drones",
      image: "/assets/images/article5.png",
      text: "La fotografía de paisajes nocturnos es un campo fascinante que permite capturar la belleza del cielo estrellado, la luna y otros fenómenos nocturnos. Usar una exposición prolongada es clave para obtener buenos resultados. Además, es importante elegir una ubicación alejada de la contaminación lumínica y utilizar un trípode para garantizar la estabilidad de la cámara. Esta técnica requiere paciencia y práctica, pero los resultados pueden ser espectaculares, mostrando un mundo invisible a simple vista. La planificación es esencial; conocer las fases lunares y las condiciones climáticas puede marcar la diferencia entre una buena foto y una extraordinaria. También es útil experimentar con diferentes configuraciones de cámara, como el ISO y la apertura, para encontrar el equilibrio perfecto entre claridad y luz."
    },
    {
      title: "Artículo 6: Fotografía de Arquitectura",
      image: "/assets/images/article6.png",
      text: "La fotografía de paisajes nocturnos es un campo fascinante que permite capturar la belleza del cielo estrellado, la luna y otros fenómenos nocturnos. Usar una exposición prolongada es clave para obtener buenos resultados. Además, es importante elegir una ubicación alejada de la contaminación lumínica y utilizar un trípode para garantizar la estabilidad de la cámara. Esta técnica requiere paciencia y práctica, pero los resultados pueden ser espectaculares, mostrando un mundo invisible a simple vista. La planificación es esencial; conocer las fases lunares y las condiciones climáticas puede marcar la diferencia entre una buena foto y una extraordinaria. También es útil experimentar con diferentes configuraciones de cámara, como el ISO y la apertura, para encontrar el equilibrio perfecto entre claridad y luz."
    },
    {
      title: "Artículo 7: Fotografía de Moda en Estudio",
      image: "/assets/images/article8.png",
      text: "La fotografía de paisajes nocturnos es un campo fascinante que permite capturar la belleza del cielo estrellado, la luna y otros fenómenos nocturnos. Usar una exposición prolongada es clave para obtener buenos resultados. Además, es importante elegir una ubicación alejada de la contaminación lumínica y utilizar un trípode para garantizar la estabilidad de la cámara. Esta técnica requiere paciencia y práctica, pero los resultados pueden ser espectaculares, mostrando un mundo invisible a simple vista. La planificación es esencial; conocer las fases lunares y las condiciones climáticas puede marcar la diferencia entre una buena foto y una extraordinaria. También es útil experimentar con diferentes configuraciones de cámara, como el ISO y la apertura, para encontrar el equilibrio perfecto entre claridad y luz."
    },
    {
      title: "Artículo 8: Fotografía de Eventos",
      image: "/assets/images/article9.png",
      text: "La fotografía de paisajes nocturnos es un campo fascinante que permite capturar la belleza del cielo estrellado, la luna y otros fenómenos nocturnos. Usar una exposición prolongada es clave para obtener buenos resultados. Además, es importante elegir una ubicación alejada de la contaminación lumínica y utilizar un trípode para garantizar la estabilidad de la cámara. Esta técnica requiere paciencia y práctica, pero los resultados pueden ser espectaculares, mostrando un mundo invisible a simple vista. La planificación es esencial; conocer las fases lunares y las condiciones climáticas puede marcar la diferencia entre una buena foto y una extraordinaria. También es útil experimentar con diferentes configuraciones de cámara, como el ISO y la apertura, para encontrar el equilibrio perfecto entre claridad y luz."
    },
    {
      title: "Artículo 9: Fotografía de Vida Silvestre",
      image: "/assets/images/article10.png",
      text: "La fotografía de paisajes nocturnos es un campo fascinante que permite capturar la belleza del cielo estrellado, la luna y otros fenómenos nocturnos. Usar una exposición prolongada es clave para obtener buenos resultados. Además, es importante elegir una ubicación alejada de la contaminación lumínica y utilizar un trípode para garantizar la estabilidad de la cámara. Esta técnica requiere paciencia y práctica, pero los resultados pueden ser espectaculares, mostrando un mundo invisible a simple vista. La planificación es esencial; conocer las fases lunares y las condiciones climáticas puede marcar la diferencia entre una buena foto y una extraordinaria. También es útil experimentar con diferentes configuraciones de cámara, como el ISO y la apertura, para encontrar el equilibrio perfecto entre claridad y luz."
    },
    {
      title: "Artículo 10: Fotografía de Deportes",
      image: "/assets/images/article1.png",
      text: "La fotografía de paisajes nocturnos es un campo fascinante que permite capturar la belleza del cielo estrellado, la luna y otros fenómenos nocturnos. Usar una exposición prolongada es clave para obtener buenos resultados. Además, es importante elegir una ubicación alejada de la contaminación lumínica y utilizar un trípode para garantizar la estabilidad de la cámara. Esta técnica requiere paciencia y práctica, pero los resultados pueden ser espectaculares, mostrando un mundo invisible a simple vista. La planificación es esencial; conocer las fases lunares y las condiciones climáticas puede marcar la diferencia entre una buena foto y una extraordinaria. También es útil experimentar con diferentes configuraciones de cámara, como el ISO y la apertura, para encontrar el equilibrio perfecto entre claridad y luz."
    },
  ];

  if (isLoading) return <div>Cargando...</div>;

  return (
    <div>
      <h1>ARTÍCULOS DE FOTOGRAFÍA AVANZADA</h1>
      <div className="article-list">
        {articles.map((article, index) => (
          <div className="article-cardn" key={index}>
            <h1>{article.title}</h1>
            <img src={article.image} alt={article.title} />
            <p className="primary-text">{article.text}</p>

            <div className="comment-section">
              <h2>Comentarios destacados</h2>
              <div>
                {comments[index].map((comment, cIndex) => (
                  <div key={cIndex} className="comment">
                    <div className="avatar">
                      <img src={comment.picture} alt={comment.user} />
                    </div>
                    <div className="comment-content">
                      <p><strong>{comment.user}</strong></p>
                      <p>{comment.text}</p>
                      <div className="comment-footer">
                        <span>Me gusta</span>
                        <span>Responder</span>
                        <span>Compartir</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {isAuthenticated && (
                <div className="new-comment">
                  <div className="avatar">
                    <img src={user.picture} alt={user.name} />
                  </div>
                  <textarea
                    value={commentTexts[index]}
                    onChange={(e) => {
                      const newCommentTexts = [...commentTexts];
                      newCommentTexts[index] = e.target.value;
                      setCommentTexts(newCommentTexts);
                    }}
                    placeholder="Escribe una respuesta..."
                  />
                  <button onClick={() => addComment(index)}>Enviar</button>
                </div>
              )}
              <button onClick={() => toggleEmojiPicker(index)}>
                Mostrar Emojis
              </button>
              {showEmojis[index] && (
                <div className="emoji-picker">
                  <span onClick={() => addEmoji('😊', index)}>😊</span>
                  <span onClick={() => addEmoji('😂', index)}>😂</span>
                  <span onClick={() => addEmoji('👍', index)}>👍</span>
                  <span onClick={() => addEmoji('❤️', index)}>❤️</span>
                  <span onClick={() => addEmoji('😢', index)}>😢</span>
                </div>
              )}
            </div>

            <div className="share-buttons">
              <button className="share-button facebook" onClick={() => shareOnFacebook(window.location.href)}>
                <img src="/Assets-2/imagenes/iconof.png" alt="Facebook" /> Facebook 
              </button>
              <button className="share-button twitter" onClick={() => shareOnTwitter(window.location.href)}>
                <img src="/Assets-2/imagenes/iconox.png" alt="Twitter" /> Twittear
              </button>
              <button className="share-button whatsapp" onClick={() => shareOnWhatsApp(window.location.href)}>
                <img src="/Assets-2/imagenes/iconow.png" alt="WhatsApp" /> WhatsApp
              </button>
              <button className="share-button telegram" onClick={() => shareOnTelegram(window.location.href)}>
                <img src="/Assets-2/imagenes/iconot.png" alt="Telegram" /> Telegram
              </button>
              <button className="share-button linkedin" onClick={() => shareOnLinkedIn(window.location.href)}>
                <img src="/Assets-2/imagenes/iconoL.png" alt="LinkedIn" /> LinkedIn
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleDetail;