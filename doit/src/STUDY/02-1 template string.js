//템플릿 문자열
//작은따옴표 ' ' 대신 (`) 백틱으로 문자열을 표현한다. 숫자 1 왼쪽에 있음.
//또한 템플릿 문자열에 특수 기호 $를 사용하여 변수 또는 식을 포함할 수 있다.

let string1 = "안녕하세요";
let string2 = "반갑습니다";
let greeting = string1 + " " + string2; //ES5문법
let greeting = `${string1} ${string2}`; //ES6문법
console.log(greeting);

let product = { name: "도서", price: "4200원" };
let message = "제품" + product.name + "의 가격은" + product.price + "입니다"; //ES5문법
let message = `제품 ${product.name}의 가격은 ${product.price}입니다`; //ES6문법

console.log(message);

let multiLine = "문자열1\n문자열2"; //ES5문법
let multiLine = `문자열1
문자열2`; //ES6문법  템플릿 문자열은 Enter를 눌러 줄을 바꾸는 것도 허용. \n를 사용하지 않아도 된다.
console.log(multiLine);

let value1 = 1;
let value2 = 2;
let boolValue = false;
let operator1 = "곱셈값은 " + value1 * value2 + "입니다. "; //ES5문법
let operator2 = "불리언값은 " + (boolValue ? "참" : "거짓") + "입니다. "; //ES5문법

let operator1 = `곱셈값은 ${value1 * value2}입니다.`; //템플릿 문자열에 $기호를 사용해 연산을 포함할 수 있다.
let operator2 = `불리언값은 ${boolValue ? "참" : "거짓"}입니다.`; //ES6문법
console.log(operator1);
console.log(operator2);
