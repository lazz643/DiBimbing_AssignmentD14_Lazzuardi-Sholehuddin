/*
Soal 1
  Buat sebuah fungsi bernama getFullName yang menerima parameter dengan tipe data Person. 
  Tipe Person ini adalah sebuah type alias yang memiliki properti firstName (string) dan lastName (string).
  Kembalikan hasil concatenasi dari firstName dan lastName, dipisahkan oleh spasi.
Soal 2
  Buat fungsi wrapInArray yang menggunakan generic type untuk mengubah input menjadi array. 
  Fungsi ini menerima satu parameter item dengan tipe T dan mengembalikan sebuah array berisi item tersebut.
  Gunakan generic type T untuk mendefinisikan tipe parameter input dan hasil return.
*/

// soal 1
type Person = {
  firstName: string;
  lastName: string;
};

const getFullName = (name: Person): string => {
  return `${name.firstName} ${name.lastName}`;
};

console.log(getFullName({ firstName: "Lazzuardi", lastName: "Sholehuddin" }));

//soal 2
const wrapInArray = <T>(array: T): T[] => {
  return [array];
};

console.log(wrapInArray<number>(1));
console.log(wrapInArray<string>("Hai"));
console.log(wrapInArray<{ name: string }>({ name: "Lazz" }));

export {};
