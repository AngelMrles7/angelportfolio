import { TranslationInterface } from "../interface/TranslationsInterface";

export const en: TranslationInterface = {
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
        "Hello! My name is Angel Morales, I'm 22 years old. I am a technologist in analysis and development of information systems, focused on Front-end development, although I also have knowledge in the field of back-end. \n\nI am characterized by being an organized and responsible person, I enjoy working in a team to achieve outstanding results. My collaborative attitude allows me to bring fresh and creative ideas, fostering a positive and productive work environment. In addition, I am a problem solver and a continuous learner, always looking to push my own limits, I love to face challenges. \n\nI am excited to find new opportunities that allow me to grow both personally and professionally.",
      subtitle: "My hobbies",
    },

    skills: {
      title: "My Skills",
      technicalTitle: "Technical skills",
      softTitle: "Soft skills",
    },
    projects: {
      title: "Projects",
      firstProject: {
        title: "Acerca de mi",
        description: "Projects",
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
          "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_640.jpg",
        projectLink:
          "https://images.pexels.com/photos/15372904/pexels-photo-15372904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        linkText: "See code",
      },
      thirdProject: {
        title: "E-commerce",
        description:
          "Este proyecto fue elavorado utilizando las html, css, react y Laravel.",
        imgLink:
          "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
        projectLink:
          "https://images.pexels.com/photos/15372904/pexels-photo-15372904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        linkText: "See code",
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
};
