export interface User {
  firstName: string;
  lastName: string;
  emailId: string;
  phoneNumber: string;
  username: string;
  password: string;
  isCurrentUser?: boolean;
}

export type Mode = 'new' | 'view' | 'edit';
