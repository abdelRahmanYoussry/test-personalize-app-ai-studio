
export enum Screen {
  LANDING = 'LANDING',
  HOME = 'HOME',
  QUIZ = 'QUIZ',
  NAME_ENTRY = 'NAME_ENTRY',
  RESULT = 'RESULT',
  HISTORY = 'HISTORY'
}

export interface QuizOption {
  id: string;
  text: string;
  icon: string;
}

export interface Question {
  id: number;
  text: string;
  scenario: string;
  imageUrl: string;
  options: QuizOption[];
}

export interface Persona {
  name: string;
  title: string;
  traits: string[];
  description: string;
  imageUrl: string;
  youtubeId: string;
}

export interface QuizResult {
  userName: string;
  persona: Persona;
  timestamp: string;
}

export interface AIResponse {
  personaName: string;
  title: string;
  traits: string[];
  reasoning: string;
  youtubeId: string;
}
