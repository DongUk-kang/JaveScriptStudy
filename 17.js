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


// 17 - 09
function Circle(radius) {
    //1. 암묵적으로 인스턴스가 생성되고 this에 바인딩됨

    //2. this에 바인딩되어 잇는 인스턴스를 초기화됨
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

/**
 * 3. 인스턴스 반환
 * 생성자 함수 내부의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환
 */

// 17 - 10
function Circle(radius) {
     //1. 암묵적으로 인스턴스가 생성되고 this에 바인딩됨

    //2. this에 바인딩되어 잇는 인스턴스를 초기화됨
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };

    // 3. 완성된 인스턴스가 바인됭 this가 암묵적으로 반환됨
}

// 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환함
const circle7 = new Circle(1);
console.log(circle7);

//만약 this가 아닌 객체를 명시적으로 반환하면 this가 반환되지 못하고 return문에 명시한 객체가 반환됨

// 17 - 11
function Circlr(radius) {
    //1. 암묵적으로 인스턴스가 생성되고 this에 바인딩됨

    //2. this에 바인딩되어 잇는 인스턴스를 초기화됨
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };

    //3. 암묵적으로 this를 반환함
    //명시적으로 객체를 반홚아면 암묵적인 this 반환인 무시됨
    return {};
}

// 인스턴스 생성 Circle 생성자 함수는 명시적으로 반환한 객체를 반환
const circle8 = new Circle(1);
console.log(circle8);

// 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환됨

// 17 - 12
function Circle(radius) {
     //1. 암묵적으로 인스턴스가 생성되고 this에 바인딩됨

    //2. this에 바인딩되어 잇는 인스턴스를 초기화됨
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };

    //3. 암묵적으로 this를 반환
    //명시적으로 원시값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환
    return 100;
}

//인스턴스 생성 Circle 생성자 함수는 명시적으로 반환함 객체를 반환
const circle9 = new Circle(1);
console.log(circle9); 

/**
 * 생성자 함수 내부에서 명시적으로 this가 아닌 다른 값을 반환하는것은 생성자 함수의 기보동작을 훼손함
 * 생성자 함수 내부에서 return문을 반드시 생략
 */

/**
 * 17. 2 . 4 내부 메서드 [[Call]] & [[Consturct]]
 * 함수 선언문 또는 함수 표현식으로 정의한 함수는 일반적인 함수로서 호출할수 있는것은 물론
 * 생성자 함수로서 호출할 수 있음
 * 
 * 생성자 함수로서 호출한다는것은 new 연산자와 함께 호출하여 객체를 생성하는것을 의미
 * 
 * 함수는 객체이므로 일반 객체와 동일하게 동작할 수 있음
 * 함수 객체는 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드를 모두 가지고 있음
 */

// 17 - 13
// 함수는 객체다
function foo() {}

//함수는 객체이므로 프로퍼티를 소유 할 수 있음
foo.prop = 10;

//함수는 객체이므로 메서드를 소유할 수 있다
foo.method = function() {
    console.log(this.prop);
};
foo.method(); // 10

/**
 * 함수는 객체이지만 일반 객체와 다름
 * 일반객체는 호출할수 없지만 함수는 호출할수 있음
 * 함수 객체는 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드는 물론
 * 함수로서 동작하기 위해 함수 객체만을 위한 [[Environment]], [[FormalParameters]] 등의 내부슬롯과 [[Call]], [[Construct]] 같은 내부 메서드를 추가로 가지고있음
 * 
 * 함수가 일반 함수로서 호출되면 함수 객체의 내부 메서드[[Call]]이 호출되고 new 연산자와 함께 생성자 메서드를 추가로 가지고잇음
 * 
 * 함수가 일반 함수로서 호출되면 함수 객체의 내부 메서드 [[Call]]이 호출되고 new 연산자와 함께 생성자가 함수로서 호출되면 내부메서드[[Construct]]가 호출됨
 */

// 17 - 14 
function foo() {
    //일반적으로 함수로서 호출 [[Call]]이 호출됨
    foo();

    // 생성자 함수로서 호출 [[Construct]]가 호출
    new foo();
}

/**
 * 내부 메서드 [[Call]]을 갖는 함수 객체를 callable이라 하며, 내부 메서드 [[Construct]]를 함수객체를 constructor, [[Construct]]를 갖지 않는 함수객체를
 * non-constructor 라고 부름
 * 
 * callable은 호출할 수 있는 객체 
 * 즉 함수를 말하며, constructor는 생성자 함수로서 호출할 수 있는 함수, non-constructor는 객체를 생성자 함수로서 호출할수 없는 함수를 의미
 * 
 * 호출할 수 없는 객체는 함수 객체가 아니므로 함수로서 기능하는 객체
 * 즉 함수 객체는 반드시 callable이어야함
 * 
 * 따라서 모든 함수 객체는 내부 메서드[[Call]]을 갖고 있으므로 호출할수 있음
 * 
 * 모든 함수 객체가  [[Construct]]를 갖는 것은 아님
 * 함수객체는 constructor일 수도 있고 non-constructor일수도있음
 * 
 * 결론적으로 함수객체는 callable 이면서constructor 이거나 callable 이면서 non-constructor다
 * 모든 함수 객체는 호출할 수 있지만, 모든 함수 객체를 생성자 함수로서 호출할 수 있는것은 아님
 *  */




/**
 * 17.2.5 constructor 와 non-constructor의 구분
 * js엔진이 어떻케 constructor와 non-constructor을 구분하는 방법
 * 
 * js엔진은 함수 정의를 평가하여 함수 객체를 생성할 때 함수 정의 방식에 따라 함수를 constructor와  non-constructor로 구분
 * 
 * constructor: 함수선언문, 함수표현식, 클래스
 * 
 * non-constructor: 메서드(es6메서드 축약 표현), 화살표 함수
 * 
 */

// 17 - 15 

//일반 함수 정의: 험수 선언문, 함수 표현식
function foo() {}
const bar = function () {};
//프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정하지 않음
const baz = {
    x: function() {}
};
//일반 함수로 정의된 함수만이 constructor다.
new foo(); // > foo {}
new bar(); // > bar {}
new baz.x(); // > x {}

// 화살표 함수 정의
const arrow = () => {};

new arrow(); // 타입에러 발생

//메서드 정의: es6의 메서드 축약 표현만 메서드로 인정함
const obj1 = {
    x() {}
};
new obj1.x(); // 타입에러 발생


/**
 * 함수를 프로퍼티 값으로 사용하면 일반적으로 메서드로 통칭함
 * 하진만 ecmascript 사양에서 메서드란 es6의 메서드 축약 표현만을 의마함
 * 
 * 함수가 어디에 할당되어 있는지에 따라 메서드인지를 판단하는것이 아니라 함수 정의 방식에 따라 constructor와 non-constructor를 구분함
 * 
 * 함수를 일반 함수로서 호출하면 함수 객체의 내부 메서드 [[Call]]이 호출되고 new 연산자와 함께 생성자함수로서
 * 호출하면 내부 메서드 [[constructor]]가 호출됨
 * non-constructor인 함수 객체는 내부 메서드 [[constructor]]를 갖지않음
 * 
 * 따라서 non-constructor인 함수 객체를 생성자 함수로서 호출하면 에러가 발생함
 */

// 17 - 16 
function foo() {
    //일반함수로서 호출
    //[[Call]]이 호출됨 모든 함수 객체는 [[Call]]이 구현되어있음
    foo();

    //생성자 함수로서 호출
    //[[Construct]]가 호출됨 이떄 [[Construct]]를 갖지 않는다면 에러가 발생함
    new foo();
}

/**
 * 주의할것은 생성자 함수로서 호출될 것을 기대하고 정의하지 않은 일반 함수(callable이면서 constructor)에 new 연산자를 붙여 호출하면 생성자 함수처럼 동작할수 있음
 */

/**
 * 17.2.6 new 연산자
 * 
 * 일반함수와 생성자 함수에 특별한 형식적 차이는 없음
 * new 연산자와 함께함수를 호출하면 해당 함수는 생성자 함수로 동작함
 * 
 * 다시 말해, 함수 객체의 내부 메서드 [[Call]]이 호출되는 것이 아니라 [[Construct]]가 호출됨
 * 단, new 연산자와 함께 호추하는 함수는 constructor이어야함
 */


// 17 - 17
// 생성자 함수로서 정의하지 않은 일반 함수
function add(x, y) {
    return x + y;
}
// 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자 와 함께 호출
let insts = new add();

// 함수가 객체를 반환하지 않았으므로 반환이 무시된다 . 따라서 빈 객체가 생성되어 반환된다
console.log(insts); // {}

// 객체를 반환하는 일반 함수
function createUser(name, role) {
    return { name, role };
}
//일반 함수를 new 연산자와 함께 함께 호출
insts = new createUser("Lee", "admin");
//함수가 생성한 객체를 반환
console.log(insts);

/**
 * 반대로 new 연산자없이 생성자 함수를 호출하면 일반 함수로 호출된다.
 * 다시말해 함수객체의 내부 메서드[[Construct]]가 호출되는것이 아니라 [[Call]]이 호출된다
 */

// 17= 18

//생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// new 연산자 없이 생성자 함수 호출하면 일반 함수로서 호출됨
const circle10 = Circle(5);
console.log(circle10); // undefined

//일반 함수 내부의 this는 전역 객체 window를 가르킴
console.log(radius); // 5
console.log(getDiameter()); // 10

circle10.getDiameter(); // 타입에러

/**
 * Criclr 함수를 가르키는 new 연산자와 함께 생성자 함수로서 호출하면 함수 내부의
 * this는 Circle 생성자 함수가 생성할 인스턴스를 가르킴
 * 하지만 Circle 함수를 일반적인 함수로서 호출하면 함수 내부의 this는 전역객체 window를 가르킴
 */

// 17.2.7 new.target

/**
 * 생성자 함수가 new 연산자 없이 호출되는것을 방지하기 위해 파스칼 케이스 컨벤션을 사용한다 하더라도
 * 실수는 생김 이러한 위험서응ㄹ 회피하기 위해 es6에서 new.target을 지원
 */

//17 - 19
//생성자 함수
function Circle(radius) {
    // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefiend다
    if (!new.target) {
        //new 연산자와 함께생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환
        return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radiusl
    };
}

// new 연산자 없이 생성자 함수를 호출하여도 new. target을 통해 생성자 함수로 호출됨
const circle = Circle(5);
console.log(circle.getDiameter());

/**
 * new.target은 es6에서 도입한 최신 문법으로 ie에서는 지원하지않음
 * new.targe을 사용할 수 없는 상황이라면 스코프 세이프 생성자 패턴을 사용할 수 있음
 * 
 * 
 */

// 17 - 20
// Scope - Safe Constructor Pattern
function Circle(radius) {
    /**
     * 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈 객체를 생성하고
     * this에 바인딩함 이때 this와 Circle은 프로토 타입에 의해 연결됨
     * 
     * 이함수가 new 연산자와 함께 호출되지 않았더라면 이 시점의 this는 전역객체 window를 가르킴
     * 즉, this와 Circle은 프로토 타입에 의해 연괼되지 않음
     */
    if (!(this instanceof Circle)) {
        return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

//  new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출됨
const circle11 = Circle(5);
console.log(circle.getDiameter()); // 10

/**
 * new 연산자와 함꼐 생성자 함수에 의해 생성된 객체는 프로포타입에 의해 생성자 함수와 연결된다
 */

// 17 - 21
let obj2 = new Object();
console.log(obj2);

obj2 = Object();
console.log(obj2);

let f = new Function('x', 'return x ** x');
console.log(f);

f = Function('x', 'return x ** x');
console.log(f);

/**
 * String, Number, Boolean 생성자 함수는 new 연산자와 함께 호출했을때 String, Number, Boolean 객체를 생성하여 반환하지만
 * new 연산자 없이 호출하면 문자열, 숫자, 불리언 값으로 반환됨
 */

// 17 - 22
const str = String(123);
console.log(str, typeof str); // 123 string

const num = Number('123');
console.log(num, typeof num);

const bool = Boolean('true')
console.log(bool, typeof bool);