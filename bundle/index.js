"use strict";
// let namaSaya: string = "Firman";
// let username: number = 123;
// let isDead: boolean = false;
// // let pacarSaya: number | string | boolean | [string, string, number];
// // pacarSaya = "wanjay";
// // pacarSaya = true;
// // pacarSaya = ["yani", "siti", 20];
// // array biasa
// let pacarSaya: string[];
// pacarSaya = ["siti", "nuryani"];
// //tuple array
// let selingkuhanSaya: [string, number, boolean];
// selingkuhanSaya = ["siti", 2, true];
// console.log({ namaSaya });
// console.log({ username });
// console.log({ isDead });
// console.log({ pacarSaya });
// console.log({ selingkuhanSaya });
//TIPE DATA CUSTOM
// type TemanType = {
//   nama: string;
//   isKampret: boolean;
//   hutang?: number;
// };
// let temanKita: TemanType;
// temanKita = {
//   nama: "farhan",
//   isKampret: true,
// };
// console.log({ temanKita });
//Function
// function nama(): string {
//   return "HelloWorld";
// }
// // or
// const age = (): number => {
//   return 23;
// };
// const hobby = (): void => {
//   return;
// };
// const result = nama();
// console.log(result);
// console.log(hobby());
// const add = (x: number, y: number): string => {
//   return `${x} ditambah ${y} hasilnya ${x + y}`;
// };
// const result = add(10, 20);
// console.log(result);
const user = (name, age, hobby) => {
    return `
  Halo, nama saya ${name},
  saat ini umur saya ${age} tahun,
  hobby saya sekarang yaitu ${hobby.toString()}
  `;
};
const result = user("Firman Subagja", 23, ["Ngoding", " main Game"]);
console.log(result);
// console.log(create());
