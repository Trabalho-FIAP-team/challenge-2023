import { Url } from "next/dist/shared/lib/router/router";

export interface Game {
  gameTitle: string; 
  description: string; 
  gameId: string;
}

export interface Event {
  eventTitle: string;
  imagem: string;
  imagemEvent: string;
  eventAuthor: string;
  eventData: string;
  eventText: string;
  eventId: string;
}

export interface teamMember {
  name: string;
  memberRm: string;
  description: string;
  image: string;
  github: string;
  instagram?: string;
}
