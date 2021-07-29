//병합연산자 -> 템플릿코드 바꾸기
function getTotal(cart) {
  return `${cart.amount * cart.price}원`;
}
let cart = {
  name: "도서",
  amount: 5,
  price: 300,
};
let product = {};
// var myCart = '장바구니에 ' + cart.name + '가 있습니다. 총 금액은 ' + getTotal(cart) + '입니다.';

let myCart = `장바구니에 ${cart.name}가 있습니다. 총 금액은 ${getTotal(
  cart
)} 입니다.`;

console.log(myCart);
