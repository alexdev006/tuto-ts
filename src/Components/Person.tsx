import { FC, useState, ChangeEvent } from 'react';
import { User } from './Interfaces.js';

//pour accéder aux enum dans les props on les déclare avant et on ajoute EXPORT
// export enum HairColor {
//   Blonde = 'Your hair is blonde, good for you',
//   Brown = 'Cool hair color',
//   Pink = 'Wow that is so cool',
// }
// interface Props {
//   name: string;
//   age: number;
//   //on rajoute un "?" si on veut que la valeur soit optionnelle
//   email?: string;
//   //pour passer les fonctions:
//   //getName: (name:string)=>string;
//   hairColor: HairColor;
// }

// export const Person = (props: Props) => {
//   return (
//     <div>
//       <h1>{props.age}</h1>
//       <h1>{props.name}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   );

//destructuration des props
// export const Person = ({ name, age, email }: Props) => {
//   return (
//     <div>
//       <h1>{age}</h1>
//       <h1>{name}</h1>
//       <h1>{email}</h1>
//     </div>
//   );
// };

export const Person: FC<User> = ({ age, name, email, hairColor }) => {
  const [country, setCountry] = useState<string | null>(null);

  //   type NameType = 'Alex' | 'Toto' | 'jojo';
  //   const nameForType: NameType = 'Alex';

  const handleCountry = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };
  return (
    <div>
      <h1>{age}</h1>
      <h1>{name}</h1>
      <h1>{email}</h1>
      {/*  JSX=>>>>>  <input type="text" onChange={(e) => setCountry(e.target.value)} /> */}
      {/* marche en tsx sur une ligne de code sinon voir fonction plus haut <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCountry(e.target.value)
        }
      /> */}
      <input
        placeholder="Set your country..."
        type="text"
        onChange={handleCountry}
      />
      {country}
      <p>{hairColor}</p>
    </div>
  );
};
