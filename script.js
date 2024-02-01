let array1 = Array.from({length: 10}, (_, i) => i + 1);
array1.splice(0, 3);
console.log(array1);

let array2 = Array.from({length: 7}, () => "hello");
console.log(array2);

let array3 = Array.from({length: 6}, (_, i) => i + 1);
array3.sort((a, b) => b - a);
console.log(array3);

let array4 = Array.from({length: 4}, (_, i) => i + 1);
let index = array4.indexOf(3);
console.log(index);

let array5 = Array.from({length: 8}, (_, i) => i + 1);
array5.splice(2, array5.length - 2);
console.log(array5);

let array6 = Array.from({length: 9}, (_, i) => i + 1);
array6.splice(3, 0, "world");
console.log(array6);

let array7 = Array.from({length: 12}, (_, i) => i + 1);
let sum = array7.reduce((a, b) => a + b, 0);
console.log(sum);

let array8 = Array.from({length: 11}, (_, i) => i + 1);
let average = array8.reduce((a, b) => a + b, 0) / array8.length;
console.log(average);

let array9 = Array.from({length: 6}, (_, i) => i + 1);
let max = Math.max(...array9);
console.log(max);

let array10 = Array.from({length: 5}, (_, i) => i + 1);
let min = Math.min(...array10);
console.log(min);

let array11 = Array.from({length: 7}, (_, i) => i + 1);
let countMoreThan5 = array11.filter(x => x > 5).length;
console.log(countMoreThan5);

let array12 = Array.from({length: 10}, (_, i) => i + 1);
let countLessThan10 = array12.filter(x => x < 10).length;
console.log(countLessThan10);

let array13 = Array.from({length: 8}, (_, i) => i + 1);
let array14 = Array.from({length: 4}, (_, i) => i + 9);
let mergedArray = [...array13, ...array14];
console.log(mergedArray);

let array15 = Array.from({length: 6}, (_, i) => i + 1);
let filteredArray = array15.filter(x => x > 3);
console.log(filteredArray);