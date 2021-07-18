let person2: { name: string, lastname: string, age: number } = { name: 'Luis', lastname: '', age: 0 }  


// modificadores de propiedades

// propiedades opcionales "?:"
// propiedades solo lectura "readonly <NOMBRE DE LA PROPIEDAD>"

let person3: { readonly name: string, lastname?: string, age: number } = { name: 'Luis', age: 0 }  

console.log(person2.name);