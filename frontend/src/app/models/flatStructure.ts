import { UserStructure } from './userStructures';

export interface FlatStructure {
  id: number;
  code: string;
  name: string;
  users: UserStructure[];
}
