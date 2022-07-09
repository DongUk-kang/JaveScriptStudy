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