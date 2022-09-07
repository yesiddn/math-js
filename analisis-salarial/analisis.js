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
function historialSalarialByCompany(nameEmpresa) {
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

  return empresa;
}

// Devuelve un objeto con el historial salarial de las empresa en años
function historialSalarialEmpresarial() {
  const empresas = {};

  /*
  empresas = {
    empresa: {
      year: [salarios...]
    }
  } 
*/

  // EMPRESAS EN GENERAL
  salarios.forEach((persona) => {
    persona.trabajos.forEach((trabajo) => {
      if (!empresas[trabajo.empresa]) {
        empresas[trabajo.empresa] = {};
      }

      if (!empresas[trabajo.empresa][trabajo.year]) {
        empresas[trabajo.empresa][trabajo.year] = [];
      }

      empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    });
  });

  return empresas;
}

// Mediana de salarios de todos los trabajos
function medianaSalarialPersonal(nombrePersona) {
  const salarios = historialSalarialPersonal(nombrePersona);

  const medianaSalarial = PlatziMath.calcularMediana(salarios);

  return medianaSalarial;
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
function medianaSalarialEmpresarialYear(nameEmpresa, year) {
  const empresa = historialSalarialByCompany(nameEmpresa);

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
  const empresa = historialSalarialByCompany(nameEmpresa);
  const salarios = [];
  const porcentajeCrecimientoInicial = 0.1;

  if (!empresa) {
    return `No existe la empresa ${nameEmpresa}`;
  }

  for (const year in empresa) {
    const salariosYear = PlatziMath.ordenarLista(empresa[year]);
    salarios.push(salariosYear[0]);
  }

  const porcentajeCrecimiento = porcentajeCrecimientoSalarial(salarios);

  const medianaPorcentajes = PlatziMath.calcularMediana(porcentajeCrecimiento);

  if (medianaPorcentajes === 0) {
    const proyeccion =
      salarios[salarios.length - 1] * (1 + porcentajeCrecimientoInicial);

    return proyeccion;
  }

  const proyeccion = salarios[salarios.length - 1] * (1 + medianaPorcentajes);

  return proyeccion;
}

function proyeccionSalarialEmpresarial(nameEmpresa) {
  const empresas = historialSalarialEmpresarial();

  if (!empresas[nameEmpresa]) {
    return `No existe la empresa ${nameEmpresa}`;
  }

  const empresaYears = Object.keys(empresas[nameEmpresa]);
  const listaMedianaSalarialYears = empresaYears.map((year) => {
    return medianaSalarialEmpresarialYear(nameEmpresa, year);
  });

  const porcentajeCrecimiento = porcentajeCrecimientoSalarial(
    listaMedianaSalarialYears
  );
  const medianaPorcentajes = PlatziMath.calcularMediana(porcentajeCrecimiento);

  const ultimaMedinaSalarial =
    listaMedianaSalarialYears[listaMedianaSalarialYears.length - 1];

  const proyeccion = ultimaMedinaSalarial * (1 + medianaPorcentajes);

  return proyeccion;
}

// ANÁLISIS GENERAL SALARIAL
function medianaGeneral() {
  const listaMedianas = salarios.map((persona) =>
    medianaSalarialPersonal(persona.name)
  );

  const mediana = PlatziMath.calcularMediana(listaMedianas);

  return mediana;
}

function medianaTop10() {
  const listaMedianas = PlatziMath.ordenarLista(
    salarios.map((persona) => medianaSalarialPersonal(persona.name))
  );

  const cantidad = listaMedianas.length * 0.1;
  console.log(cantidad);
  const limite = listaMedianas.length - cantidad;
  console.log(limite);

  // const top10 = listaMedianas.splice(limite, listaMedianas.length);
  // Este metodo muta el array original sacando los elementos
  
  const top10 = listaMedianas.slice(limite, listaMedianas.length);
  // .slice() extrae todos los elementos
  // .slice(-2) extrae los ultimos 2 elementos
  // .slice(18) extrae desde el elemento 18 hasta el final .slice(18, lista.length)
  // .slice(2, -2) extrae desde el elemento 2 hasta el penultimo elemento

  const mediana = PlatziMath.calcularMediana(top10);

  return mediana;
}
