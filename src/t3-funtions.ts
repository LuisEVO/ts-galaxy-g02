
// tipo lista

let welcome: () => void;
let welcome2: (name: string) => void;
let welcome3: (name: string) => string;

welcome3 = (name: string): string => {
  return `Bienvenido ${name}`;
};

welcome3('Luis');



