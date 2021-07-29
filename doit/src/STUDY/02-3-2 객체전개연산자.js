//객체 전개 연산자

// ES5 예제
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };

var combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};
//객체 내장함수 assing() 첫 번째 인자는 결과로 반환할 객체({}) , 나머지 인자는 병합할 객체이다.
//이때 병합할 객체는 앞에 있는 객체부터 덮어 쓴다. objectTwo의 값으로 덮어 쓴다.
var combined = Object.assign({}, objectOne, objectTwo);
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1}
var combined = Object.assign({}, objectOne, objectTwo);
//중복되는 키값이 있으면 이후에 전달된 객체(objectOne)의 값으로 덮어쓴다.
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0}
var others = Object.assign({}, combined);
delete others.other;

// ES6 예제
var combined = {
  ...objectOne, //두 객체를 병합할 때 중복된 키값들은 마지막에 사용한 객체의 값으로 덮어쓴다
  ...objectTwo,
};
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1}
var combined = {
  ...objectTwo,
  ...objectOne,
};
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0}
var { other, ...others } = combined;
//객체에서 특정값을 추출할 때는 추출하려는 키 이름(other)을 맞추고 나머지는 전개 연산자로 선언된 변수(others)에 할당할 수 있다.
// others = { one: 1, two: 2, three: 3, four: 4}
