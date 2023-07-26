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
        "¡Hola! Mi nombre es Angel Morales, tengo 22 años. Tecnólogo en análisis y desarrollo de sistemas de información, enfocado en el desarrollo Front-end, poseo conocimientos en el ámbito del back-end. \n\nCaracterizado por ser una persona organizada y responsable, disfruto trabajar en equipo para lograr resultados sobresalientes. Mi actitud colaborativa me permite aportar ideas, fomentar un ambiente de trabajo positivo y productivo. Además, me gusta resolver problemas y aprender de forma continua, siempre buscando superar mis propios límites. \n\nMe entusiasma encontrar nuevas oportunidades que me permitan crecer tanto personal como profesionalmente.",
      subtitle: "Mis hobbies",
    },
    skills: {
      title: "Mis Habilidades",
      technicalTitle: "Habilidades Tecnicas",
      softTitle: "Habilidades Blandas",
    },
    projects: {
      title: "Proyectos",
      // Include the information of each project
      projectsInfo: [
        {
          title: "E-commerce",
          description:
            "Consiste en una plataforma de venta de productos tecnológicos en línea. \n\nLa página web fue desarrollada utilizando herramientas como HTML5,Bootstrap, JavaScript, Laravel y MySQL.",
          linkText: "Ver codigo",
        },
      ],
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
