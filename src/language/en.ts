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
      // Projects
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
