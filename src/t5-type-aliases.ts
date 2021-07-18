type PersonType = {
  readonly name: string,
  lastname?: string,
  age: number
};

let person4: PersonType = { name: 'Luis', lastname: '', age: 0 };
let person5: PersonType = { name: 'Luis', age: 0 };
let person6: PersonType = { name: 'Luis', lastname: '', age: 0 };