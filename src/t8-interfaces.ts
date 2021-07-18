
interface UserInterface {
  username: string
}

interface StudentInterface {
  name: string;
  age: number;
}

type ProfileType2 = UserInterface & StudentInterface // { username: string, name: string, age: number }


let user5: UserInterface = { username: 'luis@galaxy.com' }

let student2: StudentInterface = { name: 'Juan', age: 20 }

let profile2: ProfileType2 = { username: 'luis@galaxy.com', name: 'juan', age: 20 }
