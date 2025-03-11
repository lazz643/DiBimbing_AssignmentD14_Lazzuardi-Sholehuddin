"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var getFullName = function (name) {
    return "".concat(name.firstName, " ").concat(name.lastName);
};
console.log(getFullName({ firstName: "Lazzuardi", lastName: "Sholehuddin" }));
//soal 2
var wrapInArray = function (array) {
    return [array];
};
console.log(wrapInArray(1));
console.log(wrapInArray("Hai"));
console.log(wrapInArray({ name: "Lazz" }));
