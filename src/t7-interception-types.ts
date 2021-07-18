
type UserType = { username: string }
type StudentType = { name: string, age: number }

type ProfileType = UserType & StudentType // { username: string, name: string, age: number }


let user4: UserType = { username: 'luis@galaxy.com' }

let student: StudentType = { name: 'Juan', age: 20 }

let profile: ProfileType = { username: 'luis@galaxy.com', name: 'juan', age: 20 }
