export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
}