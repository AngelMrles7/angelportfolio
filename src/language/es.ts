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
      firstProject: {
        title: "E-commerce",
        description:
          "Este proyecto fue elavorado utilizando las html, css, react y Laravel.",
        imgLink:
          "https://images.pexels.com/photos/15372904/pexels-photo-15372904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        projectLink:
          "https://images.pexels.com/photos/15372904/pexels-photo-15372904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        linkText: "See code",
      },
      secondProject: {
        title: "E-commerce",
        description:
          "Este proyecto fue elavorado utilizando las html, css, react y Laravel.",
        imgLink:
          "https://images.pexels.com/photos/15372904/pexels-photo-15372904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        projectLink:
          "https://images.pexels.com/photos/15372904/pexels-photo-15372904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        linkText: "See code",
      },
      thirdProject: {
        title: "E-commerce",
        description:
          "Este proyecto fue elavorado utilizando las html, css, react y Laravel.",
        imgLink:
          "https://pixabay.com/link/?ua=cd3%3Dimage%26cd7%3Des%253Aprogramming%253ACOL%26ec%3Dapi_ad%26ea%3Dnavigate%26el%3Dgetty%26tid%3DUA-20223345-1%26dr%3Dhttps%253A%252F%252Fpixabay.com%252Fes%252Fimages%252Fsearch%252Fprograming%252F&sp=%2524%3Dadvertisement_clicked%26action%3Dnavigate%26ad_partner%3Dgetty%26ad_content%3Dapi_ad%26ad_type%3D%26media_type%3Dimage%26media_id%3D&next=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Ffemale-it-developer-at-workplace-gm1255905237-367553319%3Futm_source%3Dpixabay%26utm_medium%3Daffiliate%26utm_campaign%3DSRP_image_sponsored%26utm_content%3Dhttps%253A%252F%252Fpixabay.com%252Fes%252Fimages%252Fsearch%252Fprogramming%252F%26utm_term%3Dprogramming&hash=0711e7ec4b337e393acd4de3f8ce7927c1cfd0a5&=",
        projectLink:
          "https://images.pexels.com/photos/15372904/pexels-photo-15372904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        linkText: "See code",
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
};
