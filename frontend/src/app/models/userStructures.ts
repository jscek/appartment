export interface UserStructure {
  id: number;
  email: string;
  name: string;
  avatar: string;
  score: number;
}

export interface EditUserStructure {
  name: string;
  avatar: string;
}
