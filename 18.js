// 18 함수와 일급 객체

/**
 * 18.1 일급객체
 * 
 * 일급객체의 조건
 * 
 * 1. 무명의 리터럴로 생성할수 있다 즉, 런터임에 생성이 가능
 * 
 * 2. 변수나 자료구조(객체, 배열)저장가능
 * 
 * 3. 함수의 매개변수에 전달할수 있음
 * 
 * 4. 함수의 반환값으로 사용할 수 있음
 *  */

// 18 - 1

/**
 * 1. 무명의 리터럴로 생성할수 있다 즉, 런터임에 생성이 가능
 * 
 * 2. 변수나 자료구조(객체, 배열)저장가능
 * 
 * 런타임에 함수 리터럴이 평가되어 함수객체가 생성되고 변수에 할당됨
 */
const increase = function (num) {
    return ++num;
};

const decrease = function (num) {
    return --num;
};

//2. 함수는 객체에 저장할수 있다.
const auxs = { increase, decrease };

//3. 함수의 매개변수에 전달할수 있음
//4. 함수의 반환값으로 사용할 수 있음
function makeCounter(aux) {
    let num = 0;

    return function () {
        num = aux(num);
        return num;
    };
}

// 3. 함수는 매개변수에게 함수를 전달 할수 있다
const increaser = makeCounter(auxs.increase);
console.log(increaser());
console.log(increaser());

// 3. 함수는 매개변수에게 함수를 전달 할수 있다
const decreaser = makeCounter(auxs.decrease);
console.log(decreaser());
console.log(decreaser());

/**
 * 함수가 일급 객체라는것은 함수를 객체와 동일하게 사용할 수 있다는 의미
 * 
 * 객체는 값이므로 함수는 값과 동일하게 취급 가능
 */

// 18 - 2 & 18 - 3
function square(number) {
    return number * number;
}
console.log(square);
console.log(Object.getOwnPropertyDescriptors(square));
console.log(Object.getOwnPropertyDescriptor(square, '__proto'));
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__protp__'));

// 18.2.1 arguments 프로퍼티
/**
* 함수 객체의 arguments 프로퍼티 값은 arguments 객체다

arguments 객체는 함수 호출시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사 배열객체이며 함수내부에서 지역 변수처럼 사용됨
 */

// 18 - 04
function multiply(x, y) {
    console.log(arguments);
    return x + y;
}
console.log(multiply());
console.log(multiply(1));
console.log(multiply(1, 2));
console.log(multiply(1, 2, 3));

/**
 * 함수를 정의할때 선언한 매개변수는 함수 몸체 내부에서 변수와 동일하게 취급됨
 * 
 * 즉 함수가 호출되면 함수 몸체 내에서 암묵적으로 매개변수가 선언되고 undefined로 초기화된 이후 인수가 할당됨
 * 
 * 선언된 매개변수의 개수보다 인수를 적게 전달했을 경우 인수가 전달되지 않은 매개변수는 undefined로 초기화된 상태를 유지
 */

// 18 - 5
function multiply(x, y) {
    const iterator = arguments[Symbol.iterator]();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    
    return x * y;
}
multiply(1, 2, 3);

/**
 * 선언된 매개변수의 개수와 함수를호출할때 전달하는 인수의 개수를 확인되지 않는 js의 특성떄문에 함수가 호출되면 인수개수를 확인하고
 * 이에따라 함수의 동작을 달리 정의할 필요가 있을수 있다
 * 
 * arguments 객체는 매개변수개수를 확정할수 없는 가변 인자함수를 구현할때 유용함
 */

// 18 - 6
function sum() {
    let res = 0;
    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
}

console.log(sum());
console.log(sum(1, 2));
console.log(sum(1, 2, 3));

/**
 * 유사 배열 객체는 배열이 아니므로 배열 메서드를 사용할 경우 에러가 발생됨
 * 배열 메서드를 사용 하려면 Function.prototype.call, Function.prototype.apply를 사용해 간접 호출해야 하는
 * 번거로움이있음
 */

// 18 - 7 
function sum() {
    //arguments 객체를 배열로 변환
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));

// 18 = 08
function sum( ...args) {
    return args.reduce((pre, cur) => pre + cur, 0);
}
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));

/**
 * es6 Rest 파라미터의 도입으로 모던 js 에서는 arguments 객체의 중요성이 이전 같지 않지만
 * 알아야댐 
 */

//18.2.2 caller 프로퍼티
/**
 * caller 프로퍼티는 ecmascript 사양에 포함되지않은 비표준.
 */

// 18.2.3 length프로퍼티
/**
 * 함수 객체의 length 프로퍼티는 함수를 정의할때 선언한 매겨벼눗의 개수를 가르킴
 */

// 18 - 10
function foo() {}
console.log(foo.length); // 0

function bar(x) {
    return x;
}
console.log(bar.length); // 1

function bar(x,y) {
    return x * y;
}
console.log(baz.length); //2

/**
 * arguments 객체의 length 프로퍼티와 함수 객체의 length 프로퍼티의 값은 다를 수 있으므르 주의해야함
 * arguments 객체의 length 프로퍼티는 인자의 개수를 가르키고, 함수 객ㅊ의 length 프로퍼티는 매개변수의 개수를 가르킴
 */

//18.2.4 name 프로퍼티
/**
 * 함수 객체의 name 프로퍼티는 함수 이름을 나타냄 name 프로퍼티는 es6 이전까지는 비표준이었다가
 * es6에서 정식 표준이됨
 */

// 18 - 11
// 기명 함수 표현식
var namedFunc = function foo() {};
console.log(namedFunc.name); // foo

//익명 함수 표현
var anonymousFunc = function() {};
console.log(anonymousFunc.name);

//함수 선언문
function bar() {}
console.log(bar.name);

// 18.2.5 __proto__ 접근자 프로퍼티

/**
 * 모든 객체는 [[Prototype]]이라는 내부 스롯을 갖음
 * [[Prototype]]내부 슬롯은 객체지향 프로그래밍의 상속을 구현하는 프로토타입 객체를 가리킨다
 * __proto__  프로퍼티는 [[Prototype]]내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해
 * 사용하는 접근자 프로퍼티다.
 * 
 * 내부슬롯에는 직접 접근 할수 없고 간접적인 접근 방법을 제공하는 경우에는 한하여 접근 할 수 있음
 * 
 * [[Prototype]]내부 슬롯에도 직접접근할 수 없으며, __proto__  접근자 프로퍼티를 통해 산접적으로 프로토타입 객체에 접근할 수 있음
 */


// 18 - 12 
const obj = { a: 1};

//객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype임
console.log(obj.__proto__ == Object.prototype); 

/**
 * 객체 리터럴 방식으로 생성한 객체는 프로토 타입 객체인 Object.prototype의 프로퍼티를 상속받음
 * hasOwnProperty 메서드는 Object.prototype의 메서드
 */
console.log(obj.hasOwnProperty('a'));
console.log(obj.hasOwnProperty('__proto__'));

/**
 * hasOwnProperty 메서드는 이름에서 알수 있듯이 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만
 * true를 반환하고 상속받은 프로토타입의 프로퍼티 키인 경우 false를 반환
 */

//18 . 2 . 6 prototype 프로퍼티
/**
 * prototype 프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체.
 * 즉 consturct만이 소유하는 프로퍼티
 * 
 * 일반 객체와 생성자 함수로 호출할수 없는 non-cinstructor에는 prototype 프로퍼티가 없음
 */

// 18 - 13 
// 함수 객체는 prototype 프로퍼티를 소유함
(function () {}).hasOwnProperty('prototype');

//일반 객체는 prototype 프로퍼티를 소유하지 않음
({}).hasOwnProperty('prototype');

/**
 * prototype 프로퍼티는 함수가 객체를 생성하는 생성자 함수로 호출될때 생성자 함수가 생성할 인스턴스의 프로토타입 객체를 가르킴
 */