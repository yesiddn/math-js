function listRepeatedElements(list) {
  const listCount = {};

  list.forEach(element => {
    listCount[element] = (listCount[element] || 0) + 1;
  });

  return listCount;
}

function ordenarListaBidimensional(arr) {
  return arr.sort((a, b) => a[1] - b[1]);
}

// DE OBJETOS A ARRAYS
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// console.log(Object.keys(obj)); // ['a', 'b', 'c']
// console.log(Object.values(obj)); // [1, 2, 3]
// console.log(Object.entries(obj)); // [['a', 1], ['b', 2], ['c', 3]] -> ARRAY BIDIMENSIONAL

function calcularModa(list) {
  const listObject = listRepeatedElements(list);
  const listArray = Object.entries(listObject);
  const listOrdenada = ordenarListaBidimensional(listArray);
  const listMaxNumber = listOrdenada[listOrdenada.length - 1];
  const listMaxNumerBefore = listOrdenada[listOrdenada.length - 2];

  if (listMaxNumber[1] === listMaxNumerBefore[1]) {
    return 'No hay moda';
  } else {
    const moda = listMaxNumber[0];
    return moda;
  }
}