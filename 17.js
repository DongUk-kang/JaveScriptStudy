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

