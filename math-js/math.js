// CUADRDADO
console.group('CUADRADO');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}

console.groupEnd();

// TRIANGULO
console.group('TRIANGULO');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

/**
 * Calcula la altura de un triángulo Isósceles.
 * @param {number} lados Medida de sus dos lados (deben ser iguales).
 * @param {number} base Medida de la base (diferente de los lados).
 * @returns Altura del triángulo.
 */
function calcularAlturaTrianguloIsosceles(lados, base) {
  if (lados == base) {
    return console.warn('Este no es un triángulo isocels');
  } else {
    return Math.sqrt(lados ** 2 - base ** 2 / 4);
  }
}

/**
 * Calcula la altura de un triángulo Escaleno con todos sus lados.
 * @param {number} lado1 Medida de un lado (deferente de los otros lados).
 * @param {number} lado2 Medida de otro lado (deferente de los otros lados).
 * @param {number} base Medida de la base (deferente de los otros lados).
 * @returns Altura del triángulo.
 */
function calcularAlturaTrianguloEscalenoConLados(lado1, lado2, base) {
  if (lado1 == lado2 || lado1 == base || lado2 == base) {
    return console.warn('Este no es un triángulo escaleno');
  } else {
    // hallar altura de un triángulo escaleno
    const semiperimetro = (lado1 + lado2 + base) / 2;
    
    return Math.sqrt(semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - base)) * (2 / base);
  }
}

/**
 * Calcula la altura de un triángulo Escaleno con el ángulo de la base.
 * @param {number} lado Medida del lado donde se encuentra el ángulo.
 * @param {number} angulo Medida del ángulo.
 * @returns Altura del triángulo.
 */
function calcularAlturaTrianguloEscalenoConAngulo(lado, angulo) {
  const anguloRadianes = (Math.PI / 180) * angulo;

  return lado * Math.sin(anguloRadianes);
}

/**
 * Calcula la altura de un triángulo Escaleno con el área de la base.
 * @param {*} base Medida de la base.
 * @param {*} area Área del triángulo.
 * @returns Altura del triángulo.
 */
function calcularAlturaTrianguloEscalenoConArea(base, area) {
  return (2 * area) / base;
}

console.groupEnd();

// CIRCULO
console.group('CIRCLE');

const radioCircle = 3;
const diametroCircle = radioCircle * 2;
const PI = Math.PI; // .toFixed(4) para redondear a 4 decimales

const circunferencia = diametroCircle * PI;
const areaCircle = PI * radioCircle ** 2; // Math.pow(radioCircle, 2)

console.log({
  radioCircle,
  diametroCircle,
  PI,
  circunferencia,
  areaCircle,
});

function calcularCircle(radio) {
  const diametro = radio * 2;
  const PI = Math.PI;
  const radioAlCuadrado = Math.pow(radio, 2); // radio ** 2;

  return {
    circunferencia: diametro * PI,
    area: PI * radioAlCuadrado,
  };
}

console.groupEnd();
