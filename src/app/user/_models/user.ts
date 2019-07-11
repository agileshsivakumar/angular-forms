export interface User {
  firstName: string;
  lastName: string;
  emailId: string;
  phoneNumber: string;
  username: string;
  password: string;
  role?: Role;
  isCurrentUser?: boolean;
}

export type Role = 'admin' | 'user' | 'readonly';
