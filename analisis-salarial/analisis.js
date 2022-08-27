// ANÁLISIS PERSONAL PARA JUANITA
function findPerson(personaEnBusqueda) {
  return salarios.find(persona => persona.name === personaEnBusqueda);
}

function medianaSalarialPersonal(nombrePersona) {
  const trabajos = findPerson(nombrePersona).trabajos;

  const salarios = trabajos.map(trabajo => trabajo.salario);

  const medianaSalarial = PlatziMath.calcularMediana(salarios);

  console.log(medianaSalarial);
}