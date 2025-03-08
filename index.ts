// const getAge = (birth: number): number => {
//   let now: number = new Date().getFullYear();

//   return now - birth;
// };

// console.log(getAge(2002));

// ********************************************************************************************************//

// FUNGSI
// cara 1 (manual)
const createUser = (data: { name: string; age: number; address: string }): { name: string; age: number; address: string } => {
  return data;
};
const newData: { name: string; age: number; address: string } = {
  name: "lazz",
  age: 22,
  address: "serang",
};
console.log(createUser(newData));

// ********************************************************************************************************//

// TYPE
// cara 2 (cara TYPE)
type Personal = {
  name: string;
  age: number;
  address: string;
};
const createUser2 = (user: Personal): Personal => {
  return user;
};
console.log(createUser2({ name: "lazz", age: 22, address: "serang" }));

// soal
type Error = {
  status: string;
  message: string;
};
const handleError = (): Error => {
  return {
    status: "error",
    message: "data is invalid",
  };
};
console.log(handleError());

// ********************************************************************************************************//

// generic types (param fungsi bisa nemrima tipe data apapun)
const getElement = <G>(array: G[]): G[] => {
  return array;
};
getElement<number>([1, 2, 3, 4]);
getElement<string>(["test", "test2"]);

export {};

// ada yg mirip sama penggunaan TYPE yaitu INTERFACE
