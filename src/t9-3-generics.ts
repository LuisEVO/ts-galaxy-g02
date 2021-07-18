
interface Account {

}

interface Cart {
  products: string[]
}

type StringNull2 = string | null;
type NumberNull2 = number | null;
type BolleanNull2 = boolean | null;
type AccountNull2 = Account | null;


type OrNull<Type> = Type | null;


const account: OrNull<Account> = null;
const accountNumber: OrNull<number> = null;


const getData = <ReturnType>(nameStorage: string): ReturnType => {

  const stringData = localStorage.getItem(nameStorage) as string;

  return JSON.parse(stringData) as ReturnType;
}


const cart = getData<Cart>('carrito')

cart.products

