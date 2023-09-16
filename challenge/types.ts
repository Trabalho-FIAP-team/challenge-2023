import { Url } from "next/dist/shared/lib/router/router";

export interface Game {
  gameTitle: string; 
  description: string; 
  gameId: string;
}

export interface Event {
  eventTitle: string;
  thumb: string;
  eventImage: string;
  eventAuthor: string;
  eventData: string;
  eventText: string;
  eventId: string;
}

export interface TeamMember {
  name: string;
  memberRm: string;
  description: string;
  image: string;
  github: string;
  instagram?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  authorImage: string;
}