function ordenarLista(list) {
  return list.sort((a, b) => a - b);
}

function isArrayPar(array) {
  return array.length % 2 === 0;
}

function calcularMediana(list) {
  const listaOrdenada = ordenarLista(list);

  if (isArrayPar(listaOrdenada)) {
    const indexMitad1Lista = (listaOrdenada.length / 2) - 1;
    const indexMitad2Lista = listaOrdenada.length / 2;

    return (listaOrdenada[indexMitad1Lista] + listaOrdenada[indexMitad2Lista]) / 2;
  } else {
    const indexMitadLista = Math.floor(listaOrdenada.length / 2);
    return listaOrdenada[indexMitadLista];
  }
}
