import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './ArticleList.css';

const contests = [
  {
    title: "DETALLES DEL CONCURSO DE RETRATO",
    image: "/Assets-2/imagenes/article1.png",
    description: "Concurso Fotográfico de retrato ",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO DE PAISAJES",
    image: "/Assets-2/imagenes/article2.png",
    description: "Concurso Fotográfico de Paisajes",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO DE  NATURALEZA",
    image: "/Assets-2/imagenes/article3.png",
    description: "Concurso Fotográfico de Naturaleza",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO DE VIDA URBANA ",
    image: "/Assets-2/imagenes/article4.png",
    description: "Concurso Fotográfico de vida urbana",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO DE ANTIGUEDAD",
    image: "/Assets-2/imagenes/article5.png",
    description: "Concurso Fotográfico de Antiguedad ",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO DE BLANCO Y NEGRO",
    image: "/Assets-2/imagenes/article6.png",
    description: "Concurso Fotográfico de a Blanco y Negro",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO DE MACRO",
    image: "/Assets-2/imagenes/article7.png",
    description: "Concurso Fotográfico de Macro",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO DE VIAJES",
    image: "/Assets-2/imagenes/article8.png",
    description: "Concurso Fotográfico de Viajes",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO DE ENFOCANDO MOMENTOS ",
    image: "/Assets-2/imagenes/article9.png",
    description: "Concurso Fotográfico de Enfocando Momentos",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO CAPTURAS BRILLANTES",
    image: "/Assets-2/imagenes/article10.png",
    description: "Concurso Fotográfico de Capturas Brillantes",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO DE LENTES MAGICOS",
    image: "/Assets-2/imagenes/article11.png",
    description: "Concurso Fotográfico de Lentes Magicos",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO DE MIRADAS INSPIRADORAS",
    image: "/Assets-2/imagenes/article12.png",
    description: "Concurso Fotográfico de Miradas Inspiradoras",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO DE INSTATANEAS ETERNAS",
    image: "/Assets-2/imagenes/article13.png",
    description: "Concurso Fotográfico de Instataneas Eternas",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO PERPECTIVAS INFINITAS",
    image: "/Assets-2/imagenes/article14.png",
    description: "Concurso Fotográfico de Perpectivas infinitas",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO LUCES Y SOMBRAS",
    image: "/Assets-2/imagenes/article15.png",
    description: "Concurso Fotográfico de Luces y Sombra",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO DE HISTORIA E IMAGEN",
    image: "/Assets-2/imagenes/article16.png",
    description: "Concurso Fotográfico de Historia e Imagen",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO DE OBJETIVOS ARTISTICOS",
    image: "/Assets-2/imagenes/article17.png",
    description: "Concurso Fotográfico de Objetivo Artistico",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO DE ARQUITECTURA",
    image: "/Assets-2/imagenes/article18.png",
    description: "Concurso Fotográfico de Arquitectura",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO MURALES CALLEGEROS",
    image: "/Assets-2/imagenes/article19.png",
    description: "Concurso Fotográfico de Murales Callegeros ",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },
  {
    title: "DETALLES DEL CONCURSO OCEANICAS",
    image: "/Assets-2/imagenes/article20.png",
    description: "Concurso Fotográfico de Oceanicas ",
    objective: "El presente concurso busca reconocer y premiar la creatividad de fotógrafos aficionados y profesionales que, a través de sus retratos, capten la esencia de la vida urbana y la diversidad de sus habitantes.",
    participants: "Podrán participar todos los fotógrafos mayores de 18 años residentes en Francisco Morazán.",
    theme: "Las fotografías deberán ser retratos realizados íntegramente con teléfonos móviles, capturando momentos y expresiones de personas en entornos urbanos.",
    registration: "La inscripción será gratuita y se realizará a través de nuestro sitio web. desde el 08 de agosto hasta el 08 de septiembre del 2024.",
    prizes: "Primer lugar 5000 lps, segundo lugar 3000 lps, tercer lugar 1000 lps."
  },


  
];

const App = () => {
  return (
    <div className="contenedor">
      {contests.map((contest, index) => (
        <div className="tarjeta" key={index}>
          <h1>{contest.title}</h1>
          <img src={contest.image} alt="Retrato" className="imagen" />
          <p><strong>{contest.description}</strong></p>
          <p><strong>Objetivo:</strong> {contest.objective}</p>
          <p><strong>Participantes:</strong> {contest.participants}</p>
          <p><strong>Temática:</strong> {contest.theme}</p>
          <p><strong>Inscripción:</strong> {contest.registration}</p>
          <p><strong>Premios:</strong> {contest.prizes}</p>
        </div>
      ))}
    </div>
  );
};

export default App;