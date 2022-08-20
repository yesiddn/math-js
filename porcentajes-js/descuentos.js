const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const result = document.querySelector('#result');

// const coupons = {
//   Christmas: 15,
//   NewYear: 10,
//   Valentine: 5,
//   MothersDay: 25,
//   FathersDay: 20,
// };

const coupons = [];
coupons.push({
  coupon: 'Christmas',
  discount: 25,
});
coupons.push({
  coupon: 'NewYear',
  discount: 15,
});
coupons.push({
  coupon: 'Valentine',
  discount: 10,
});
coupons.push({
  coupon: 'MothersDay',
  discount: 20,
});
coupons.push({
  coupon: 'FathersDay',
  discount: 20,
});

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const userCoupon = inputCoupon.value;
  let discount;

  if (!price || !userCoupon) {
    result.innerText = 'Por favor, llena todas las casillas.';
    return;
  }

  // CUPONES CON METODO .find()
  // El metodo find devuelve el primer elemento que cumpla la condicion, por lo cual si encuentra el elemento antes de que termine el ciclo, no recorre los demás elementos. En este caso nos devuelve: //{...}
  const coupon = coupons.find((couponElement) => couponElement.coupon === userCoupon);

  if (coupon) {
    discount = coupon.discount;
  } else {
    result.innerText = 'Cupón no válido.';
    return;
  }

  // CUPONES CON METODO .filter()
  // El metodo filter devuelve un array con los elementos que cumplan la condicion, por lo cual revisa todos los elementos del array que le pasamos. En este caso nos devuelve: // [{...}]
  // const coupon = coupons.filter(
  //   (couponElement) => couponElement.coupon === userCoupon
  // );

  // if (coupon.length > 0) {
  //   discount = coupon[0].discount;
  // } else {
  //   result.innerText = 'Cupón no válido.';
  //   return;
  // }

  // CUPONES CON BUCLE FOR OF
  // for (const key of coupons) {
  //   if (key.coupon === userCoupon) {
  //     discount = key.discount;
  //     break;
  //   } else {
  //     result.innerText = 'Cupón no válido.';
  //     return;
  //   }
  // }

  // CUPONES CON OBJETOS
  // if (coupons[userCcoupon]) {
  //   discount = coupons[userCcoupon];
  // } else {
  //   result.innerText = 'Cupón no válido.';
  //   return;
  // }

  // DESCUENTO POR USUARIO
  // if (discount > 100) {
  //   result.innerText = 'El descuento no puede ser mayor a 100%.';
  //   return;
  // }

  const newPrice = ((price * (100 - discount)) / 100).toFixed(2);

  result.innerText = `El precio con descuento es: $${newPrice}`;
}
