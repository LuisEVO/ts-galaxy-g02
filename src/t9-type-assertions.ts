

const response = "{\"name\":\"Luis\"}";

type UserResponse = { name: string, age: number }

const user: UserResponse = JSON.parse(response) as UserResponse;

// Forma 1
const input = document.getElementById('#id_input') as HTMLInputElement;

// Forma 2
const input2 = <HTMLInputElement>document.getElementById('#id_input');
