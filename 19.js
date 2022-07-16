/**
 * 19. 프로토 타입
 *
 * js는 명령형 (imperative) / 함수형 (functional) / 프로토타입 (prototype-based) / 객체지향 (oop object oriented programming)을
 * 지원하는멀티 패러다임 프로그래밍 언어
 *
 * 클래스 기바 객체지향 프로그래밍 언어의 특징인 클래스와 상속, 캡슐화를 위한 키워드인
 * public, private, protected 등이 없어서 js는 객체지향 언어 가 아나리가 오해가 많음
 *
 * js는 클래스 기반 객체지향언어보다 효율적이며, 더 강력한 객체지향 프로그래밍 능력지니고있는 프로토타입 기반의 객체지향 언어임
 */

/**
 * 클래스
 * class
 * es6 사실 클래스도 함수이며, 기존 프로토타입 기반 패턴의 문법적 설탕이라고 볼 수 있음
 *
 * 클래스와 생성자 함수는 모두 프로토타입 기반의 인스턴스를 생성하지만 정확히 동일하게 동작하지는 않음
 *
 * 클래스 생성자 함수보다 엄격하며 클래스는 생성자 함수에서는 제공하지 않는 기능도 제공한다.
 *
 * js는 객체기반의 프로그래밍 언어이며 js를 이루고있는 거의 모든것이 객체
 * 원시타입의 값을 제외한 나머지 값들은 모두 객체
 */

/**
 * 객체지향 프로그래밍
 * 객체지향 프로그래밍은 프로그램을 명령어 또는 함수의 목록으로 보는 전통적인 명령형 프로그래밍의 절차지향적 관점에서 벗어나
 * 여러개 독립적 단위, 즉 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임을 지칭함
 *
 * 객체지향 프로그래밍은 실세계의 실체를 인식하는 철학적 사고를 프로그래밍에 접목하려는 시도에서 시작한다.
 * 실체는 특징이나 성질을 나타내는 속성을 가지고있는 이를통해 실체를 인식하거나 구별할수 있음
 */

// 19 - 01

const person = {
  name: "Lee",
  address: "Seoul",
};
console.log(person);

/**
 * 속성을 통해 여러개의 값을 하나의 단위로 구성한 복합적인 자료구조를 객체라하며,
 * 객체지향 프로그래밍은 독립적인 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임
 */

// 19 - 02
const circle = {
  radius: 5, // 원의 지름
  getDiameter() {
    return 2 * this.radius;
  },

  // 원의 둘레
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },

  getArea() {
    return Math.PI * this.radius ** 2;
  },
};
console.log(circle);

console.log(circle.getDiameter());
console.log(circle.getPerimeter());
console.log(circle.getArea());

/**
 * 객체지향 프로그래밍은 객체의 상태를 나타내는 데이터와 상태 데이터를 조작할 수 있는 동작을 하나의 논리적인 단위로 묶어 생각함
 *
 * 객체는 상태데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조하고 할 수 있음
 *
 * 객체의 상태 데이터를 프로퍼티, 동작을 메서드라고 부름
 *
 * 객체는 고유의 기능을 갖는 독립적인 부품으로 볼 수 있지만, 자신의 고유한 기능을 수행하면서 다른 객체와 관계성을 가질 수 있다.
 *
 * 다른 객체와 메세지를 주고받거나 데이터를 처리할 수도 있다.
 *
 * 다른 객체의 상태 데이터나 동작을 상속받아 사용하기도한다.
 */

/**
 * 19.2 상속과 프로토타입
 *
 * 상속은 객체지향 프로그래밍의 핵심 개념으로, 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속 받아 그래도 사용할수있다는것을 말함
 *
 * js는 포토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거한다.
 *
 * 중복을 제거하는 방법은 기존의 코드를 적극적으로 재사용할 수 있음
 * 코드 재사용은 개발비용을 현저히 주일 수 있는 잠재력이 있으므로 매우중요함
 */

// 19 - 03
//생성자 함수
function circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    //Math.PI는 원주율을 나태내는 상수다.
    return Math.PI * this.radius ** 2;
  };
}

// 반지름이 1인 인스턴스 생성
const circle1 = new circle(1);
// 반지름이 2인 인스턴스 생성
const circle2 = new circle(2);

/**
 * Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
 * getArea 메서드를 중복생성하고 모든 인스턴스가 중복 소유한다.
 * getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직
 */
console.log(circle.getArea === circle2.getArea); // false
console.log(circle1.getArea());
console.log(circle2.getArea());

/**
 * 생성자 함수에 의해 생성된 모든 인스턴스가 동일한 메서드를 중복 소유하는 것은 메모리를 불필요하게 낭비함
 * 또한 인스턴스를 생성할때마다 메서드를 생성하므로 퍼포먼스에도 악영향을 끼침
 *
 * 만약 10개의 인스턴스를 생성하면 내용이 동일한 메서드도 10개 생성된다.
 */

// 19 - 04
//생성자 함수
function Circle(radius) {
  this.radius = radius;
}
/**
 * Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
 * 공유해서 사용할 수 있도록 프로토타입에 추가함
 * 프로토타입은 Circle 생성자의 prototype 프로퍼티에 바인되어있음
 */
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

// 인스턴스 생성
const circle3 = new Circle(3);
const circle4 = new Circle(4);

/**
 * Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
 * 프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받음
 * 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유함
 */
console.log(circle3.getArea === circle4.getArea); // true
console.log(circle3.getArea());
console.log(circle4.getArea());

/**
 * Circle 생성자 함수가 생성한 모든 인스턴스는 자신의 프로토타입, 즉 상위 객체 역할을 하는 Circle prototyp의 모든 프로퍼티와 메서드를 상속함
 *
 * getArea 메서드는 단 하나만 생성되어 프로토타입인 Circle.prototype의 메서드로 할당되어 있음
 * 따라서 Circle 생성자 함수가 생성하는 모든 인스턴스는 getArea 메서드를 상속받아 사용 할 수 있음
 *
 * 즉, 자신의 상태를 나타내는 radius 프로퍼티만 개별적으로 소유하고 내용이 동일한 메서드는 상속을 통해 공유하여 사용하느것
 *
 * 상속은 코드의 재사용이란 관점에서 매우 유용함
 * 생성자 함수가 생성할 모든 인스턴스가 공통적으로 사용할 프로퍼티나 메서드를 프로토타입에 미리 구현해 두면 생성자 함수가 생성할 모든 인스턴스는 별도의 구현없이
 * 상위 객체인 프로토타입의 자산을 공유하여 사용함
 */

/**
 * 19.3 프로토타입 객체
 *
 * 프로토타입 객체란 객체지향 프로그래밍의 근간을 이루는 객체 간 상속을 구현하기 위해 사용됨
 *
 * 프로토타입은 어떤 객체의 상위 객체의 역할을 하는 객체로서 다른객체에
 * 공유 프로퍼티를 제공한다.
 * 프로토타입을 상속받은 하위 객체는 상위 객체는 상위 객체의 프로퍼티를 자신의 프로퍼티처럼 자유롭게 사용할 수 있음
 *
 * 모든객체는 [[Prototype]]이라는 내부 슬롯을 가지며, 이 내부 슬롯의 값은 프로토타입의 참조다
 *
 * [[Prototype]]에 저장되는 프로토타입은 객체 생성 방식에 의해 결정됨
 * 객체가 생성될때 객체 생성에 따라 프로토타입이 결정되고 [[Prototype]]에 저장됨
 *
 * 객체 리터럴에 의해 생성된 객체의 프로토타입은 Object.prototype이고 생성자 함수에 의해
 * 생성된 객체의 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩되어 있는 객체
 *
 * 모든 객체는 하나의 프로토타입을 갖음
 * 모든 프로토타입은 생성자 함수와 연결되어있음
 *
 */

/**
 * 19.3.1 __proto__ 접근자 프로퍼티ㅣ
 *
 * 모든 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입, 즉[[Prototype]] 내부 슬롯에 간접적으로 접근할 수 있음
 */

// 19 - 05
const person1 = { name: "Kim" };

//19 - 06
const obj = {};
const parent = { x: 1 };

// getter 함수인 get __proto__ 가 호출되어 obj객체 프로토타입을 취득
obj.__proto__;

// setter 함수인 set __proto__가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;

console.log(obj.x); // 1

// 19 - 07
const person5 = { name: "Kang" };

//person 객체는 __proto__ 프로퍼티를 소유하지 않음
console.log(person.hasOwnProperty("__proto")); // false

// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 object.prototype의 접근자 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));

// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있음
console.log({}.__proto__ === Object.prototype); //

// 19 - 08
const parent1 = {};
const child = {};

// child의 프로토타입을 parent로 설정
child.__proto__ = parent1;
// parent의 프로토타입을 child로 설정
// parent1.__proto__ = child;

// 19 - 09
//obj는 프로토타입 체인의 종점이다.
const obj2 = Object.create(null);

//obj2 Object.__proto__를 상속받을 수 없다
console.log(obj2.__proto__);

// 따라서 __proto__보다 Object.getPrototypeOF 메서드를 사용하는 편이 좋다.
console.log(Object.getPrototypeOf(obj)); // null

//19 . 3. 2 함수객체의 prototype 프로퍼티

//함수객체는 prototype 프로퍼티를 소유함
(function () {}.hasOwnProperty("prototype")); // true

//일반객체 prototype 프로퍼티를 소유하지 않느다
({}.hasOwnProperty("prototype"));

/**
 * prototype 프로퍼티는 생성자 함수가 생성할 객체(인스턴스)의 프로토타입을 가리킴
 *
 * 따라서 생성자 함수로서 호출할수 없는 함수, 즉 non-constructor인 화살표 함수와 ES6 메서드 축약 표현으로 정의한 메서드는
 * prototype 프로퍼티를 소유하지 않으며 프로토타입도 생성하지 않음
 */

// 19 - 12

// 화살표 함수는 non-constructor다

const Person = (name) => {
  this.name = name;
};

// non - construcrtor 는 prototype 프로퍼티를 소유하지않음
console.log(Person.hasOwnProperty("prototype"));

// non - constructor 는 프로토타입을 생성하지 않는다.
console.log(Person.prototype);

//es6의 메서드 축약 표혀능로 정의한 메서드는 non-constructorek
const obj3 = {
  foo() {},
};

console.log(obj.foo.hasOwnProperty("prototype")); // false
console.log(obj.foo.prototype);

/**
 * 생성자 함수로 호출하기 위해 정의하지 않은 일반함수(함수선언문, 함수 표현식)도 prototype 프로퍼티를
 * 소유하지만 객체를 생성하지 않는 일반 함수의 prototype 프로퍼티는 아무런 의미가없음
 */

// 19 - 13

// 생성자 함수
function Person(name) {
  this.name = name;
}
const me = new Person("Lee");

console.log(Person.prototype === me.__proto__); // true

// 19.3.3 프로토타입의 constructor 프로퍼티와 생성자 함수
// 19 - 14

function Person(name) {
  this.name = name;
}
const me1 = new Person("Leee");
//me1 객체의 생성자 함수는 Person
console.log(me1.constructor === Person);

// 19.4 리터럴 표기법에의해 생성된 객체의 생성자 함수와 프로토타입

// 19 - 15

//obj 객체를 생성한 생성자 함수는 Object다
const obj4 = new Object();
console.log(obj4.constructor === Object); // true

//add 함수 객체를 생성한 생성자 함수는 Function이다
const add = new Function("a", "b", "return a + b");
console.log(obj.constructor == Object); // true

//생성자 함수
function Person(name) {
  this.name = name;
}
//me 객체를 생성한 생성자함수는 Person이다.
const me2 = new Person("Kiem");
console.log(me.constructor === Person); // true

//19 - 17
// obj 객체는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성함
const obj5 = {};

// obj5 객체의 생성자 함수는 Object 생성자 함수.
console.log(obj5.constructor === Object); // true

/**
 * obj객체는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴에 의해 생성된 객체
 * 하지만 obj5 객체는 Object 생성자 함수와 constructor 프로퍼티로 연결되어있음
 */

//19 - 18

// 2. Object 생성자 함수에 의한 객체 생성
// 인수가 전달되지 않았을때 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성

let obj = new Object();
console.log(obj); // {}

/**
 * 1. new.target이 undefined나 Object가 아닌 경우
 * 인스턴스 > Foo.prototype > Object.prototype 순으로 프로토타입 체인이 생성된다
 */
class Foo extends Object {}
new Foo(); // Foo {}

// 3. 인수가 전달된 경우에는 인수를 객체로 변환
// Number 객체 생성
obj = new Object(123);
console.log(obj); // Number {123}

// String 객체 생성
obj = new Object("123");
console.log(obj); // String {'123'}
