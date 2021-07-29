//화살표 함수 (arrow function)
//=> 기호로 함수를 선언한다.

function add(first, second) {
  return first + second;
}

var add = function (first, second) {
  return first + second;
};

var add = function add(first, second) {
  return first + second;
};

//ES6 화살표 함수
var add = (first, second) => {
  return first + second;
};
// this scope를 전달한 예
var self = this;
var addThis = function (first, second) {
  return self.value + first + second;
};

var addThis = (first, second) => first + second;

function addNumber(num) {
  return function (value) {
    return num + value;
  };
}
// 화살표 함수로 변환한 예
var addNumber = (num) => (value) => num + value;

var addTwo = addNumber(2);
var result = addTwo(4); // 6

// bind함수를 통해 this scope를 전달한 예
//화살표 함수는 콜백 함수의 this범위로 생기는 오류를 피하기 위해 bind()함수를 사용하여
//this객체를 전달하는 과정을 포함하고 있다.
class MyClass {
  value = 10;
  constructor() {
    var addThis2 = function (first, second) {
      return this.value + first + second;
    }.bind(this);
    var addThis3 = (first, second) => this.value + first + second;
  }
}
