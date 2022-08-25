function calcularInversaDeDatos(list) {
  const listaInversa = [];

  list.map((item) => listaInversa.push(1 / item));

  return listaInversa;
}

function sumarDatosListaInversa(listaInversa) {
  let sumaDatos;

  sumaDatos = listaInversa.reduce((a, b) => a + b, 0);

  return sumaDatos;
}

function calcularMediaArmonica(list) {
  if (list.includes(0)) {
    return 'Number must be different than 0';    
  }
  
  const listaInversa = calcularInversaDeDatos(list);
  const sumaDatos = sumarDatosListaInversa(listaInversa);
  const mediaArmonica = list.length / sumaDatos;

  return mediaArmonica;
}
