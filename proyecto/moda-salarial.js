// Moda salarial historica
function modaSalarial() {
  const historialSalarial = salarios.map(persona => historialSalarialPersonal(persona.name));

  const salariosCountry = [];

  historialSalarial.map(salariosPersonales => salariosCountry.push(...salariosPersonales));

  const moda = PlatziMath.calcularModa(salariosCountry);

  console.log(salariosCountry);
  console.log(moda);
}

// Moda salarial anual
function modaSalarialAnual() {
  const historialSalarial = {};

  salarios.forEach(persona => {
    persona.trabajos.forEach(trabajo => {
      if (!historialSalarial[trabajo.year]) {
        historialSalarial[trabajo.year] = [];
      }

      historialSalarial[trabajo.year].push(trabajo.salario);
    });
  });

  const years = Object.keys(historialSalarial);
  const modaSalarial = years.map(year => PlatziMath.calcularModa(historialSalarial[year]));

  console.log(historialSalarial);
  return modaSalarial;
}