//전개 연산자. (spread operator)
//전개 연산자는 나열형 자료를 추출하거나 연결 할 때 사용.
//사용방법은 배열이나 객체, 변수명 앞에 마침표 3개를 입력. (...)
//대신 배열 객체 암수 인자 표현식 ( [], {}, () ) 안에서만 사용해야 한다.

// ES5 문법
var array1 = ["one", "two"];
var array2 = ["three", "four"];
var combined = [array1[0], array1[1], array2[0], array2[1]];
var combined = array1.concat(array2);
var combined = [].concat(array1, array2);
//concat()함수로 두 배열 합치기
var first = array1[0];
var second = array1[1];
var three = array1[2] || "empty";
//||연산자와 조합하면 추출할 배열 요소가 없을 때 기본값을 지정할 수 있다.

function func() {
  var args = Array.prototype.slice.call(arguments);
  var first = args[0];
  var others = args.slice(1);
}

// ES6 문법
var array1 = ["one", "two"];
var array2 = ["three", "four"];
var combined = [...array1, ...array2];
//두 배열을 전개 연산자로 합침 combined = ['one', 'two', 'three', 'four'];
var [first, second, three = "empty", ...others] = array1;
// first = 'one', second = 'two', three = 'empty' (기본값과 함께 배열 요소 추출) , others = []  (앞에서 추출하고 남은 요소 추출)

function func(...args) {
  //함수인자배열을 args변수에 할당함
  var [first, ...others] = args;
}

function func(first, ...others) {
  var firstInES6 = first;
  var othersInES6 = others;
}

// 올바르지 못한 예  -> 전개 연산자를 배열 표현식 없이 사용한 잘못된 예제
// var wrongArr = ...array1;
