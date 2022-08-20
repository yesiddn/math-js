function calcularPromedio(list) {
  let sumaLista = 0;
  
  for (let i = 0; i < list.length; i++) {
    sumaLista += list[i];
  }

  const promedio = sumaLista / list.length;

  return promedio;
}