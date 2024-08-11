import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './ArticleList.css';
import { Link } from "react-router-dom"; 
import { FiArrowRight } from "react-icons/fi";

const Newsdetail = () => {
  return (
    <div>
    <h1>Noticias de Eventos Fotograficos</h1>
    <div class="article-list">
      
      <div class="article-cardn">
      <h1> Ganadores Sony World Photography Awards y evento 2024 </h1>
      <img src="/assets/images/noticia1.png" alt="Notice 1" />
        <p className="primary-text">
             © Juliette Pavy, France, Photographer of the Year, Professional competition, Documentary Projects, Sony World Photography Awards 2024
            Ayer se ha celebrado la gala de entrega de premios de los Sony World Photography Awards. Como viene siendo habitual desde el año 2017, asistí al evento en Londres invitado por Sony.
            <br /><br />
            Cada año voy descubriendo algo nuevo, nuevos compañeros, fotógrafos, etc. y en esta ocasión me he quedado impresionado con el trabajo de Javier Aznar y de Merche Llobera, ambos embajadores de Sony. Culpa mía por no haber conocido antes su trabajo, lo que me hace pensar en la cantidad de fotógrafos de una elevadísima calidad técnica y artística que aún me quedan por descubrir.
            <br /><br />
            El evento, como siempre con una ejecución impecable y desde luego, también como siempre con todo tipo de opiniones en que si una serie era más merecedora de un premio que otra o no. Ya sabemos que todos somos opinadores profesionales. La ganadora absoluta Juliette Pavy tiene detrás de su gran trabajo de investigación una historia muy potente.
            <br /><br />
            Jorge Mónaco (Argentina) también ha realizado un impresionante trabajo social, Portraits and Landscapes, que requiere más de un visionado para captar toda su fuerza y crudeza.
            <br /><br />
            Este año, el premio Outstanding Contribution to Photography ha recaído en Sebastião Salgado y tener el placer de verlo y oírlo en directo ha sido todo un lujo.
            <br /><br />
            Espero poder asistir alguna edición más, porque la verdad es que son dos días de exaltación de la fotografía, que bien merecen el esfuerzo del viaje, los madrugones y la falta de sueño. El conocer a Merche y Javier, encontrar de nuevo a compañeros de medios o a Jorge de Sony, que tan bien organiza a la sección de Iberia, es todo un lujo.
            <br /><br />
        </p>

      </div>
      <div class="article-cardn">
      <h1>Últimos días para enviar tus fotos y vídeos al Red Bull Illume</h1>
      <img src="/assets/images/noticia2.png" alt="Notice 2" />
        <p className="primary-text">
            Hasta el 31 de este mes, aún puedes enviar tus fotos al concurso Red Bull Illume Image Quest 2023.
            <br /><br />
            Aún dispones de unos días para participar en el concurso de imágenes de deportes de aventura y acción más grande del mundo.
            <br /><br />
            Los fotógrafos y videógrafos de deportes de aventura y acción pueden participar en el concurso más grande y respetado del mundo en el género: Red Bull Illume, que abrió las inscripciones el pasado 1 de mayo.
            <br /><br />
            Las presentaciones están abiertas hasta el 31 de julio de 2023 con 10 categorías en total. Ocho categorías de fotos a través de la presentación en redbullillume.com, juzgadas por un panel internacional de editores de fotos y expertos entre los que se encuentra por segundo año la revista DNG Photo Magazine.
            <br /><br />
            Dos categorías de Instagram para fotos y reels, juzgadas por la comunidad.
            <br /><br />
            Exposición y reconocimiento globales.
        </p>

      </div>
      <div class="article-cardn">
      <h1>Abierto el envío de fotos a Red Bull Illume</h1>
      <img src="/assets/images/noticia3.png" alt="Notice 3" />
        <p className="primary-text">
            Esta es la imagen ganadora del Red Bull Illume Image Quest 2021. © Will Saunders / Red Bull Illume
            <br /><br />
            El concurso de imágenes de deportes de aventura y acción más grande del mundo ya está abierto para el envío de tus fotos.
            <br /><br />
            Los fotógrafos y videógrafos de deportes de aventura y acción ahora pueden participar en el concurso más grande y respetado del mundo en el género: Red Bull Illume, que abrió las inscripciones el 1 de mayo. El Red Bull Illume Image Quest está oficialmente de vuelta para su séptima edición y busca mostrar la próxima ola de talento, con categorías para atraer tanto a fotógrafos como a videógrafos, ya sean aficionados o profesionales.
            <br /><br />
            Las presentaciones están abiertas desde el 1 de mayo hasta el 31 de julio de 2023
            <br /><br />
            10 categorías en total
            <br /><br />
            Ocho categorías de fotos a través de la presentación en redbullillume.com, juzgadas por un panel internacional de editores de fotos y expertos
            <br /><br />
            Dos categorías de Instagram para fotos y reels, juzgadas por la comunidad
            <br /><br />
            Exposición y reconocimiento globales
            <br /><br />
            Will Saunders, ganador de la edición anterior en 2021, dice que participar es una gran oportunidad. «Ganar fue muy especial y animaría a todos a ver Red Bull Illume y enviar sus fotos. Nunca se sabe. Nunca pensé que esto sucedería». Y añade: «Red Bull Illume se trata de mezclar arte y deporte. Es una competición especial porque empuja tanto a los atletas como a los fotógrafos a crear algo nuevo».
            <br /><br />
            Ulrich Grill, fundador del concurso, dice: «Red Bull Illume es el pináculo de las imágenes de deportes de aventura y acción. Es genial estar de vuelta, estamos muy emocionados de ver lo que traerá 2023. ¡Cualquiera que fotografíe deportes de aventura y acción debería participar! Puede ser una oportunidad que cambia la vida y puede ayudar a establecer tu nombre y lanzar tu carrera».
        </p>

      </div>
      <div class="article-cardn">
      <h1>Ganadores Sony World Photography Awards 2023</h1>
      <img src="/assets/images/noticia4.png" alt="Notice 4" />
        <p className="primary-text">
            
            <br /><br />
            Ayer se anunciaron los ganadores globales de los prestigiosos premios Sony World Photography Awards 2023 en una ceremonia de gala en Londres a la que pudimos acudir gracias a Sony España, conducida por la locutora e historiadora de arte Kate Bryan.
            <br /><br />
            Edgar Martins (Portugal) fue el ganador absoluto del título Photographer of the Year por su serie de Our War (Nuestra guerra), un homenaje a su amigo, el fotoperiodista Anton Hammerl, asesinado durante la guerra civil libia en 2011. Como recompensa, Martins recibió 25.000 dólares y equipos de imagen digital de Sony, así como una exposición individual de su trabajo.
            <br /><br />
            Además, se otorgó el Premio a la Sostenibilidad de 5.000 dólares al fotógrafo italiano Alessandro Cinque, creado junto con la Fundación de Naciones Unidas y la iniciativa Picture This de Sony Pictures. La exposición Sony World Photography Awards 2023 tiene lugar en Somerset House en Londres desde el 14 de abril hasta el 1 de mayo de 2023, presentando las obras de los ganadores y finalistas, así como un homenaje a la Outstanding Contribution to Photography de Rinko Kawauchi.
        </p>

      </div>

      <div class="article-cardn">
      <h1>El Cyber Monday llega a Adobe con grandes descuentos</h1>
      <img src="/assets/images/noticia5.png" alt="Notice 5" />
        <p className="primary-text">
            
            <br /><br />
            dobe acaba de anunciar que extiende los descuentos ofrecidos en las aplicaciones de Creative Cloud para el Black Friday con motivo del Cyber Monday, celebrado hoy, los cuales finalmente estarán disponibles hasta el 4 de diciembre.
            <br /><br />
            Oferta de Cyber Monday – Consigue más de un 40% de descuento en el plan individual de todas las aplicaciones de Creative Cloud.
            <br /><br />
            Esta oferta estará disponible por un tiempo limitado, hasta el 4 de diciembre, en este enlace.
            <br /><br />
            El plan de todas las aplicaciones de Creative Cloud incluye más de 20 aplicaciones y servicios de escritorio y para móviles enfocados en fotografía, vídeo, diseño, web y UX y mucho más.
            <br /><br />
            Oferta de Cyber Monday para estudiantes y profesores – Consigue un 20% de descuento EXTRA en el plan de todas las aplicaciones de Creative Cloud.
            <br /><br />
            Esta oferta estará disponible por un tiempo limitado, hasta el 4 de diciembre, en este enlace.
        </p>

      </div>

      <div class="article-cardn">
      <h1>Rinko Kawauchi premio Outstanding Contribution to Photography 2023</h1>
      <img src="/assets/images/noticia6.png" alt="Notice 6" />
        <p className="primary-text">
            
            <br /><br />
            La World Photography Organisation anuncia a la reconocida fotógrafa japonesa Rinko Kawauchi como ganadora del premio Outstanding Contribution to Photography de los Sony World Photography Awards 2023. Una de las fotógrafas japonesas más importantes de hoy en día, Kawauchi ha alcanzado renombre internacional por sus imágenes íntimas y luminosas, que captan momentos efímeros de la vida cotidiana.
            <br /><br />
            Más de veinte imágenes de la fotógrafa se mostrarán en la exposición Sony World Photography Awards 2023, que vuelve a Somerset House, Londres, desde el 14 de abril al 1 de mayo de 2023. La selección, hecha por la artista, abarca veinte años de su carrera y destaca hitos y temas significativos a lo largo de algunas de sus series más icónicas: Illuminance (2011), AILA (2004), Utatane (2001), y Ametsuchi (2012).
            <br /><br />
            Kawauchi nació en 1972 en la prefectura de Shiga, Japón, y empezó a hacer fotografías a la edad de 19 años. A principios de la década de 1990 trabajó como fotógrafa para una agencia de publicidad, antes de trasladarse a un estudio de Tokio para centrarse en su propio trabajo. Logró reconocimiento internacional por primera vez en 2001, después de la publicación de tres libros de fotografía: Utatane, Hanabi y Hanako. Dos de estas series fueron ganadoras del más prestigioso de los premios de Japón para la fotografía emergente: el premio Ihei Kimura.
            <br /><br />
           
        </p>

      </div>

      <div class="article-cardn">
      <h1>Adobe se alía con Leica y Nikon dentro de la Content Authenticity Initiative</h1>
      <img src="/assets/images/noticia7.png" alt="Notice 7" />
        <p className="primary-text">
            
            <br /><br />
            Hace tres años, en Adobe MAX lanzaron la Content Authenticity Initiative (CAI) con el objetivo de aumentar la confianza y la transparencia en los canales online, así como de combatir la desinformación y la información inexacta. La solución de la CAI se centra en el uso de la tecnología de procedencia para permitir la atribución a los creadores y proporcionar transparencia sobre los hechos y los orígenes de una pieza de contenido digital. Actualmente, estamos siendo testigo del poder de la creatividad a través de la innovación de las cámaras y la IA generativa, pero a la vez, también de lo rápido que se puede difundir la desinformación. Mientras trabajamos para restablecer la confianza en el ecosistema digital, creemos que la procedencia es una capa fundamental en el ciclo de vida de la producción de contenidos. Y esa base ha dado un gran paso adelante en MAX 2022.
            <br /><br />
            Adobe cumple un gran hito en su misión, ya que anunciamos la colaboración con los fabricantes de cámaras líderes del sector, Leica y Nikon, para implementar la tecnología de procedencia en dos cámaras: la icónica Leica M11* Rangefinder y la cámara mirrorless Nikon Z9*, líder del sector, aportando la procedencia y autenticidad a las imágenes digitales justo al ser capturadas.
            <br /><br />
            Este es un gran paso para establecer la confianza y la atribución a lo largo del ciclo de vida de los contenidos, ya que es la primera vez que esta tecnología de captura segura estará en manos de la comunidad de creadores. Esta permitirá a los fotoperiodistas y otros creadores proteger y aumentar la transparencia de su trabajo digital, adjuntando de forma segura información criptográfica valiosa, como la autoría y cuándo, dónde y cómo se capturó una imagen.
            <br /><br />
        </p>

      </div>

      <div class="article-cardn">
      <h1>Arcadina crea los nuevos Planes Negocio y Web</h1>
      <img src="/assets/images/noticia8.png" alt="Notice 8" />
        <p className="primary-text">
            
            <br /><br />
            Arcadina ha mejorado y actualizado sus planes. Hace tan solo unos días esta plataforma que ofrece “soluciones todo en uno” para fotógrafos y videógrafos ha modificado sus paquetes de productos para adaptarse a las necesidades de sus clientes.
            <br /><br />
            Gracias a la creación de los nuevos planes Negocio y Web de Arcadina, los fotógrafos pueden contratar una página web con blog (plan Web) y un área de clientes y tienda online (planes Negocio) de manera independiente. Esta separación de sus paquetes tan esperada por muchos profesionales de la fotografía les va a permitir crear el modelo de negocio que realmente necesitan.
            <br /><br />
        </p>

      </div>

      <div class="article-cardn">
      <h1>Historias de guerra desde Ucrania, por el equipo de Skylum</h1>
      <img src="/assets/images/noticia9.png" alt="Notice 9" />
        <p className="primary-text">
        <br /><br /> 
        Junto con todos los demás ucranianos, los miembros del equipo de Skylum han visto cambiar sus vidas drásticamente desde el comienzo de la guerra.
        <br /><br />
        En la foto de arriba puedes ver al equipo de Skylum durante el campamento fotográfico de Bukovel en verano de 2021, medio año antes de la invasión rusa. Desde entonces, la vida de todos los que aparecen en esta foto ha cambiado para siempre. Descubre las historias de las personas detrás de Luminar.
        <br /><br />
        El 24 de febrero la invasión a gran escala de Rusia obligó a los ucranianos a repensarlo todo y a tomar decisiones que les cambiaron la vida en el acto. Muchas personas evacuaron al extranjero, muchas se quedaron en Ucrania y algunas se unieron a las fuerzas armadas y a los grupos locales de defensa territorial para defender el país. Hoy nos gustaría contarte las historias reales de algunos de nuestros compañeros de Skylum desde el comienzo de la guerra que todavía sigue hasta hoy.
        </p>

      </div>

      <div class="article-cardn">
      <h1>Exposición fotográfica: “XXI.20.21 Emociones, Pasiones, Sentimientos”</h1>
      <img src="/assets/images/noticia10.png" alt="Notice 10" />
        <p className="primary-text">
     
        
        <br /><br />
        
        Exposición fotográfica: “XXI.20.21 Emociones, Pasiones, Sentimientos”. Museo Provincial de Huelva
        <br /><br />
        Esta exposición está circunscrita dentro de los eventos del Otoño Cultural Iberoamericano por iniciativa de El Club del RAW Solitario y patrocinada por entidades como:
        <br /><br />
        La Asociación Cultural Iberoamericana.<br />
        Fundación Caja Rural del Sur<br />
        Diputación de Huelva<br />
        y la Junta de Andalucía.<br />
        <br /><br />
        Se trata de una exposición colectiva de una docena fotógrafos españoles de toda la geografía nacional.
        <br />
        
        </p>

      </div>

    </div>
    <div className="home-text-section">
         <button className="secondary-button"><Link to="/Newsdetails2" style={{ textDecoration: 'none', color: 'inherit' }}>
            Más Noticias <br/><FiArrowRight />
         </Link></button>
         <p className="primary-text">
             
         </p>
         </div>
    </div>
  );
};

export default Newsdetail;