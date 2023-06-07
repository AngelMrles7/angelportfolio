interface Navigation {
  home: string;
  About: string;
  skills: string;
  projects: string;
  contact: string;
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
    "first-proyect": {
      title: string;
      description: string;
      btnLink: string;
    };
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

export interface Translation {
  navigation: Navigation;
  sections: Sections;
  formValidation: FormValidation;
}

export interface TranslationsInterface {
  es: Translation;
  en: Translation;
}
