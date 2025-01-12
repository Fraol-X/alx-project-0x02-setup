export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}
export interface PostProps {
  id: number;
  title: string;
  content: string;
  body: string;
  userId: number;
}
export interface UserProps {
  name: string;
  email: string;
  address: string;
}