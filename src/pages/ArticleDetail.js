import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './ArticleList.css';
import './App-share.css';
import { Link } from "react-router-dom"; 
import { FiArrowRight } from "react-icons/fi";

const ArticleDetail = () => {
  const [comments, setComments] = useState([[], [], [], [], [], [], [], [], [], []]);
  const [commentTexts, setCommentTexts] = useState(['', '', '', '', '', '', '', '', '', '']);
  const [showEmojis, setShowEmojis] = useState([false, false, false, false, false, false, false, false, false, false]);

  const addComment = (index) => {
    if (commentTexts[index].trim()) {
      const newComments = [...comments];
      newComments[index].push({ user: 'Nuevo Usuario', text: commentTexts[index] });
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
    window.open(`https://telegram.me/share/url?url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnLinkedIn = (url) => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

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
                    <div className="avatar"></div>
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
              <div className="new-comment">
                <div className="avatar"></div>
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
        <div className="home-text-section">
         <button className="secondary-button"><Link to="/ArticleDetail2" style={{ textDecoration: 'none', color: 'inherit' }}>
            Más Articulos <br/><FiArrowRight />
         </Link></button>
         <p className="primary-text">
             
         </p>
         </div>

      </div>
    </div>
  );
};

export default ArticleDetail;