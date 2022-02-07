"use strict";
// Работа с concat (Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
function arrConcat(arrA, arrB) {
  return arrA.concat(arrB);
}
// console.log(arrConcat(arr1, arr2));
// Работа с reverse (Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].)
const reverseArr = [1, 2, 3];
function funcReverseArray(arr) {
  return arr.reverse();
}
// console.log(funcReverseArray(reverseArr));
// Работа с push, unshift
// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const arr3 = [1, 2, 3];
function arrPushUnshift(arr) {
  arr.push(4, 5, 6);
  arr.unshift(4, 5, 6);
  return arr;
}
// console.log(arrPushUnshift(arr3));

// Работа с shift, pop
// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его .

const arrPopShift = ["js", "css", "jq"];

function funcArrPopShift(arr) {
  console.log(arr.shift());
  console.log(arr.pop());
  return arr;
}
// console.log(funcArrPopShift(arrPopShift));

// Работа с slice
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

const arrSlice = [1, 2, 3, 4, 5];
function funcArrSlice(arr, num1, num2) {
  return arr.slice(num1, num2);
}
// console.log(funcArrSlice(arrSlice, 0, 3));
// console.log(funcArrSlice(arrSlice, 3));

// Работа с splice
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

const arraySplice = [1, 2, 3, 4, 5];

// let newArray = arraySplice.splice(1, 2);
// let newArray1 = arraySplice.splice(1, 3);
// let newArray2 = arraySplice.splice(2, 0, 'a', 'b', 'c');
let newArray3 = arraySplice.splice(1, 0, "a", "b");
newArray3 = arraySplice.splice(arraySplice.length - 1, 0, "c");
newArray3 = arraySplice.splice(arraySplice.length, 0, "e");
// console.log(arraySplice);

// Работа с sort
//  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const arraySort = [3, 4, 1, 2, 7];
// console.log(arraySort.sort());

//Работа с forEach
// Дан массив со следующими объектами внутри:
// {firstName: ‘Test', lastName: 'Testovich', age: 42, gender: ‘male',},
// {firstName: ‘User', lastName: 'Userovich', age: 12, gender: ‘male',},
// {firstName: ‘Test`ya', lastName: 'Testovna', age: 16, gender: ‘female',},
// {firstName: ‘Logina', lastName: 'Consol`evna', age: 42, gender: ‘female',}
// Для каждого элемента выведите сообщение в консоль типа
// “Пользователь (имя) (фамилия) является (пол) и ему сейчас (возраст) лет”

const arrayObjectForEach = [
  { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
  { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
  { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
  { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
];

// const arrayForEach = arrayObjectForEach.forEach((arr) => {
//   console.log(
//     `Пользователь ${arr.firstName} ${arr.lastName} является ${arr.gender} и ему сейчас ${arr.age} лет`
//   );
// });

// Работа с map
//Дан массив со следующими объектами внутри:
// { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
// { firstName: "User", lastName: "Userovich", age: 12, gender: "male" }
// { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
// {firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',},
// Создайте новый массив на основании старого массива, добавив каждому
// пользователю в новом массиве свойство telephoneNumber которое может быть или строкой или числом (на ваше усмотрение).

const arrayObjectMap = [
  { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
  { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
  { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
  { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
];
const newArrayObjectMap = arrayObjectMap.map((item) => {
  const obj = {
    firstName: item.firstName,
    lastName: item.lastName,
    age: item.age,
    gender: item.gender,
    telephoneNumber: 123,
  };
  return obj;
});
