export interface User {
  firstName: string;
  lastName: string;
  emailId: string;
  username: string;
  password: string;
  isCurrentUser?: boolean;
}

export type Mode = 'new' | 'view' | 'edit';
