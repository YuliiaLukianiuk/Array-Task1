'use strict';

// 1. Напишите функцию, которая берет массив объектов и возвращает массив значений определенного поля:
// const chars = [
//   { 'name': 'tony', 'age': 20 },
//   { 'name': 'feel', 'age': 30 }
// ];

//  function pluck(arr, prop) {
//   return arr.map(el => el[prop]);
// }

// console.log(pluck(chars, 'name')); // ['tony', 'feel']


// 2. Напишите функцию неглубокого копирования массива, учитывая, что исходный массив может быть произвольной длины, 
// но не глубже массива в массиве

// const arr1 = [[1,2], [3,4]];
// const arr2 = aCopy(arr1);

// arr1.push([5,6]);
// console.log(arr1); // [[1,2], [3,4], [5,6]]
// console.log(arr2); // [[1,2], [3,4]]

// function aCopy(arr) {
//   let result =  arr.map(el => el)
//    return result
// }

// const arr1 = [['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']];
// const arr2 = aCopy(arr1);

// arr1.unshift(['z']);

// console.log(arr1); // [['z'], ['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]
// console.log(arr2); // [['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]

// 3. Напишите функцию, которая принимает на входе массив и число, обозначающее размер группы, на которые нужно 
// разделить исходный массив

// const arr1 = splitArray(['a', 'b', 'c', 'd', 'e', 'f'], 2);

// function splitArray(arr, num) {
//   var array = [];

//   while (arr.length){
//     array.push(arr.splice(0, num))
//   }
//   return array;
//   }

// console.log(arr1); // [['a', 'b'], ['c', 'd'], ['e', 'f']]

// 4. Напишите функцию, которая удалит из массива все "отрицательные" 
// типы данных (false, null, 0, "", undefined, NaN)

// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

// const arr1 = clearArray([1, 0, 2, false, '', 3]);

// function clearArray(arr){
//   return arr.filter((val) => val)
// }

// console.log(arr1); // [1, 2, 3]

// 5. Напишите функцию, которая конкатенирует исходный массив с другими массивами или примитивными значениями

// const arr1 = [1];
// const arr2 = concatArray(arr1, 2, [3], [[4]]);

//  function concatArray( ...arr) {
//   return arr.reduce((array, item) => array.concat(item), [])
//  }

// console.log(arr2); // [1, 2, 3, [4]] 
// console.log(arr1); // [1]

// 6. Напишите функцию, которая удалит указанное кол-во элементов с начала исходного массива.
//  Аргумент функции, который означает кол-во элементов, опциональный и равен 1 по умолчанию. 
// Если элементов меньше, чем указанное кол-во для удаления - вернуть пустой массив

// function rm(arr, count = 1) {
//   arr.splice(0, count);
//   return arr
// }

// console.log(rm([1, 2, 3])); // [2, 3]
 
// console.log(rm([1, 2, 3], 2)); // [3]
 
// console.log(rm([1, 2, 3], 5)); // []
 
// console.log(rm([1, 2, 3], 0)); // [1, 2, 3]

// 7. Аналогично заданию 6, только удаление с конца массива

// function rm(arr, count = 1) {
//   arr.splice(-1, count);

//   if (count > arr.length){
//     arr = [];
//   }
//   return arr
// }

// console.log(rm([1, 2, 3])); 
// console.log(rm([1, 2, 3], 2));
// console.log(rm([1, 2, 3], 5));
// console.log(rm([1, 2, 3], 0)); 

// 8. Написать функцию, которая принимает массив, символ для замены, с какой ячейки начинать заменять
//  и на какой остановиться. Если номера ячеек не заданы, то по умолчанию это начало и конец всего массива

// const arr1 = [1, 2, 3];

//  function replaceIn(arr, n, start=0, end = arr.length){
//      for (let i = start; i < end; i++) {
//         arr[i] = n; 
//     }
//     return arr
//    }
   
// replaceIn(arr1, 'a');
// console.log(arr1); // ['a', 'a', 'a']
 
// replaceIn(arr1, 2);
// console.log(arr1); // [2, 2, 2]
 
// const arr2 = [4, 6, 8, 10];
// replaceIn(arr2, '*', 1, 3);
// console.log(arr2); // [4, '*', '*', 10]

// 9. Напишите функцию, которая вернет массив со всеми элементами исходного массива, кроме последней ячейки

// const arr1 = [1,2,3,4];
// const arr2 = init(arr1);

// function init(arr){
//   return arr.slice(0,-1)
// }
// console.log(arr1); // [1,2,3]
// console.log(arr2); // [1,2,3]

// 10. Напишите функцию, которая вернет массив с всеми значениями, которые повторяются в исходном массиве

// const arr1 = [1,2,3,4,2,5,6,1,3];
// const arr2 = uni(arr1);

// function uni(arr) {
//   const saw = [];

//   return [
//     ...new Set(
//       arr.reduce((acc, item) => {
//         saw.some((elem) => elem === item) ? acc.push(item) : saw.push(item);
//         return acc;
//       }, [])
//     ),
//   ];
// }
// console.log(arr2); // [1,2,3]

// const arr1 = [1,2,3,4,2,5,6,1,3];
// const arr2 = uni(arr1);

//  function uni(arr) {
//     return  arr.filter((item, index) => arr.indexOf(item) !==index).sort();
//  }
// console.log(arr2); // [1,2,3]

// 11. Напишите функцию, которая вернет элемент из массива по указанному индексу. Но если индекс отрицательный,
//  то считаем с конца массива

// const arr = ['a', 'b', 'c', 'd'];

// function nfa(arr, index){
//   let res = ()=> index >= 0 ? arr[index]: arr.slice(index)[0]
//     return res()
// }

// console.log(nfa(arr, 1)); // 'b'
// console.log(nfa(arr, -2)); // 'c';

// 12. Напишите решение в одну строчку, которое считает сумму квадратных корней для всех чётных чисел внутри массива

// console.log([1, 4, 3, 0, 4, 5, 4].filter(el => el %2 == 0).reduce((n, m) => n + Math.sqrt(m), 0)
//   )  // 6

// 13. Напишите функцию, которая вернет массив с группированными элементами исходных массивов. 
// Логика группировки: первая группа состоит из всех первых элементов исходных массивов, 
// вторая группа - из вторых элементов и т.д.

// function group(arr1, arr2, arr3){
//   let test =[];
//   for (let i = 0; i < arr1.length; i++) {
//     test.push([arr1[i], arr2[i], arr3[i]]);
// }
//   return test
// }
// console.log(group(['a', 'b'], [1, 2], [true, false]));// [['a', 1, true], ['b', 2, false]]

// 14. Напишите функцию которая преобразует массив в строку через указанный разделитель

// const arr = ['a','b','c'];

// function implode(arr,n) {
//   return arr.join(n);
// }

// console.log(implode(arr, '-')); // 'a-b-c'
// 15. Напишите функцию которая преобразует массив из чисел в строку через указанный разделитель, 
// оставив только четные числа или не четные цифры, в зависимости от третьего аргумента (true - четные, false - нечетные)

// const arr = [1,2,3,4,5,6,7,8,9];

// function implode(arr, del, boolean){
//   let newArr = boolean ? arr.filter( el => el % 2 === 0) : arr.filter( el => el % 2 !== 0)
//   return newArr.join(del)
// }
// console.log(implode(arr, ':', true)); // '2:4:6:8'
// console.log(implode(arr, '*', false)); // '1*3*5*7*9'

// 16. Напишите функцию, которая найдет високосные года в указанном диапазоне дат
// function findYear(a, b) {
//   let result = [];
//   for (let i = a; i <= b; i++) {
//     ((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0) ? result.push(i) : null
//   }
//   return result
// }
// console.log(findYear(2000,2018)); // [2000,2004,2008,2012,2016]
// 17. Напишите функцию, которая перемешает массив в случайном порядке

// function rnd(arr) {
//   return arr.sort(() => (Math.random() - 0.5))
// }
// console.log(rnd([1,2,3,4,5,6])); // [6,1,5,4,3,2]

// 18. Напишите функцию, которая вернет разницу двух массивов (т.е. элементы, которых нет в исходных массивах)

// const arr1 = [1, 2, 'a'];
// const arr2 = [1, 2, 3, 4, 'b'];  

// function diff(arr1, arr2){
//   return arr1
//   .filter(x => arr2.indexOf(x) == -1)
//   .concat(arr2.filter(x => arr1.indexOf(x) == -1));
// }

// console.log(diff(arr1,arr2)) // [a,3,4,b]
// 19. Напишите функцию, которая сортирует массив по убыванию

// const arr = [3, 8, 7, 6, 5, -4, 3, 2, 1];

// function sort(arr){
//   return  arr.sort((a, b) => b - a);
// }

// console.log(sort(arr)); // [-4,1,2,3,3,5,6,7,8]
// 20. Напишите функцию, которая вернет самый частый элемент массива

// const arr = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];

// function fn(array) {
//   return array.sort((a,b) =>
//       array.filter(v => v===a).length
//       - array.filter(v => v===b).length
//   ).pop();
// }

// console.log(fn(arr)); // 'z'