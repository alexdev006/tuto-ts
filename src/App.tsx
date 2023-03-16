import { FC, createContext } from 'react';
import './App.css';
import { Person } from './Components/Person.js';
import { HairColor } from './Enums.js';

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  // const name: string = 'Alex';
  // const age: number = 42;
  // const isMarried: boolean = true;

  //bien type le retour de la fonction ici number
  // const getName = (name: string): number => {
  //   return 20;
  // };

  //ex avec void quand pas de retour à la fonction
  // const getName2 = (name: string): void => {
  // if (name === 'Alex') {
  //   return 43;
  // } else {
  //   return 0;
  // }
  // };

  const contextValue: AppContextInterface = {
    name: 'Alex',
    age: 42,
    country: 'France',
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        {/* {name}
      {age}
      {isMarried} */}
        <Person
          name="Alex"
          age={42}
          email="alexguidat@gmail.Com"
          hairColor={HairColor.Pink}
        />
      </div>
    </AppContext.Provider>
  );
};

export default App;
