export interface TUser {
  email: string;
  password: string;
  role: 'admin';
}
export type TLoginUser = {
  email: string;
  password: string;
};
