import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './ArticleList.css';
import { Link } from "react-router-dom"; 
import { FiArrowRight } from "react-icons/fi";

const Newsdetails3 = () => {
  return (
    <div>
    <h1>Noticias de Novedades Fotograficas</h1>
    <div class="article-list">
      
      <div class="article-cardn">
      <h1> Novedades de audio y vídeo de Adobe </h1>
      <img src="/assets/images/noticia16.png" alt="Notice 16" />
        <p className="primary-text">
            
            <br /><br />

            Adobe ha anunciado nuevas e importantes actualizaciones de audio y video en sus herramientas de Creative Cloud.
            <br /><br />
            Entre las novedades se encuentran:
            <br /><br />
            Voz a texto en Premiere Pro: innovaciones que ayudan a los creadores a ofrecer un contenido más atractivo y a hacerlo de una manera más eficiente, incluyendo nuevas mejoras en los controles para los Subtítulos Automáticos, impulsado por Adobe Sensei.
            Premiere Pro en Apple M1: las impresionantes mejoras de rendimiento en todos los ámbitos demuestran el compromiso de Adobe de aprovechar el hardware moderno y empoderar a los creadores de vídeo.
            Mejoras en las herramientas de estilo de títulos y subtítulos en Premiere Pro y otras mejoras que agilizan y aceleran los flujos de trabajo creativos.
            Procesamiento de varios fotogramas en la beta pública de After Effects: nuevas y potentes funciones de procesamiento de varios fotogramas para acelerar los flujos de trabajo de motion graphics
            <br /><br />
         </p>

      </div>
      
      <div class="article-cardn">
      <h1> Presentación de PETRICOR un nuevo libro de fotografía </h1>
      <img src="/assets/images/noticia17.png" alt="Notice 17" />
        <p className="primary-text">
            
            <br /><br />
            El 13 de Mayo, a las 20 horas, se presenta en el Auditorio de La Lonja de Orihuela, un libro de fotografía, titulado PETRICOR de Joaquín Bas Ros.
            <br /><br />
            PETRICOR contiene la selección de las fotografías de mayor interés visual tomadas de aldeas deshabitadas o lo que queda de lo que fueron sus viviendas, así como de las que en la actualidad todavía viven unos pocos supervivientes del olvido. De estos lugares y sus héroes de la resistencia al abandono, las fotografías quieren reflejar su cotidianidad en la resignación o esperanza. Las fotografía de Petricor pretenden dejar testimonios de la dejación que la Administración viene teniendo de las necesidades de la vida rural más indefensa y peor tratada históricamente.
            <br /><br />
            El proyecto pretende mostrar la amarga realidad de las aldeas de la España rural donde las necesidades de subsistencia, sanitarias, de educación y comunicación siguen sin estar en los planes de igualación social que las Administraciones democráticas tienen la obligación de realizar, con la corresponsabilidad de la sociedad en general. La primera promete globos de esperanza que explotan en la nada del futuro; nosotros, la sociedad , escuchamos en los medios de comunicación una realidad rural que nos entristece pero que nos resulta lejana y ajena, aunque atractiva, ya que la incluimos en nuestros planes de fin de semana y de vacaciones.
            <br /><br />
            
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

      <div class="article-cardn">
      <h1>Cuarta edición del Fotomatón Festival</h1>
      <img src="/assets/images/noticia11.png" alt="Notice 11" />
        <p className="primary-text">
     
        <br /><br />
        Las exposiciones este año serán:
        <br /><br />
        “The End” del estadounidense Rodney Smith cuyo humor, distinción y surrealismo exquisito le hicieron mundialmente famoso.
        <br /><br />
        “Disparando con el corazón”, una retrospectiva del trabajo de la que fue la primera fotoperiodista de nuestro país, Joana Biarnés. Personajes desde los Beatles a Dalí pasaron por el objetivo de esta sorprendente mujer.
        <br /><br />
        “Como si no hubiera un mañana” de Ricardo Cases y Martinho Costa. Esta exposición es una idea del fotógrafo Ricardo Cases cuya propuesta expositiva indaga sobre las limitaciones de la fotografía y la pintura como elementos de confrontación de la realidad.
        <br /><br />
        La cuarta exposición reflejará la obra ganadora del Portfolio Fotomatón en su segunda edición y en donde el autor premiado podrá exponer hasta un total de 25 obras.
                
        </p>

      </div>

      <div class="article-cardn">
      <h1>Apertura Inscripciones Premios LUX 2021</h1>
      <img src="/assets/images/noticia12.png" alt="Notice 12" />
        <p className="primary-text">
     
        <br /><br />
        La Asociación de Fotógrafos Profesionales de España, AFPE, lanza la 29ª edición de los Premios de Fotografía Profesional LUX y presenta la nueva Imagen LUX 2021, cuya autora es la Asociada Irene Sekulic.
        <br /><br />
        La convocatoria está abierta a todos los fotógrafos profesionales que ejerzan la profesión en el territorio español hasta el 1 de octubre.
        <br /><br />
        Después de batir récords de inscripciones durante los últimos años, los Premios LUX siguen consolidándose año tras año como un referente de la Fotografía Profesional en España.
                
        <br /><br />
               
        </p>

      </div>

    


    


    </div>
    <div className="home-text-section">
         <button className="secondary-button"><Link to="/Newsdetails4" style={{ textDecoration: 'none', color: 'inherit' }}>
            Más Noticias <br/><FiArrowRight />
         </Link></button>
         <p className="primary-text">
             
         </p>
         </div>
    </div>
  );
};

export default Newsdetails3;