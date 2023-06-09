import { TranslationInterface } from "../interface/TranslationsInterface";

export const es: TranslationInterface = {
  navigation: {
    home: "Inicio",
    About: "Acerca",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",
  },
  sections: {
    home: {
      title: {
        hello: "Hola!",
        name: "Soy Angel Morales",
        position: "Desarrollador Web",
        btnText: "Descargar",
      },
    },
    about: {
      title: "Acerca de mi",
      information:
        "¡Hola!  Mi nombre es Angel Morales, tengo 22 años. Soy tecnólogo en análisis y desarrollo de sistemas de información, enfocado en el desarrollo Front-end, aunque también poseo conocimientos en el ámbito del back-end. \n\nMe caracterizo por ser una persona organizada y responsable, disfruto trabajar en equipo para lograr resultados sobresalientes. Mi actitud colaborativa me permite aportar ideas frescas y creativas, fomentando un ambiente de trabajo positivo y productivo. Además, soy un solucionador de problemas y un aprendiz continuo, siempre busco superar mis propios límites, me encanta enfrentarme a retos. \n\nMe entusiasma encontrar nuevas oportunidades que me permitan crecer tanto personal como profesionalmente.",
      subtitle: "Mis hobbies",
    },
    skills: {
      title: "Mis Habilidades",
      technicalTitle: "Habilidades Tecnicas",
      softTitle: "Habilidades Blandas",
    },
    projects: {
      title: "Proyectos",
      // Projects
    },
    contact: {
      title: "Contáctame",
    },
  },
  formValidation: {
    name: {
      requerid: "El campo nombre es requerido.",
      invalid: "El campo es invalido",
    },
    email: {
      requerid: "El campo email es requerido.",
      invalid: "El email ingresado es invalido",
    },
    message: {
      requerid: "Por favor escribe un mensaje.",
      invalid: "El mensaje supera los 255 caracteres",
    },
  },
};
