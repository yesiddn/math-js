function calcularPromedio(list) {
  // SUMAR NÚMEROS DE UN ARRAY CON .reduce()
  const sumaLista = list.reduce((acc, cur) => acc + cur, 0);
  
  // SUMAR NÚMEROS DE UN ARRAY CON FOR
  // let sumaLista = 0;
  // for (let i = 0; i < list.length; i++) {
  //   sumaLista += list[i];
  // }

  const promedio = sumaLista / list.length;

  return promedio;
}