import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './ReseñasDeEquipo.css'; // Importamos el archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ReseñasDeEquipo() {

  
  return (
    <div>
      <h1>RESEÑAS DE EQUIPO</h1>
      <div className="reseñas-de-equipo-list">
        <div className="reseña-de-equipo-card">
          <img src="/assets/images/camera1.png" alt="Camera 1" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Canon EOS 5D Mark IV</h2>
            </Link>
            <p>Excelente cámara para fotógrafos profesionales...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.5)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/lens2.png" alt="Lens 2" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Canon EF 24-70mm f/2.8L II USM</h2>
            </Link>
            <p>Lente versátil y de alta calidad...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-full" />
              <span>(4.8)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/accessory3.png" alt="Accessory 3" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Canon EOS 5D Mark IV</h2>
            </Link>
            <p>Excelente cámara para fotógrafos profesionales...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.1)</span>
            </div>
          </div>
        </div>
        <div className="reseña-de-equipo-card">
          <img src="/assets/images/KitIluminacion5.png" alt="KitIluminacion 5" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Kit de iluminacion Led ALTSON</h2>
            </Link>
            <p>regulable 5600K USB Led Video Studio Streaming Lights con soporte de trípode ajustable y filtros de color para mesa/fotografía y grabación de video...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.7)</span>
            </div>
          </div>
        </div>
  
        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Reflector4.png" alt="Reflector 4" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Reflector Etekcity Led de 24 pulgadas</h2>
            </Link>
            <p>Etekcity Reflector de luz 5 en 1 de 24" (60 cm) para fotografía Reflector de fotos multidisco plegable con bolsa, translúcido, plata, oro, blanco y negro...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.5)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Cortinas6.png" alt="Cortinas 6" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>AK TRADING CORTINAS</h2>
            </Link>
            <p>Cortinas para fondo de poliéster negro, de 10 x 10 pies, paneles de cortina con bolsillos para la barra, decoración para ventana, para el hogar, fiestas o ceremonias de boda...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.5)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/AnilloLuz7.png" alt="Anilloluz 7" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>UBeesize Anillo de luz plegable</h2>
            </Link>
            <p>sin espejo, resistente al agua, maletín compatible con accesorios de cámaras Sony, Canon, Nikon y trípode...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.0)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Tablero8.png" alt="Tablero 8" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Tablero para fondo para fotografias</h2>
            </Link>
            <p>7 piezas de 12 patrones Kit de fondo de comida de mesa - Accesorios planos para joyas (tamaño pequeño 16 x 11.5 pulgadas)...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.4)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Mochila9.png" alt="Mochila 9" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Mochila para cámara profesional DSLR / SLR</h2>
            </Link>
            <p>sin espejo, resistente al agua, maletín compatible con accesorios de cámaras Sony, Canon, Nikon y trípode...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.8)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Camara10.png" alt="Camara 10" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Minolta Pro shot - Cámara Digital</h2>
            </Link>
            <p>HD de 20 megapíxeles con zoom óptico de 67X, video HD completo de 1080P y tarjeta SD de 16 GB, color negro...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.0)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/CamaraIns11.png" alt="CamaraIns 11" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Minolta Instapix 2 en 1 cámara digital </h2>
            </Link>
            <p>cámara digital de impresión instantánea e impresora Bluetooth, gris...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.1)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Tripode12.png" alt="Tripode 12" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Trípode para cámara, trípode de 72 pulgadas para soporte de cámara</h2>
            </Link>
            <p>trípode de aluminio resistente para video foto, trípode de cámara de viaje 5 en 1 y monopié compatible con cámaras Canon Nikon DSLR...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.7)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/EstudioFoto13.png" alt="EstudioFoto 13" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Estudio fotográfico LED </h2>
            </Link>
            <p>31 pulgadas en una caja con fondos de 4 colores de calidad profesional...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(3.8)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Paraguas14.png" alt="Paraguas 14" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Paraguas de iluminación para fotografía</h2>
            </Link>
            <p>9.69 pulgadas/19.7 in, para estudio fotográfico, paraguas translúcido, paraguas blanco suave para fotografia, retrato, estudio de fotografía, luz...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.5)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Filtros15.png" alt="Filtros 15" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Selens 20 filtros de gel de color</h2>
            </Link>
            <p>Filtros para efecto de iluminación, kit de corrección de color de fotografía de 10 x 10 pulgadas para estudio de video fotográfico, 20 colores surtidos...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.7)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Adaptador16.png" alt="Adaptador 16" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>VideoSecu Adaptador de fuente de alimentación</h2>
            </Link>
            <p>CCTV de 12V DC con 4 (0.083 in) conectores de canal Puerto 1I0...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(3.7)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Limpiador17.png" alt="Limpiador 17" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Juego de limpiador de polvo 3 en 1</h2>
            </Link>
            <p>lente pluma traje pluma cepillo soplador de aire limpieza kits para cámara DSLR...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.5)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Cubiertas18.png" alt="Cubiertas 18" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Think Tank Cubiertas de lluvia para camaras</h2>
            </Link>
            <p>Cubiertas de emergencia para cámaras DSLR y sin espejo con lente de hasta 2.756-7.874 in - Mediana..</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.2)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Bolsa19.png" alt="Bolsa 19" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Bolsa AlturaPhoto</h2>
            </Link>
            <p>BOLSAS DE CÁMARA LIGERAS Y COMPACTAS PARA CÁMARAS DSLR: Dimensiones exteriores: 9,5 x 5,5 x 6,5 pulgadas. Dimensiones interiores: 7.5 x 4.5 x 5.5 pulgadas. Sostiene y protege 1 cámara, 1-2 lentes o accesorio pequeño....</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.5)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Papel20.png" alt="Papel 20" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Fujifilm 8x10" Fujicolor Crystal Archive</h2>
            </Link>
            <p> Papel de ampliación brillante tipo II, 100 hojas...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.7)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Lente21.png" alt="Lente 21" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Lente Photo</h2>
            </Link>
            <p> Lente gran angular + macro para Canon Rebel EOS T1 T2 T3 T4 T5 T6 SL1 SL2 SL3 XSI XTI T7 T3I T5I T4I 7D 80D + paño de microfibra OPTURA...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.7)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Lente22.png" alt="Lente 22" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Opteka Lente </h2>
            </Link>
            <p> teleobjetivo zoom de 16.535-31.496 in (con 2x- 33.071-62.992 in) f/8.3 HD para Canon EF-Mount 90D, 80D, 77D, 70D, 60D, 50D, 7D, 6D, 5D, T8i, T7i, T7s, T7, T6s, T6i, T6, T5i, T5, T4i, T3...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(3.9)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Impresora23.png" alt="Impresora 23" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Canon SELPHY CP900</h2>
            </Link>
            <p>Impresora inalámbricas le permiten imprimir directamente desde su computadora, dispositivos iOS y Android...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.5)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Impresora24.png" alt="Impresora 24" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>KODAK Impresora para fotografias</h2>
            </Link>
            <p> Impresora fotográfica instantánea Dock Plus 4PASS (4 x 6 pulgadas) + paquete de 90 hojas (10 hojas iniciales + paquete de 80 hojas)
            Visita la tienda de KODAK...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.2)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Carcasa25.png" alt="Carcasa 25" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Seafrogs Carcasa submarina para Canon</h2>
            </Link>
            <p>Diseño especial para Canon mark III y mark IV con lente EF 0.945-4.134 in f/4L, para asegurarse de que todos los botones de control estén disponibles...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(5.0)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Water26.png" alt="Water 26" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Waterproof Diving Housing Cover for OSMO ACTION4 Camera</h2>
            </Link>
            <p> Protector para camaras bajo el agua...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(3.0)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Telon27.png" alt="Telon 27" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Telón de fondo negro</h2>
            </Link>
            <p> de 10 x 8 pies para fotografía, tela de poliéster de alta densidad, cortina de fondo para fotos, pantalla plegable, sin costuras, para tomar retratos...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.5)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Flash28.png" alt="Flash 28" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Godox V1-S - Flash de cámara</h2>
            </Link>
            <p> cabeza redonda Speedlite para cámara Sony con Godox AK-R22 Cúpula de difusión plegable...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.0)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Flash29.png" alt="Flash 29" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2> MK-14EXT Macro TTL Ring Flash</h2>
            </Link>
            <p>Compatible con cámara Nikon, Más enfoque luz natural utiliza luz LED de alta calidad....</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(3.8)</span>
            </div>
          </div>
        </div>

        <div className="reseña-de-equipo-card">
          <img src="/assets/images/Camara30.png" alt="Camara 30" />
          <div className="reseña-de-equipo-content">
            <Link to="/ArticleDetail">
              <h2>Camara, Lente Canon</h2>
            </Link>
            <p>Cámara fotográfica EOS Rebel T7 con lentes de 18-55 mm, f/3.5-5.6 y EF 75-300 mm, juego de doble acercamiento...</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star-half" />
              <span>(4.7)</span>
            </div>
          </div>
        </div>

            </div>
          </div>
    
    
  );
}

export default ReseñasDeEquipo;