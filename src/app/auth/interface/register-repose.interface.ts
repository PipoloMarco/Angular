import { User } from './user.interface';

export interface RegisterUser {
  user: User;
  token?: string;
  password: string;
}
