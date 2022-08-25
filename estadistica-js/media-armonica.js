function calcularInversaDeDatos(list) {
  const listaInversa = [];

  list.map((item) => listaInversa.push(1 / item));

  return listaInversa;
}

function sumarDatosListaInversa(listaInversa) {
  let sumaDatos;

  sumaDatos = listaInversa.reduce((a, b) => a + b);

  return sumaDatos;
}

function calcularMediaArmonica(list) {
  const listaInversa = calcularInversaDeDatos(list);
  const sumaDatos = sumarDatosListaInversa(listaInversa);
  const mediaArmonica = list.length / sumaDatos;

  return mediaArmonica;
}