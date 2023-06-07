import { TranslationsInterface } from "../interface/TranslationsInterface";

export const translations: TranslationsInterface = {
  es: {
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
          "¡Hola! Soy Angel Morales, tengo 22 años, soy tecnólogo en análisis y desarrollo de sistemas de información, me enfoco en el desarrollo Front end  aunque tengo una gran curiosidad por explorar todas las facetas del stack tecnológico. \n\nCon una actitud organizada y responsable, disfruto trabajando en equipo para alcanzar resultados sobresalientes. Además, me gusta resolver problemas y aprender de forma continua, siempre buscando superar mis propios límites, me encanta enfrentar desafíos. \n\nEstoy entusiasmado por encontrar nuevas oportunidades que me permitan crecer tanto a nivel personal como profesional.",
        subtitle: "Mis hobbies",
      },
      skills: {
        title: "Mis Habilidades",
        technicalTitle: "Habilidades Tecnicas",
        softTitle: "Habilidades Blandas",
      },
      projects: {
        title: "Proyectos",
        "first-proyect": {
          title: "Repositorio",
          description: "",
          btnLink: "ver",
        },
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
  },
  en: {
    navigation: {
      home: "Home",
      About: "About",
      skills: "My skills",
      projects: "Projects",
      contact: "Contact",
    },

    sections: {
      home: {
        title: {
          hello: "Hello!",
          name: "I'm Angel Morales",
          position: "Web Developer",
          btnText: "Download",
        },
      },
      about: {
        title: "About Me",
        information:
          "Hi! I'm Angel Morales, I'm 22 years old. I'm a technologist in analysis and development of information systems, I focus on the Front end but I have a great curiosity to explore all facets of the technology stack. \n\nWith an organized and responsible attitude, I enjoy working in a team to achieve outstanding results. In addition, I like to solve problems and learn continuously, always looking to push my own limits, I love to face challenges. \n\nI am excited to find new opportunities that allow me to grow both personally and professionally. ",
        subtitle: "My hobbies",
      },

      skills: {
        title: "My Skills",
        technicalTitle: "Technical skills",
        softTitle: "Soft skills",
      },
      projects: {
        title: "Projects",
        "first-proyect": {
          title: "Acerca de mi",
          description: "",
          btnLink: "ver",
        },
      },
      contact: {
        title: "Contact me",
      },
    },
    formValidation: {
      name: {
        requerid: "The name field is required.",
      },
      email: {
        requerid: "The email field is required.",
        invalid: "The entered email is invalid",
      },
      message: {
        requerid: "Please write a message.",
        invalid: "The message exceeded 255 characters.",
      },
    },
  },
};
