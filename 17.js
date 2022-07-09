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


