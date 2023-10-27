import React from "react";

export interface Game {
  gameTitle: string; 
  description: string; 
  gameId: string;
  emote: string
}

export interface Event {
  title: string;
  thumb: string;
  image: string;
  author: string;
  data: string;
  text: string;
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

export interface Notification {
  title: string;
  description: string;
  icon: JSX.Element;
}