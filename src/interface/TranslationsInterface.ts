interface Navigation {
  home: string;
  About: string;
  skills: string;
  projects: string;
  contact: string;
}

export interface ProjectInterface {
  title: string;
  imgLink: string;
  description: string;
  projectLink?: string;
  linkText?: string;
}

interface Sections {
  home: {
    title: {
      hello: string;
      name: string;
      position: string;
      btnText: string;
    };
  };
  about: {
    title: string;
    information: string;
    subtitle: string;
  };
  skills: {
    title: string;
    technicalTitle: string;
    softTitle: string;
  };
  projects: {
    title: string;
    firstProject: ProjectInterface;
    secondProject: ProjectInterface;
    thirdProject: ProjectInterface;
  };
  contact: {
    title: string;
  };
}

export interface FormValidation {
  name: {
    requerid: string;
    invalid?: string;
  };
  email: {
    requerid: string;
    invalid: string;
  };
  message: {
    requerid: string;
    invalid: string;
  };
}

export interface TranslationInterface {
  navigation: Navigation;
  sections: Sections;
  formValidation: FormValidation;
}
