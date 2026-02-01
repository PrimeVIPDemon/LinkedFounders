import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDistanceToNow(date: Date, options?: { addSuffix?: boolean }): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  
  if (seconds < 60) return options?.addSuffix ? 'just now' : '0m';
  if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return options?.addSuffix ? `${minutes}m ago` : `${minutes}m`;
  }
  if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return options?.addSuffix ? `${hours}h ago` : `${hours}h`;
  }
  const days = Math.floor(seconds / 86400);
  if (days < 7) return options?.addSuffix ? `${days}d ago` : `${days}d`;
  if (days < 30) {
    const weeks = Math.floor(days / 7);
    return options?.addSuffix ? `${weeks}w ago` : `${weeks}w`;
  }
  const months = Math.floor(days / 30);
  return options?.addSuffix ? `${months}mo ago` : `${months}mo`;
}
