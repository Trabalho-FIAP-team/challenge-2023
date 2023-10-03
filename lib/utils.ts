import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getNameInitials(name: string) {
  const nameArray = name.split(' ');
  const firstNameInitial = nameArray[0].charAt(0).toUpperCase();
  const lastNameInitial = nameArray[1].charAt(0).toUpperCase();
  return `${firstNameInitial}${lastNameInitial}`;
}

