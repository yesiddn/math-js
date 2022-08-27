// SUPERCLASE
// class PlatziMath {
//   static promedio() {}
//   static ordenarLista() {}
//   static isArrayPar() { }
//   static calcularMediana() {}
// }

const PlatziMath = {};

// PROMEDIO
PlatziMath.promedio = function calcularPromedio(list) {
  const sumaLista = list.reduce((acc, cur) => acc + cur, 0);

  const promedio = sumaLista / list.length;

  return promedio;
};

// MEDIANA
PlatziMath.ordenarLista = function ordenarLista(list) {
  return list.sort((a, b) => a - b);
};

PlatziMath.isArrayPar = function isArrayPar(array) {
  return array.length % 2 === 0;
};

PlatziMath.calcularMediana = function calcularMediana(list) {
  const listaOrdenada = PlatziMath.ordenarLista(list);

  if (PlatziMath.isArrayPar(listaOrdenada)) {
    const indexMitad1Lista = listaOrdenada.length / 2 - 1;
    const indexMitad2Lista = listaOrdenada.length / 2;

    return (
      (listaOrdenada[indexMitad1Lista] + listaOrdenada[indexMitad2Lista]) / 2
    );
  } else {
    const indexMitadLista = Math.floor(listaOrdenada.length / 2);
    return listaOrdenada[indexMitadLista];
  }
};

// MODA
PlatziMath.listRepeatedElements = function listRepeatedElements(list) {
  const listCount = {};

  list.forEach((element) => {
    listCount[element] = (listCount[element] || 0) + 1;
  });

  return listCount;
};

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(arr) {
  return arr.sort((a, b) => a[1] - b[1]);
};

PlatziMath.calcularModa = function calcularModa(list) {
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
};

// MEDIA ARMONICA
PlatziMath.calcularInversaDeDatos = function calcularInversaDeDatos(list) {
  const listaInversa = [];

  list.map((item) => listaInversa.push(1 / item));

  return listaInversa;
};

PlatziMath.sumarDatosListaInversa = function sumarDatosListaInversa(
  listaInversa
) {
  let sumaDatos;

  sumaDatos = listaInversa.reduce((a, b) => a + b, 0);

  return sumaDatos;
};

PlatziMath.calcularMediaArmonica = function calcularMediaArmonica(list) {
  if (list.includes(0)) {
    return 'Number must be different than 0';
  }

  const listaInversa = calcularInversaDeDatos(list);
  const sumaDatos = sumarDatosListaInversa(listaInversa);
  const mediaArmonica = list.length / sumaDatos;

  return mediaArmonica;
};
