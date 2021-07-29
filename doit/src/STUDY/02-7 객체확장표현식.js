//객체 확장 표현식과 구조 분해 할당

// ES5의 예
var x = 0;
var y = 0;

var obj = { x: x, y: y }; //대입한 객체를 보면 키 이름이 키값과 동일하다.(각각 x,y)

var randomKeyString = "other";
var combined = {};
combined["one" + randomKeyString] = "some value"; //연산 결과로 키값을 대입할 때는 키값을 지정할 코드를 추가로 작성해야한다.

var obj2 = {
  //객체에 함수를 추가할 때는 변수에 함수를 할당해야 한다.
  methodA: function () {
    console.log("A");
  },
  methodB: function () {
    return 0;
  },
};

// ES6의 예
var x = 0;
var y = 0;
var obj = { x, y }; //객체의 변수를 선언할 때 키값을 생략하면 자동으로 키의 이름으로 키값을 지정한다.

var randomKeyString = "other";
var combined = {
  ["one" + randomKeyString]: "some value", //객체 생성 블록 안에 대괄호([])를 사용하여 표현식을 작성하면 추가하여 계산된 키값을 생성할 수 있다.
};

var obj2 = {
  x,
  methodA() {
    console.log("A");
  }, //function 키워드를 생략하여 함수를 선언할 수 있다.
  methodB() {
    return 0;
  },
};
