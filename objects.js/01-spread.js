// Операция spread (распыление)
// Array.prototype.concat() и аналог через spread

const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
console.log(numbers);

// Поиск самой маленькой или большой температуры (числа)

const temps = [18, 14, 12, 21, 17, 29, 24];

// Сшиваем несколько массивов в один через concat() и spread

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [];
// console.log(allTemps);

// Распыление обьектов
// Object.prototype.assign() и spread

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };
