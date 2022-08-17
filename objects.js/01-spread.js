// Операция spread (распыление)
// Array.prototype.concat() и аналог через spread

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// const numbers = [0, 5, 10, ...[1, 2, 3], 4, 5];
// const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];
// console.log(numbers);

// Поиск самой маленькой или большой температуры (числа)

// const temps = [18, 14, 12, 21, 17, 29, 24];
// const minTemp = [Math.min(...temps)];
// console.log(minTemp);
// console.log(Math.max(...temps));

// Сшиваем несколько массивов в один через concat() и spread

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = lastWeekTemps.concat(currentTemps, nextWeekTemps);

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

// Распыление обьектов
// Object.prototype.assign() и spread

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);

// const c = { ...a, ...b };

// console.log(c);

// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];

const keys = Object.keys(apartment);
console.log(keys);
const object = Object.values(obj);
