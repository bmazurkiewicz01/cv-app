export interface Card {
  id: string;
  title: string;
  icon: JSX.Element;
}

export interface FormData {
  personalInfo: {
    firstName: string;
    lastName: string;
    role: string;
    address: string;
    email: string;
    github: string;
    linkedin: string;
    phone: string;
  };
  experience: {
    role: string;
    company: string;
    city: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    degree: string;
    title: string;
    school: string;
    city: string;
    startDate: string;
    endDate: string;
  }[];
  skills: string[];
  summary: string;
  languages: {
    language: string;
    level: string;
  }[];
  hobbies: string[];
  cvClause: string;
}
