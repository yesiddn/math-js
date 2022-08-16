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

function calcularAlturaTrianguloIsosceles(lados, base) {
  if (lados == base) {
    return console.warn('Este no es un triángulo isocels');
  } else {
    return Math.sqrt(lados ** 2 - base ** 2 / 4);
  }
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
