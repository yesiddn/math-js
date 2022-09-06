function findPerson(personaEnBusqueda) {
  return salarios.find((persona) => persona.name === personaEnBusqueda);
}

function historialSalarialPersonal(nombrePersona) {
  const trabajos = findPerson(nombrePersona).trabajos;
  const salarios = trabajos.map((trabajo) => trabajo.salario);

  return salarios;
}

// Devuelve un array con el porcentaje de crecimiento de cada salario anual
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

// Devuelve un objeto con el historial salarial de una empresa en años
function historialSalarialEmpresarial(nameEmpresa) {
  // const empresas = {};

  /*
  empresas = {
    empresa: {
      year: [salarios...]
    }
  } 
*/
  const empresa = {};

  /*
  empresa = {
    year: [salarios]
  };
*/

  // EMPRESA EN ESPECIFICO
  salarios.forEach((persona) => {
    persona.trabajos.forEach((trabajo) => {
      if (trabajo.empresa === nameEmpresa) {
        if (!empresa[trabajo.year]) {
          empresa[trabajo.year] = [];
        }

        empresa[trabajo.year].push(trabajo.salario);
      }
    });
  });

  if (Object.entries(empresa).length === 0) {
    return false;
  }

  // EMPRESAS EN GENERAL
  // salarios.forEach((persona) => {
  //   persona.trabajos.forEach((trabajo) => {
  //     if (!empresas[trabajo.empresa]) {
  //       empresas[trabajo.empresa] = {};
  //     }

  //     if (!empresas[trabajo.empresa][trabajo.year]) {
  //       empresas[trabajo.empresa][trabajo.year] = [];
  //     }

  //     empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  //   });
  // });

  return empresa;
}

// Mediana de salarios de todos los trabajos
function medianaSalarialPersonal(nombrePersona) {
  const salarios = historialSalarialPersonal(nombrePersona);

  const medianaSalarial = PlatziMath.calcularMediana(salarios);

  console.log(medianaSalarial);
}

// Proyección salarial del siguiente año
function proyeccionSalarialPersonal(nombrePersona) {
  const salarios = historialSalarialPersonal(nombrePersona);

  const porcentajeCrecimiento = porcentajeCrecimientoSalarial(salarios);

  const medianaPorcentajes = PlatziMath.calcularMediana(porcentajeCrecimiento);

  const proyeccion = salarios[salarios.length - 1] * (1 + medianaPorcentajes);

  return proyeccion;
}

// ANÁLISIS SALARIAL POR EMPRESA
function medianaSalarialEmpresarialPorYear(nameEmpresa, year) {
  const empresa = historialSalarialEmpresarial(nameEmpresa);

  if (!empresa) {
    return `No existe la empresa ${nameEmpresa}`;
  }

  if (!empresa[year]) {
    return `No exite el año: ${year}`;
  }

  const medianaSalarial = PlatziMath.calcularMediana(empresa[year]);

  return medianaSalarial;
}

// Proyección del salario minimo emprpesarial del siguiente año
function proyeccionSalarialMinimaEmpresarial(nameEmpresa) {
  const empresa = historialSalarialEmpresarial(nameEmpresa);
  const salarios = [];
  const porcentajeCrecimientoInicial = 0.1;

  if (!empresa) {
    return `No existe la empresa ${nameEmpresa}`;
  }

  for (const year in empresa) {
    salarios.push(empresa[year][0]);
  }

  const porcentajeCrecimiento = porcentajeCrecimientoSalarial(salarios);

  const medianaPorcentajes = PlatziMath.calcularMediana(porcentajeCrecimiento);

  if (medianaPorcentajes === 0) {
    const proyeccion = salarios[salarios.length - 1] * (1 + porcentajeCrecimientoInicial);

    return proyeccion;
  }

  const proyeccion = salarios[salarios.length - 1] * (1 + medianaPorcentajes);

  return proyeccion;
}
