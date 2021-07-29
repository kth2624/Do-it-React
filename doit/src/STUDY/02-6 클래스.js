//클래스

// ES5 문법
function Shape(x, y) {
  this.name = "Shape";
  this.move(x, y);
}
// static 타입 선언 예제
Shape.create = function (x, y) {
  return new Shape(x, y);
};
//인스턴스 함수를 선언하는 예제
Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};
Shape.prototype.area = function () {
  return 0;
};

// 혹은
Shape.prototype = {
  move: function (x, y) {
    this.x = x;
    this.y = y;
  },
  area: function () {
    return 0;
  },
};

var s = new Shape(0, 0);
var s2 = Shape.create(0, 0);
s.area(); // 0

function Circle(x, y, radius) {
  Shape.call(this, x, y);
  this.name = "Circle";
  this.radius = radius;
}
Object.assign(Circle.prototype, Shape.prototype, {
  area: function () {
    return this.radius * this.radius;
  },
});

var c = new Circle(0, 0, 10);
c.area(); // 100

// ES6 예제
class Shape {
  static create(x, y) {
    return new Shape(x, y);
  }
  name = "Shape";
  //ES7에 포함된 클래스 확장표현으로 constructor() 함수 안에
  //this.name = 'Shape'로 클래스 변수를 선언하는 것과 동일한 작업을 수행한다.

  constructor(x, y) {
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  area() {
    return 0;
  }
}

var s = new Shape(0, 0);
var s1 = Shape.create(0, 0);
s.area(); // 0

//ES6는 다중상속이나 인터페이스는 지원x
class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }
  area() {
    if (this.radius === 0) return super.area();
    return this.radius * this.radius;
  }
}

var c = new Circle(0, 0, 10);
c.area(); // 100
