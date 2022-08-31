// ANÁLISIS PERSONAL PARA JUANITA
function findPerson(personaEnBusqueda) {
  return salarios.find(persona => persona.name === personaEnBusqueda);
}

function historialSalarial(nombrePersona) {
  const trabajos = findPerson(nombrePersona).trabajos;
  const salarios = trabajos.map((trabajo) => trabajo.salario);

  return salarios;
}

// Mediana de salarios de todos los trabajos
function medianaSalarialPersonal(nombrePersona) {
  const salarios = historialSalarial(nombrePersona);

  const medianaSalarial = PlatziMath.calcularMediana(salarios);

  console.log(medianaSalarial);
}

// Proyección salarial del siguiente año
function porcentajeCrecimientoSalarial(salarios) {
  const porcentajes = [];

  for (let i = 0; i < salarios.length - 1; i++) {
    const salarioActual = salarios[i + 1];
    const salarioAnterior = salarios[i];

    const crecimiento = salarioActual - salarioAnterior;
    const porcentaje = crecimiento / salarioAnterior;

    porcentajes.push(porcentaje);
  }

  return porcentajes;
}

function proyeccionSalarialPersonal(nombrePersona) {
  const salarios = historialSalarial(nombrePersona);

  const porcentajeCrecimiento = porcentajeCrecimientoSalarial(salarios);

  const medianaPorcentajes = PlatziMath.calcularMediana(porcentajeCrecimiento);

  const proyeccion = salarios[salarios.length - 1] * (1 + medianaPorcentajes);

  return proyeccion;
}