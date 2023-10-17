import { auth } from "@clerk/nextjs";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { prisma } from "./db";
import { User, UserRole } from "@prisma/client";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getNameInitials(name: string) {
  const nameArray = name.split(' ');
  const firstNameInitial = nameArray[0].charAt(0).toUpperCase();
  const lastNameInitial = nameArray[1].charAt(0).toUpperCase();
  return `${firstNameInitial}${lastNameInitial}`;
}
