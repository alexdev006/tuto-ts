import { HairColor } from '../Enums.js';

export interface User {
  name: string;
  age: number;
  //on rajoute un "?" si on veut que la valeur soit optionnelle
  email?: string;
  //pour passer les fonctions:
  //getName: (name:string)=>string;
  hairColor: HairColor;
}
