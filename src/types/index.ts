export interface User {
  id: string;
  name: string;
  email: string;
  ageRange: string;
  location: string;
  role: string;
  startupStage: string;
  skills: string[];
  industries: string[];
  goals: string;
  lookingFor: string[];
  bio: string;
  linkedIn?: string;
  github?: string;
  portfolio?: string;
  verified: boolean;
  photo?: string;
  lastActive?: Date;
}

export interface Match {
  id: string;
  userId: string;
  user: User;
  matchedAt: Date;
  lastMessage?: Message;
  unreadCount: number;
}

export interface Message {
  id: string;
  matchId: string;
  senderId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface SwipeAction {
  userId: string;
  targetUserId: string;
  action: 'like' | 'pass';
  timestamp: Date;
}

export type Role = 'Co-Founder' | 'Developer' | 'Designer' | 'Marketer' | 'Mentor' | 'Investor';
export type StartupStage = 'Idea' | 'MVP' | 'Launched' | 'Scaling';
export type AgeRange = '18-24' | '25-34' | '35-44' | '45-54' | '55+';
