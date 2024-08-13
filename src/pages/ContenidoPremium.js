import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Video from '../components/Video';
import './App.css';
import Home from './Home';
import News from './News';
import Login from './Login';
import Concurso from './Concurso';

const ContenidoPremium = () => {
  const advancedPhotographyVideos = [
    { id: "Y_e_ijPIwYw",title: "Fotógrafo de Naturaleza y Vida Salvaje",description:"Entrevista con un experto en fotografía de vida salvaje, discutiendo técnicas y experiencias." },
    { id: "sRaLFATjSlc",title: "Fotógrafo de Moda",description:"Conoce las estrategias detrás de la fotografía de moda y los secretos para capturar la esencia de las tendencias." },
    { id: "hTM5V5JLGiKM",title:"Fotógrafo de Bodas", description:"Consejos y técnicas de un fotógrafo de bodas para capturar momentos inolvidables." },
    { id: "XSVCZ6uVycU",title:"Fotógrafo de Arquitectura", description:"Explora las mejores prácticas para la fotografía de arquitectura y diseño de interiores." },
    { id: "n13KEd7Leb8",title:"Fotógrafo de viajes", description:"Conversación con un fotógrafo de viajes sobre cómo capturar el espíritu de diferentes culturas y lugares." },
    { id: "EssYnkd9wRY",title:"Fotógrafo de Retrato", description:"Consejos para crear retratos impactantes y emocionales." },
    { id: "Rfr2CWHBaa4",title:"Fotógrafo de Documental", description:"Entrevista con un fotógrafo documental que comparte sus experiencias y técnicas para contar historias a través de imágenes." },
    { id: "TinKhbAjPxg",title:"Fotógrafo de Deportivo", description:"Descubre cómo capturar la acción y la emoción en eventos deportivos." },
    { id: "aNpYRnsZmno",title:"Fotógrafo de Producto", description:"Estrategias para fotografiar productos y resaltar sus características de manera efectiva." },
    { id: "O5Qt5fdb33s",title:"Fotógrafo Publicitario", description: "Entrevista con un fotógrafo publicitario sobre cómo crear imágenes que venden." },
    { id: "VYVFFtWf4r0",title:"Fotógrafo de Paisajes", description: "Técnicas para capturar la belleza de los paisajes naturales."  },
    { id: "kUSKNHMFkWg",title: "Fotógrafo Urbano",description:"Consejos para fotografiar la vida urbana y capturar la esencia de las ciudades." },
    { id: "pT2LmF2Vlno",title: "Fotógrafo Aereo",description: "Explora la fotografía aérea y los desafíos únicos que presenta." },
    { id: "7NU_cRfp4Vc",title: "Fotógrafo de Alimentos",description:"Cómo hacer que los alimentos se vean deliciosos en las fotos."},
    { id: "xQTmnHAtSsE",title: "Fotógrafo de Eventos",description:"Captura la energía y la emoción de los eventos con técnicas específicas." },
    { id: "qAOz7XUut6s",title: "Fotógrafo de Animales",description: "Estrategias para capturar imágenes impresionantes de animales en su hábitat natural." },
    { id: "7YwxdjyPQZU",title: "Fotógrafo de Maternidad",description: "Consejos para capturar la belleza de la maternidad en fotografías." },
    { id: "sUAYof7IZt4",title: "Fotógrafo de Cines",description: "Cómo se relaciona la fotografía con la cinematografía y qué técnicas se pueden aplicar." },
    { id: "4EI387dPvTY",title: "Fotógrafo de Artes Escenicas",description: "Captura la emoción y el movimiento en actuaciones en vivo." },
    { id: "hOI_XsYsQdo",title: "Fotógrafo de Experimental",description: "Explora técnicas no convencionales y creativas en la fotografía." },
  ];

  const beginnerPhotographyVideos = [
    { id: "BxPrpr0HZXI", title: "Composición Avanzada", description:"Aprende técnicas avanzadas para mejorar la composición en tus fotografías."  },
    { id: "gBujdv65g54", title: "Retoque de Retratos en Photoshop", description:"Guía paso a paso para retocar retratos y mejorar la apariencia de tus sujetos." },
    { id: "w-NFt9n6n_A?list=PL9aTC0X8HrESdkhztti_1HrXujvRBZi9R", title: "Iluminación en Estudio", description: "Técnicas de iluminación en estudio para crear fotos impactantes." },
    { id: "jQ_-kUyj3l0", title: "Fotografía Nocturna", description: "Cómo capturar fotos impresionantes en condiciones de poca luz." },
    { id: "RbDwBwSJrNA", title: "Fotografía de Paisajes con HDR", description: "Uso de HDR para capturar detalles en paisajes con amplio rango dinámico." },
    { id: "AAiwmUrVcAA", title: "Edición de Color Cinemático", description: "Cómo lograr un look cinematográfico en tus fotos mediante la edición de color." },
    { id: "2JUZWADLn40", title: "Fotografía de Productos con Luz Natural", description: "Técnicas para fotografiar productos utilizando luz natural de manera efectiva." },
    { id: "JG3Mi2ljJ6w", title: "Fotografía Macro", description: "Cómo capturar detalles minúsculos en la fotografía macro." },
    { id: "120v6jjOmmc", title: "Fotografía de Retratos con Flash", description: "Uso del flash para mejorar tus retratos y evitar sombras duras." },
    { id: "vPK2Zcvby14", title: "Fotografía de Animales Salvajes", description: "Estrategias para fotografiar animales salvajes en su entorno natural." },
    { id: "TExX4lYiJ4s", title: "Edición de Fotos en Lightroom", description: "Guía completa para la edición de fotos en Adobe Lightroom." },
    { id: "-jgMCh3fFpU", title: "Fotografía con Drones", description: "Captura vistas aéreas impresionantes con técnicas específicas para drones." },
    { id: "Yrron7EyuGQ", title: "Fotografía Creativa con Prisma", description: "Cómo utilizar un prisma para crear efectos creativos en tus fotos." },
    { id: "uFJOchelFT4", title: "Uso de Filtros en Paisajes", description: "Aplicación de filtros para mejorar tus fotos de paisajes." },
    { id: "hI0pdxSh0BA", title: "Fotografía de Siluetas", description: "Técnicas para crear impactantes fotografías de siluetas." },
    { id: "4Ny_rc4aGDw", title: "Fotografía de Larga Exposición", description: "Cómo utilizar la exposición prolongada para capturar movimiento y luz." },
    { id: "ZIZTC-qghdQ", title: "Creación de Timelapses", description: "Guía para crear y editar timelapses para capturar el paso del tiempo." },
    { id: "nDnjS92dzKw", title: "Fotografía Conceptual", description: "Desarrolla tu creatividad con la fotografía conceptual y la narrativa visual." },
    { id: "sBkodgQOr4A", title: "Fotografía de Reflejos", description: "Técnicas para capturar reflejos en agua, vidrio y otras superficies." },
    { id: "sIpg7IWTVCU", title: "Retoque de Fotografías de Moda", description: "Cómo retocar fotografías de moda para resaltar los detalles y la estética." }

 
  ];

  return (
    <div>
      <h1>Contenido Premium</h1>

      <h2>ENTREVISTAS</h2>
      <div className="video-grid">
        {advancedPhotographyVideos.map(video => (
          <Video videoId={video.id} description={video.description} key={video.id} />
        ))}
      </div>

      <h2>TUTORIALES</h2>
      <div className="video-grid">
        {beginnerPhotographyVideos.map(video => (
          <Video videoId={video.id} description={video.description} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default ContenidoPremium;
