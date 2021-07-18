class Settings {
  lang: string;
  private background: string;

  constructor(lang: string) {
    this.lang = lang;
    this.background = 'white';
  }
}

const setting = new Settings('es');

interface AnimalInterface {
  type: string;
  age: number;
}

class Animal implements AnimalInterface {
  type = '';
  age = 0;
  constructor(protected name: string) { }

  get info() {
    return `${this.name } ${this.age}`;
  }

  set info(info: string) {
    this.name = info.split('-')[0];
    this.age = +info.split('-')[1];
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

}

class Perro extends Animal  {
  constructor(public raza: string) {
    super('perro')
  }
}

const animal = new Animal('perro');
const perro = new Perro('pequines');

perro.info;
perro.info = 'perro-2'