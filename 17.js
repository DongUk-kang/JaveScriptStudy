/**
 * 17 
 * 생성자 함수에 의한 객체 생성
 * 
 * 객체 리터럴에 의한 객체 생성 방식은 가장 일반적으로 간단한 객체 생성 방식임
 * 
 * 객체는 객체 리터럴 이외에도 다양한 방법으로 생성 할 수 있다
 */

/**
 * 17 . 1 Object 생성자 함수
 * 
 * new연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.
 * 빈 객체를 생성한 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성 할 수 있음
 */

// 17 - 01
// 빈객체의 생성
const person = new Object();

// 프로퍼티 추가
person.name = 'Lee';
person.sayHello = function () {
    console.log('Hi! My Name is' + this.name);
};

console.log(person);
person.sayHello(); // Hi! My Name is Lee

/**
 * 생성자 함수란 new 연산자와 함께 호출하여 객체를 생성하는 함수를 말함
 * 생성자 함수에 의해 생성된 객체를 인스턴스라고함
 * 
 * js는 Object 생성자 함수 이외에도 String, Number, Boolean, Function, Array, Date, RegExp, Promise 등의 빌트인 생성자를 제공함 
 */

// 17 - 02
// String 생성자 함수에의해 String 객체 생성
const strObj = new String("Lee");
console.log(typeof strObj); // object
console.log(strObj); // String { "Lee" }

//Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);
console.log(typeof numObj); // object
console.log(numObj); // Number {123}

//Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true); // object
console.log(boolObj);  // Boolean {true}

// Function 생성자 함수에 의한 Function 객체 생성
const func = new Function('x', 'return x * x');
console.dir(func);

//Array 생성자 함수에 의한 function 객체 생성
const arr = new Array(1, 2, 3);
console.log(arr);

//RegExp 생성자 함수에 의한 RegExp 객체 생성
const regExp = new RegExp(/ab+c/i);
console.log(regExp);

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof date); // object
console.log(date);

/**
 * 반드시 Object 생성자 함수를 사용해 빈 객체를 생성해야하는것은 아님
 * 객체를 생성하는 방법은 객체리터럴을 사용하는것이 더 간편하다
 * Object 생성자 함수를 사용해 객체를 생성하는 방식은 틀별한 이유가 없다면 유용하지 않음
 */

// 17.2 생성자 함수

/**
 * 17.2.1 객체 리터럴에 의한 객체 생성 방식의 문제점
 * 
 * 객체 리터럴에 의한 깩체 생성 방식은 직관적이고 간편함
 * 하지만 객체 리터럴에 의한 객체 생성 방식은 단하나의 객체만 생성함 
 * 
 * 따라서 동일한 프로퍼티를 갖는 객체를 여러개 생성해야 하는 경우 매법 같은 프로퍼티를 기술해야하기 떄문에 비효율적임
 */

// 17 - 03
const circle1 = {
    radius: 5,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle1.getDiameter()); // 10

const circle2 = {
    radius: 10,
    getDiameter() {
        return 2 * this.radius;
    }
};
console.log(circle2.getDiameter()) // 20

/**
 * 객체는 프로퍼티를 통해 객체 고유의 상태를 표현함
 * 
 * 메서드를 통해 상태 데이터인 프로퍼티를 참조하고 조작하는 동작을 표현
 * 
 * 프로퍼티는 객체마다 프로퍼티 값이 다를 수 있지만 메서드는 내용이 동일한 경우가 일반적
 * 
 * 원을표현한 객체인 cirle1 객체와 circle2 객체는 프로퍼티 구조가 동일
 * 객체 고유의 상태 데이터인 radius 프로퍼티의 값은 객체마다 다를 수 있지만 getDiameter메서드는 완전히 동일함
 * 
 * 객체 리터럴에 의해 객체를 생성하는 경우 프로퍼티 구조가 동일함에도 불구하고 매번 같은 프로퍼티와 메서드를 기술해야함
 */


/**
 * 17.2.2 생성자 함수에 이한 객체 생성 방식의 장점
 * 
 * 생성자 함수에 의한 객체 생성 방식은 마치 객체를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러개를 간편하게 생성
 */

// 17 - 04
// 생성자 함수
function Circle(radius) {
    //생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴트를 가르킴
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}

//인스턴스의 생성
const circle3 = new Circle(5); 
const circle4 = new Circle(10);

console.log(circle3.getDiameter())
console.log(circle4.getDiameter());

/**
 * this
 * 
 * this는 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수다
 * this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 따라 동적으로 결정됨
 */

// 17 - 05 
// 함수는 다양한 방식으로 호출됨
function foo() {
    console.log(this);
}

//일반적인 함수로서 호출
//전역 객체는 브라우저 환경에서는 window, Node.js 환경에서는 globaldmf rkfmzla
foo(); // window
const obj = { foo } // es6 프로퍼티 축약표현

//메서드로서 호출
obj.foo(); // obj

//생성자 함수로서 호출
const inst = new foo(); // inst

/**
 * 생성자 함수는 이름 그대로 객체를 생성하는 함수
 * 하지만 자바와 같은 클래스 기반 객체지향언어의 생성자와는 다르게 그 형식이 정해져 있는것이 아니라, 일반 함수와 동일한 방법으로 생성자 함수를 정의하고
 * new연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작함
 * 
 * 만약 new연산자와 함께 생성자 함수를 호출하지 않으면 생상자 함수가 아니라 일반함수로 동작함
 */

// 17 - 06 
// new 연산자와 함꼐 호출하지 않으면 생성자 함수로 동작하지 않음
// 즉, 일반 함수로써 호출되
const circle5 = Circle(15);

// 일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환함

//일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킴
console.log(radius);

/**
 * 17. 2 . 3 생성자 함수의 인스턴스 생성 과정
 * 
 * 생성자 함수의 역할은 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 템플릿으로서 동작하여 인스턴스를 생성하는것과 
 * 생성된 인스턴스를 초기화하는것
 * 
 * 생성자 함수가 인스턴스를 생성하는것은 필수, 생성된 인스턴스를 초기화하는것은 옵션
 */

// 17 - 07
// 생성자 함수
function Circle(radius) {
    //인스턴스 초기화
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}
// 인스턴스 생성
const circle6 = new Circle(5);

/**
 * 생성자 함수 내부의 코드를 살펴보면 this에 프로퍼티를 추가하고 필요에 따라 전달된 인수를 프로퍼티의 초기값으로서 할당하여 인스턴스를 초기화함
 * 
 *js엔진은 암묵적인 처리를 통해 인스턴스를 생성하고 반환한다.
 new 연산자와 함께 생성자 함수를 호출하면 js엔진은 다음과 같은 과정을 거쳐 암묵적으로 인스턴스를 생성하고 인스턴스를 초기화한 후 암묵적으로 인스턴스를 반환함 
 */


 /**
  * 1. 인스턴스 생성과 this 바인딩
  * 
  * 암묵적으로 빈 객체가 생성됨
  * 빈객체가 바로 생성자 함수가 생성한 인스턴스
  * 암묵적으로 생성된 빈 객체, 즉 인스턴스는 this에 바인딩됨
  * 
  * 생성함수 내부의 this가 생성자 함수가 생성할 인스턴스를 가리키는 이유는 바로 것이다
  * 
  * 이처리는 함수 몸체의 코드가 한줄씩 실생되는 런타임이전에 실행
  */

 // 바인딩
 // 식별자와 값을 연결하는 과정을 의미
 //예를 들어 변수 선언은 변수이름과 확보된 메모리 공간의 주소를 바인딩하는것임
// this 바인딩은 this 키워드와 this가 가리킬 객체를 바인딩하는것

// 17 - 08
function Circle(radius) {
    //1. 암묵적으로 인스턴스가 생성되고 this에 의해 바인딩됨
    console.log(this);

    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

/**
 * 2. 인스턴스 초기화
 * 
 * 생성자 함수에 기술되어 있는 코드가 한줄씩 실행되어 this에 바인딩되어있는 인스턴스를 초기화함
 * 
 * 즉, this에 바인딩되어 있는 인스턴스에 프로퍼티나 메서드를 추가하고 생성자 함수가 인수로 전달 받은 초기값을 인스턴스 프로퍼티에 할당하여
 * 초기화 하거나 고정값을 할당함
 */