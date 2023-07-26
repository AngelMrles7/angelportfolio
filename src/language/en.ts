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
        "Hello! My name is Angel Morales, I am 22 years old. Technologist in analysis and development of information systems, focused on Front-end development, I have knowledge in the field of back-end. \n\nCharacterized by being an organized and responsible person, I enjoy working in a team to achieve outstanding results. My collaborative attitude allows me to contribute ideas, foster a positive and productive work environment. In addition, I enjoy problem solving and continuous learning, always looking to push my own limits. \n\nI am excited to find new opportunities that allow me to grow both personally and professionally.",
      subtitle: "My hobbies",
    },

    skills: {
      title: "My Skills",
      technicalTitle: "Technical skills",
      softTitle: "Soft skills",
    },
    projects: {
      title: "Projects",
      // include the information of each project
      projectsInfo: [
        {
          title: "E-commerce",
          description:
            "It consists of a platform for selling technology products online. \n\nThe website was developed using tools such as HTML5, Bootstrap, JavaScript, Laravel and MySQL.",
          linkText: "See code",
        },
      ],
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
