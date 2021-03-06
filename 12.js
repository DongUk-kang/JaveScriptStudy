/**
 * 함수
 * js에서 중요한 핵심 개념
 * js의 핵심 개념인 스코프, 실행컨텍스트, 클로저, 생성자 함수에 의한 객체생성, 메서드, this, 프로퍼타입
 * 모듈화 등등 함수와 깊은 관련이있음
 * 
 * 함수는 js를 정확히 이해하고  사용하기 위해서 가장 중요
 * 
 * input > output 이 존재함
 */

//12 - 1
// f(x, y) = x + y
function add(x, y) {
    return x + y;
}

// f (2, 5) = 7
add(2, 5); //7

/**
 * 함수는 일련의 과정을 문으로 구현하고 코드블럭으로 감싸서 한의 실행단위로 정의한것
 * 함수도 입력을 받아서 출력을 내보냄
 * 
 * 함수내부로 입력을 전달 받는 변수를 매개변수
 * 입력을 인수
 * 출력을 반환값
 * 
 * 함수는 값이며, 여러개 존재할수 있으므로 특정함수를 구별하기 위해 식별자인 함수 이름을 사용할 수 있음
 * 함수정의를 통해 생성
 * js의 함수는 다양한방법으로 정의 가능 
 */

// 12 - 2
//함수 정의
function add(x, y) {
    return x + y;
}
// 함수 정의만으로 함수가 실행되지는 아님
/**
 * 수학의 함수처럼 미리 정의된 일련의 과정을 실행하기 위해
 * 필요한 입력, 인수를 매개변수를 통해 함수에 전달하면서
 * 함수의 실행을 명시적으로 지시 해야함
 * 함수 호출이라고함
 * 함수를 호출하면 코드블록에 담긴 문들이 일괄적으로 실행되고, 실행 결과 즉 반환값을 반환함
 */

// 12 - 3
// 함수 호출 예시
var result = add(2, 5);
//함수 add에 인수 2,5를 전달하면서 호출하면 7이 반환됨
console.log(result); // 7

/**
 * 함수 사용 이유
 * 
 * 함수는 필요할떄 여러번 호출할 수 있음
 * 실행시저믕ㄹ 개발자가 결정할수 있고 몇번이든 재사용이 가능함
 * 
 * 동일한 작업을 반복적으로 수행해야한다면 같은 코드를 중복해서 여러번 작성하는것은 아니다
 * 미리 정의 된 함수를 재사용하는것이 효율적
 * 
 * 함수는 몇번이든 호출할 수 있으므로 코드의 재사용이라는 측면에서 유용함
 */

/**
 * 함수를 사용하지 않고 같은 코드를 중복해서 여러번 작성하면 코드를 수정해야할때 중복된 횟수만큼
 * 코드를 수정해야함
 * 
 * 따라서 중복된 횟수에 비례해서 코드수정에 걸리는 시간이 증가함
 *실수할 가능성도 높아짐 
 *
 * 코드의 중복을 억제하고 재사용성을 높이는 함수는 "유지보수의 편의성"을 높이고 실수를 줄여 "코드의 신뢰성"을 높이는 효과가 있음
 * 함수는 객체 타입이므로 식별자를 붙일수있음 
 * 함수이름은 변수이름과 마찬가지로 함수 자신의 역할을 잘 설명해야함
 * 적절한 함수 이름은 함수의 내부 코드를 이해하지 않고도 함수의 역할을 파악할수 있게 도움을 줌
 * 이는 "코드의 가독성"을 향상시킴
 * 
 * 코드는 동작하는것만이 존재목적이 아님
 */

/**
 * 12.3 함수 리터럴
 * 
 * 자바스크립트의 함수는 객체 타입의 값
 * 숫자값을 숫자리터럴로 생성하고 객체를 객체리터럴로 생성하듯이 함수도 함수리터럴로 생성가능
 * 함수 리터럴은 function 키워드, 함수이름, 매개변수목록, 함숨몸체로 구성됨
 */

// 12 - 4
//변수에 함수 리터럴을 할당
var f = function add(x, y) {
    return x + y;
};

/**
 * 함수리터럴의 구성요성
 */

/**
 * 함수이름 
 * 
 * 함수이름은 식별자이므로 네이밍 규칙을 준수해야함
 * 함수이름은 함수 몸체 내에서만 참조할 수 있는 식별자
 * 함수이름은 생략할 수 있음 
 * 이름이 있는 함수를 기명 함수, 이름이 없는 함수를 무명/익명 함수라고하 지칭
 * 
 */

/**
 * 매개변서 목록
 * 
 * 0개이상의 매개변수를 소활로 감싸고 쉼표로 구분
 * 각 매개변수에는 함수를 호출할때 지정한 인수가 순서대로 할당함
 * 매개변수 목록은 순서에 의미가 있음
 * 매개변수는 함수 몸체 내에서 변수와 등일하게 취급됨
 * 따라서 매개변수도 변수와 마찬가지로 식별자 네이밍 규칠을 준수해야함
 */

/**
 * 함수 몸체
 * 
 * 함수가 호출되었을때 일괄적으로 실행될 문들을 하나의 실행 단위로 정의한 코드블럭
 * 함수 몸체는 함수 호출에 의해 실행됨
 */


/**
 * 함수정의
 * 함수를 호출하기 이전에 인수를 전달받을 매개변수와 실행할 문들, 그리고 반한된 값을 지정하는것을 의미
 * 정의된 함수는 js엔젠에의해 평가되어 함수객체가 됨
 */

/**
 * 함수선언문
 * function add(x, y) {
 *  return x + y;
 * }
 */

/**
 * 함수 표현식
 * var add = function(x, y) {
 *  return x + y;
 * }
 */


/**
 * Function 생성자 함수
 * var add = new Function('x', 'y', 'return x + y');
 */

/**
 * 화살표 함수 (es6)
 * var add = (x, y) => x + y;
 */

/**
 * 변수 선언과 함수 정의
 * 변수는 선언이라고 하지만 함수는 정의라고 편함
 * 함수 선언문이 평가되면 식별자가 암묵적으로 생성되고 함수객체가 할당됨
 * ecmascript 사양에서도 변수에는 선언, 함수에는 정의라고 표현함
 */

/**
 * 12.4.1 함수 선언문
 */

// 12 - 5


function add(x, y) {
    return x + y;
}

/**
 * 함수 참조
 * console.dir 은 console.log와는 달리 함수 객체의 프로퍼티까지 출력함
 * node.js 환경에서는 console.log와 같은 결과가 출력됨
 */
console.dir(add); // add(x, y)

//함수 호출
console.log(add(2, 5)); // 7

/**
 * 
 * 함수 선언문은 함수 리터럴과 형태가 동일
 * 함수 리터럴은 함수 이름을 생략할 수 있으나, 함수 선언문은 함수 이름을 생략 할 수 없음
 */

// 12 - 6

//함수 선언문은 함수 이름을 생략할 수 없음
// function (x, y) {
//     return x + y;
// }

/**
 * 함수 선언문은 표현식이 아닌 문
 * 크롬 개발자 도구의 콘솔에서 함수 선엄누을 실행하면 완료값 undefined가 출력
 * 함수 선운문이 만약에 표현식인 문이라면 완료값 undefined 대신 표현식이 평가되어
 * 생성된 함수가 출력되어야함
 */

// 12 - 7
/**
 * 함수 선언문은 표현식이 아닌 문이므로 변수에 할당x
 * 함수 선어문이 변수에 할당되는것처럼 보임
 */

var add = function add(x, y) {
    return x + y;
};

console.log(add(2, 5)); // 7

/**
 * 위코드처럼 동작하는 이유는 js엔진이 코드의 문맥에 따라 동일한 함수 리터럴을 표현식이아닌
 * 문인 함수 선언문으로 해석되는 경우와 표현식인 문인 함수 리터럴 표현식으로 해석하는 경우가 있기 때문임
 * 
 * 함수 선언문은 함수 이름을 생략할 수 없다는 점을 제외하면 함수 리터럴과 형태가 동일
 * 
 * 함수이름이 있는 기명 함수 리터럴은 함수 선언문 또는 함수 리터럴 표현식으로 해석될 가능성이있다는 의미
 */

// 12 - 8

/**
 * 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석됨
 * 함수 선언문에서는 함수 이름을 생략할수 없음
 */

function foo() { console.log('foo');}

foo(); // foo

/**
 * 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석됨
 * 함수 리터럴에서는 함수 이름을 생략할 수 있음
 */

// (function bar() {console.log('bar');});
// bar(); // 

// 12 - 9
var add = function add(x, y) {
    return x + y;
};
console.log(add(2, 5));

/**
 * 함수는 함수이름으로 호출되는것이아니라 함수객체를가리키는 식별자로호출함
 */

/**
 * 12.4.2 함수표현식
 * 
 * js의 함수는 객체 타입의 값
 * 자바스크립의 함수는 값처럼 변수에 할당 할 수도 있고
 * 프로퍼티 값이 될 수도 있으며
 * 배열의 요소가 될수도있음
 * 
 * 이처럼 값의 성질을 갖는 객체를 일급객체라고함 
 * js의 함수는 일급객체
 * 
 * 함수가 일급객체라는것은 함수를 값처럼 자유롭게 사용할 수 있다는 의미
 * 
 * 함수는 일급 객체이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당 할 수 있음
 * 이러한 함수 정의 방식을 함수 표현식이라고함 
 * 함수 선언문으로 정의한 add 함수를 함수 표현식으로 바꿔서 정의할 경우 하단 코드와 같음
 */

// 12 - 10
//함수 표현식
var add = function (x, y) {
    return x + y;
};

console.log(add(2, 5)); // 7

/**
 * 함수 리터럴의 함수 이름은 생략가능
 * 이러한 함수를 익명함수라고함
 * 함수 표현식의 함수 리터럴은 함수 이름을 생략하는것이 일반적
 * 
 * 함수 선언문에서 살펴본 바와같이 함수를 호출할때는 함수 이름이 아니라 
 * 함수 객체를 가리키는 식별자를 사용해야함
 * 
 * 함수이름은 함수 몸체 내부에서만 유효한 식별자이므로 함수 이름으로 함수를 호출할 수 없음
 */

//12 - 11

//기명 함수 표현식
var add = function foo (x, y) {
    return x + y
}

// 함수객체를 가리키는 식별자로 호출
console.log(add(2, 5)); // 7

/**
 * 함수 이름으로 호출하면 referenceError가 발생
 * 함수 이름은 함수 몸체 내부에서만 유효한 식별자
 */

// console.log(foo(2, 5));  << referenceError: foo is not defined 에러 생성

/**
 * js 엔진은 함수 선언문의 함수 이름으로 식별자를 암묵적으로 생성하고 생성된 함수 객체를 할당하므로
 * 함수 표현식과 유사하게 동작하는것처럼 보임
 * 
 * 하지만 함수 선언문과 함수 표현식이 정확히 동일하게 동작하지는 않음
 */

//함수 참조
console.dir(add); // f add(x, y)
console.dir(sub); // undefined

//함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // 타입에러

//함수 선언문
function add(x, y) {
    return x + y;
}

//함수 표현식 
var sub = function (x ,y) {
    return x - y;
}

//12.4.4
/**
 * js가 기본 제공하는 빌트인 함수인 Function 생성자 함수에는 매개변수 목록과 함수 몸체를 문자열로 전달하면서
 * new  연산자와 함꼐 호출하면 함수객체를 생성해서 반환
 * 
 * new 연산자없이 호출해도 결과는동일
 */

//12 - 13
var add = new Function('x', 'y', 'return x + y');
console.log(add(2, 5));

/**
 * Function 생성자 함수로 함수를 생성하는 방식은 일반적이지 않으며, 바람직하지도 않음
 * 
 * Function 생성한 함수는 클로저를 생성하지 않는 등 함수 선언문이나 함수표현식으로 생성한 함수와 다르게 작동함
 */

// 12 - 14

var add1 = (function () {
    var a = 10;
    return function (x, y) {
        return x + y + a;
    };
}());

console.log(add1(1, 2)); // 13

var add2 = (function () {
    var a = 10;
    return new Function('x', 'y', 'return x + y + a;');
}());

console.log(add2(1, 2)); // 레퍼런스 에러발생

// 12.4.5 화살표함수
/**
 * es6에 도임된 화살표함수는 function 키워드 대신 화살표를 사용해
 * 좀더 간략한 방법으로 함수 선언할 수 있음
 * 화살표 함수는 항상 익명함수로 정의
 */
//12 - 15
const add = (x, y) => x + y;
console.log(add(2, 5)); // 7

/**
 * 12. 5
 * 함수 호출 
 * 함수는 함수를 가리키는 식별자와 한 쌍의 소괄호인 함수 호출연산자로 호출됨
 */

/**
 * 12.5.1
 * 매개변수와 인수 
 * 함수를 실행하기 위해 필요한 값을 함수 외부에서 함수 내부로 전달할 필요가 있는 경우 
 * 매개변수를 통해 인수를 전달
 * 인수는 값으로 평가 될 수있는 표혀식이어야함
 * 인수는 함수를 호출할떄 지정하며, 개수와 타입에 제한이없음
 */

// 12 - 16
//함수 선언문
function add (x, y) {
    return x + y;
}

/**
 * 함수 호출
 * 인수 1과 2가 매개변수 x, y에 순서대로 할당되고 함수 몸체의 문들이 실행됨
 */
var result = add(1, 2);

// 12 - 17
function add(x, y) {
    console.log(x, y);
    return x + y;
}

add(2, 5);

// 12 - 18
function ad(x, y) {
    return x + y;
}

console.log(add(2));

// 12 - 19
function add(x, y) {
    return x + y;
}
console.log(add(2, 5, 10));

// 12 - 20
function add(x, y) {
    console.log(arguments);
    return x + y;
}

add(2, 5, 10);

/**
 * arguments 객체는 함수를 정의할때 매겨변수를 개수를 확정할 수 없는 가변 인자 함수를 구현할때
 * 유용하게 사용됨
 */

// 12 - 21
function add(x, y) {
    return x + y
}

//어떤 타입의 인수를 전달해야하는지 어떤 타입의 값을 반환하는지 명확하지 않음

// 12 - 22
function add(x, y) {
    return x + y;
}

console.log(add(2)); // NaN
console.log(add('a', 'b')); 'ab'

/**
 * 위코드는 js문법상 문제가 없어 실행됨
 * js 함수는 매개 변수와 인ㅅ]의 개수가 일치하지 않는지 확인하지 않음
 * js는 동적타입언어이므로 함수는 매개변수의 타입을 사전에 지정할수 없음
 */

// 12 - 23
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('인수는 모두 숫자 값이여야합니다')
    }
    return x + y;
}

console.log(add(2)); // 에러발생
console.log(add('a', 'b')) // 에러발생

/**
 * 함수 내부에서 적절한 인수가 전달되었는지 확인하더라도 부적절한 호출을 사전에 방지 할 수 없고
 * 에러는 런타임에 발생하게 됨
 * 
 * ts와 같은 정적 타입을 선언할수있는 js의 확장을 도입해서 컴파일 시점에 부적절한 호출을 방지 할 수 있는 방법도있음
 */

// 12 - 24
function add(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}

console.log(add(1,2,3)); // 6
console.log(add(1,2)) // 3
console.log(add(1)); // 1
console.log(add()); // 0

/**
 * es6에서 도입된 매개변수 기본값을 함수내에서 수행하던 인수 체크및 초기화를 간소화할수있음
 */

// 12 - 25
function add (a = 0, b = 0, c = 0) {
    return a + b + c;
}

console.log(add(1,2,3)); // 6
console.log(add(1,2)) // 3
console.log(add(1)); // 1
console.log(add()); // 0


/**
 * 12.5.3
 * 매개변수의 최대 개수
 * 
 * ecmscript 사양에서는 매개변수의 최대 개수를 대해 명시적으로 제한하지 않음
 * 하지만 물리적 한계는 있으므로 자바스크립트 엔진마다 매개변수의 최대 개수에 대한 제한이 있겠지만
 * 충분히 많은 매개변수를 지정할 수 있음
 * 
 * 
 * 매개변수는 순서에 의미가 있음
 * 매개변수가 많아지면 함수를 호출할때 전달해야할 인수의 순서를 고려해야함
 * 
 * 함수의 사용법을 이해하기 어렵고 만들고 실수를 발생시킬 가능성이 높음
 * 
 * 매개변수의 개수나 순서가 변경되면 함수의 호출 방법도 바꿔야함
 * 함수를 사용하는 코드 전체가 영향을 받아 유지보수성이 나빠짐
 * 
 * 함수의 매개변수는 코드를 이해하는데 방해되는 요소이므로 이상적인 매개변수는 0개이며
 * 적을수록 좋음
 */


/**
 * 12.5.4 
 * 반환문
 * 
 * 함수는 return 키워드와 표현식으로 이뤄진 반환문을 사용해 실행 결과를 함수 외부로 반환
 */
// 12 - 27
function multiply(x, y) {
    return x * y;
}

// 함수 호출은 반환값으로 평가됨
var result = multiply(3, 5);
console.log(result); // 15

// 12 - 28
function multiply(x, y) {
    return x * y;// 반환문
    console.log('실행되지 않음')
}
console.log(multiply(3, 5)); // 15

/**
 * 반환문인 return 키워드 뒤에 오는 표현식을 평가해 반환
 * return키워드 뒤에 반환값으로 사용할 표현식을 명시적으로 지정하지 않으면 undefuned가 반환
 */

// 12 - 29
function foo() {
    return;
}

console.log(foo()); // undefined
//반환문은 생략가능 함수는 함수 몸체의 마지막문까지 실행한 후 암묵적으로 undefined를 반환

// 12 - 30
function foo() {
    //반환문을 생략하면 암묵적으로 undefined가 반환
}
console.log(foo());

/**
 * return 키워드와 반환값으로 사용할 표현식 사이에 줄바꿈이 있으면 세미콜론 자동 사입기능에 의해
 * 세미콜론이 추가되어 다음과 같이 의도치 않은 결과가 발생할 수 있음
 */

// 12 - 31
function multiply(x, y) {
    //return 키워드와 반환값 사이에 줄바꿈이 있으면 자동삽입됨
    return
    x * y;
}
console.log(multiply(3, 5));

/**
 * 반환문은 함수 몸체 내부에서만 사용할 수 있음
 * 전역에서 반환문을 사용할 경우 문법에러가 발생
 */



/**
 * 12.6 참조에 의한 전달과 외부 상태의 변경
 * 원시 값은 값에 의한 전달 객체는 참조에 의한전달방식으로 동작함
 * 매개변수도 함수 몸체 내부에서 변수와 동일하게 취급되므로 매개변수 또한
 * 타입에 따라 값에 의한 전달, 참조에 의한 전달 방식을 그대로 따름
 * 
 * 함수를 호출하면서 매개변수에 값을 전달하는 방식을 값에의한 호출, 참조에의한호출로 구별해
 * 부르는 경우도 이씅나 동작방식은 값에 의한 전달, 참조에 의한 전달과 동일함
 */

// 12 - 33
// 매개변수 primitive는 원시값을 전달받고 obj는 객체를 전달받음
function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
}

//외부상태
var num = 100;
var person = { name: 'Lee' };

console.log(num);
console.log(person);

//원시값은 값자체가 복사되어 전달되고 객체는 참조값이 복사되어 전달됨
changeVal(num, person);

//원시값의 원본이 훼손되지않음
console.log(num); // 100

// 객체는 원본값이 훼손됨
console.log(person); // {name: 'Kim' }
// changeVal 함수는 매개변수를 통해 전달 받은 원시 타입 인수와 객체 타입 인수를 함수몸체에서 변경

/**
 * 12.7.1 즉시실행함수
 * 
 * 함수 정의와 동시에 즉시 호출되는 함수를 즉시 실행함수라고 함
 * 즉시 실행함수는 단한번만 호출되면 다시 호출할수 없음//
 */

// 12 - 34
(function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

/**
 * 즉시 실행함수는 함수이름이 없는 익명함수를 사용하는것이 일반적임
 * 함수 이름이 있는 기명 즉시 실행 함수도 사용 할 수 있음
 * 하지만 그룹연산자(...) 내의 기명함수는 함수 선언문이 아니라 함수 리터럴로 평가되며
 * 함수 이름은 함수 몸체에서만 참조할수 있는 식별자이므로 즉시 실행함수를 다시 호출할수 없음
 */

// 12 - 35
//기명 즉시 실행함수
(function foo() {
    var a = 3;
    var b = 5;
    return a * b;
}());
foo(); // 레퍼런스 에러

/**
 * 즉시 실행함수는 반드시 그룹연산자로 감싸야함
 * 그렇지않으면 에러가 발생됨
 */

// 12 -36
// function () {

// }() 
/**
 * 함수 정의가 함수 선언문의 형식에 맞기 않아 에러발생
 */

// 12 - 37
// function foo() {
//     //...
// }();
/**
 * js엔진이 암묵적으로 수행하는 세미클론 자동상입 기능에 의해 함수 선언문이 끝나는 위치
 * 함수 코드 블록이 닫는 중괄호 뒤에 ;이 암묵적을 추가되기떄문에 에러발생
 */

// 12 - 38
// function foo() {}(); => function foo() {}; ();
/**
 * 함수 선언문 뒤의 (...)는 함수 호출 연산자가 아니라 그룹연산자로 해석되고 그룹연산자에 피연산자가 없기떄문에 에러발생됨
 *  */ 

// 12- 42
//즉시 실행 함수도 일반 함수처럼 값을 반환할수 있음
var res = (function () {
    var a = 3;
    var b = 5;
    return a * b;
}());
console.log(res); // 15

// 즉시 실행 함수에도 일반함수처럼 인수를 전달할 수 있음
res = (function (a, b) {
    return a * b;
}(3, 5));
console.log(res);


/**
 * 12.7.2 재귀함수
 * 
 * 함수가 자기 자신을 호출하는것을 재귀호출이라고함
 * 재귀함수는 자기 자신을 호출하는 행위
 */

// 12 - 43
function countdown(n) {
    for (var i = n; i >= 0; i--) console.log(i)
}
countdown(10);

// 12 - 44
function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n - 1); // 재기 호출
}
countdown(10);

//자기 자신을 호출하는 재귀함수를 사용하면 반복문없이 구현 가능


// 12 - 45 
/**
 * 팩토리얼은 1부터 자신까지의 모든양의 정수의 곱
 * n! = 1 * 2 * ... * (n - 1) * n
 */

function factorial(n) {
    //탈출조건 : n이 1이하일때 재귀 호출을 멈춤
    if ( n <= 1) return 1;
    //재귀호출
    return n * factorial(n - 1);
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))

//12 - 46
// 함수 표현식
var factorial = function foo(n) {
    //탈출조건: n이 1 이하일때 재귀 호출을 멈춤
    if (n <= 1) return 1;
    //함수를 가리키는 식별자로 자기 자신을 재귀 호출
    return n * factorial(n - 1);
    /**
     * 함수 이름으로 자기 자신을 재귀 호출 할 수 있음
     * console.log(factorial === foo); // true
     * return n * foo (n - 1)
     */
};
console.log(factorial(5));
/**
 * 재귀 함수는 자신을 무한 재귀 호출함
 * 따라서 재귀 함수내에는 재귀 호출을 멈출수 있는 탈출 조건을 반드시 만들어야함
 * 대부분의 재귀 함수는 for문 또는 while문으로 구현가능 
 */

// 12 - 47

function factorial(n) {
    if (n <= 1) return 1;
    var res = n;
    while (--n) res *= n;
    return res;
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))


/**
 * 재귀함수는 반복되는 처리를 반복문없이 구현할수 있다는 장점이있지만,
 * 무한 반복에 빠질 위험이 있음
 * 재귀함수는 반복문을 사용하는것보다 재귀 함수를 사용하는 편이 더 직관적으로 이해하기 쉬울떄만 한정적으로 사용하는것이 바람직
 */

//12.7.3
/**
 * 함수 내부에 정의된 함수를 정첩 함수또는 내부함수라고 함
 * 중첩함수를 포함하는 함수는 외부함수라고 부름
 * 중첩함수는 외부 함수 내부에서만 호출할수 있음
 * 일번적으로 중접함수는 자신을 포함하는 외부 함수를 돕는 헬퍼 함수의 역할을함
 */

// 12- 48
function outer() {
    var x = 1;
    //중첩함수
    function inner() {
        var y = 2;
        //외부 함수의 변수를 참조할 수 있음
        console.log(x + y); // 3
    }
    inner();
}
outer();

/**
 * es6부터 함수 정의는 문이 위치할 수 있는 문맥이라면 어디든지 가능
 * 함수 선언문의 경우 es6이전에는 코드의 최상위 또는 다른 함수 내부에서만 정의 할 수 있었으나
 * es6에서는 if문이나 for문 등의 코드 블록내에서도 정의할 수 있음
 * 
 * 단 호이스팅으로 인해 혼란인 발생 할 수 있으므로 if문이나 for 문 등의 코드 블록에서 함수 선언문을 통해
 * 함수를 정의하는것이 바람직하지 않음
 * 중첩 함수는 스코프와 클로저에 깊은 관련이 있음
 */

// 12.7.4
// 12 - 49
//n만큼 어떤일을 반복함
function repeat(n) {
    //i를 출력
    for (var i = 0; i < n; i++) console.log(i);
}
repeat(5);

/**
 * repeat함수는 매개변수를 통해 전달받은 숫자만큼 반복하며 콘솔로그(i)를 호출함
 * 이떄 repeat함수는  콘솔로그(i)에 강하게 의존하고 있어 다른일을 할수 없음
 * 만약 repeat함수의 반복문 내부에서 다른일을 하고 싶다면 함수를 새롭게 정의해야함
 */

// 12 - 50
function repeat(n) {
    //i를 출력
    for (var i = 0; i < n; i++) console.log(i);
}
repeat(5);

//n 만큼 어떤일을 반복함
function repeat2(n) {
    for (var i = 0; i < n; i++) {
        //i가 홀수일때만 출력함
        if (i % 2) console.log(i);
    }
}
repeat2(5);

/**
 * 위 예시는 함수들은 반복하는일은 변하지않고 공통적으로 반복하면서 하는일의 내용은 다르다
 * 함수의 일부분만이 다르기 떄문에 매번 함수를새롭게 정의해야함
 * 이문제는 함수를 합성하는것으로 해결가능
 * 함수의 변하지 않는 공통 로직은 미리 정의해두고 경우에따라 변경되는 로직은 추상화해서 함수 외부에서 함수 내부로 전달함
 */

// 12 - 51
// 외부에서 전달받은 f를 n만큼 반복호출
function repeat(n, f) {
    for (var i = 0; i < n; i++) {
        f(i); // i를 전달하면서 f를 호출
    }
}

var logAll = function (i) {
    console.log(i);
}

//반복호출할 함수를 인수로 전달
var logOdd = function(i) {
    if (i % 2) console.log(i);
};
repeat(5, logOdd)

/**
 * 위 repeat함수는 경우 따라 변경되는 일을 함수 f로 추상화 했고 이를 외부에서 전달 받음
 * js의 함수는 일급 객체이므로 함수의 매개변수를 통해 함수를 전달할수 있음
 * repeat함수는 더이상 내부로직에 강력히 의존하지 않고 외부에서 로직의 일부분을 함수로 전달받아 수행하므로 더육 유욘한 구조를 갖게됨
 * 
 * 
 * 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백함수라고하며,
 * 매개변수를 통해 함수의 외부에서 콜백함수를 전달받은 함수를 고차함라고 함
 * 
 * 중첩함수가 외부 함수를 돕는 헬퍼함수의 역할을 하는것처럼 콜백 함수도 고차함에 전달되어 헬퍼함수의 역할을함
 * 중첩함수는 고정되어 있어서 교체하기 곤란하지만 콜백함수는 함수 외부에서는 고차 함수 내부로 주입하기 떄문에
 * 자유롭게 교체할 수 있다는 장점이 있음
 * 고차함수는 콜백 함수를 자신의 일부분을 합성
 * 
 * 고차 함수는 매개변수를 통해 전달받은 콜백함수의 호출시점을 결정해서 호출함
 * 콜백함수는 고차함수에 의해 호출되며 이떄 고차 함수는 필요에 따라 콜백 함수에 인수를 전달할 수 있음
 * 
 * 고차 함수에 콜백 함수를 전달할때 콜백함수를 호출하지 않고 함수 자체를 전달해야함
 * 
 * 콜백함수가 고차함수 내부에만 호출된다면 콜백함수를 익명 함수 리터럴로 정의하면서 곧바로 고차 함수에 전달하는것이 일반적
 */

// 12 - 52
/**
 * 익명 함수 리터럴을 콜백함수로 고차함에 전달함
 * 익명함수 리터럴은 repeat함수를 호출할때마다 평가되어 함수 객체를 생성
 */
repeat(5, function (i) {
    if (i % 2) console.log(i);
});

/**
 * 콜백함수로서 전달된 함수 리터럴은 고차함수가 호출될때마다 평가되어 함수객체를 생성함
 * 콜백함수를 다른곳에서도 호출할 필요가 있거나 콜백함수를 전달 받는 함수가 자주 호출된다면 함수외부에서 콜백함수를 정의한 후 
 * 함수 참조를 고차함수에 전달하는 편이 효율적임
 */

// 12 - 53
//lodOdds 함수는 단한번만 실행됨
var logOdds = function (i) {
    if (i % 2) console.log(i);
};

//고차함수에 함수 참조를전달한다
repeat(5, logodds); 

/**
 * 위 예제의 logOdds 함수는 단한번만 생성됨
 * 콜백함수를 익명함수 리터럴로 정의하면서 곧바로 고차함수에 전달하면 고차함수가 호출될때마다 콜백함수가 생성됨
 * 
 * 콜백 함수는 함수형 프로그래밍 패러디임뿐만 아니라 비동기처리에 활용되는 중요패턴
 */

// 12 - 55
// 콜백함수를 사용하는 고차 함수 map
var res = [1, 2, 3].map(function (item) {
    return item * 2
});

console.log(res);

//콜백 함수를 사용하는고차함수 필터
res = [1, 2, 3].filter(function (item) {
    return item % 2;
});
console.log(res);

//콜백 함수를 사용하는 고차함수 reduce
res = [1, 2, 3].reduce(function (acc, cur) {
    return acc + cur;
}, 0);

console.log(res);

//12.7.5 순수 함수와 비순수 함수
/**
 * 함수형 프로그래밍에서는 어떤 외부상태에 의존하지도 않고 변경하지도 않는,
 * 즉 부수 효과가 없는 함수를 순수 함수라고함
 * 외부 상태에 의존하거나 외부 상태를 변경하는 즉 부수효과가 있는 함수를 비순수함수라고함
 * 
 * 순수함수는 동일한 인수가 전달되면 언제나 동일한 값을 반환하는 함수
 * 즉 순수함수는 어떤 외부 상태에도 의존하지 않고 오직 매개변수를 통해 함수 내부로 전달된 인수게에만 의존해 값을 생성해 반환함
 * 
 * 함수의 외부 상태에 의존하는 함수는 외부 상태에 따라 반환값이 달라짐
 * 
 * 외부 상태에는 전역변수, 서버데이터, 파일, 콘솔, 돔 등이 있다
 * 
 * 만약 외부 상태에는 의존하지 않고 함수 내부상태에만 의존한다 해도 그 내부 상태가 호출될떄마다 변화하는 값이라면
 * 순수함수가 아님
 * 
 * 순수함수는 일반적으로 최소 하나 이상의 인수를 전달받음
 * 인수를 전달받지 않는 순수함수는 언제나 동일한 값을 반환하므로 결국 상수와 마찬가지임
 * 
 * 최소 하나 이상의 인수를 전달받지 않는 순수함수는 그다지 의미가없음
 * 순수하는 인수를 변경하는 않는것이 기본
 * 
 * 순수 함수는 인수의 불변성을 유지
 * 
 * 순수함수의 또 하나의 특징은 함수의 외부 상태를 변경하지 않는다는것이다
 * 즉, 순수함수는 어떤 외부 상태에도 의존하지 않으며, 외부 상태를 변경하지도 않는 함수
 */

// 12 - 56
var count = 0; // 현재 카운트를 나태내는 상태

//순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환함
function increase(n) {
    return ++n;
}

//순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count);

count = increase(count);
console.log(count);

/**
 * 반대로 함수의 외부 상태에 따라 반환값이 달라지는 함수
 * 다시말해 외부 상태에 의존하는 함수를 비순수라고함
 * 
 * 비순수함수의 또 하나의 특징은 순수함수와는 달리 함수의 외부 상태를 변경하는 부수효과가있음
 * 즉, 비순수 함수는 외부 상태에 의존하거나 외부상태를 변경하는 함수
 */


// 12 - 57
var count = 0; // 현재 카운트를 나타내는 상태: increase함수에 의해 변화함

//비순수 함수
function increase() {
    return ++count; //외부 상태에 의존하며 외부상태를 변경
}

// 빈순수 함수는 외부 상태를 변경하므로 상태 변화를 추적하기 힘듬
increase();
console.log(count);

increase();
console.log(count);

/**
 * 위 예제와 같이 인수를 전달받지 않고 함수 내부에서 외부상태를 직접 참조하면 외부상태에 의존하게 되어 
 * 변환값이 변할 수 있고, 외부상태도 변경할 수 있으므로 비순수 함수가됨
 * 
 * 함수 내부에서 외부 상태를 직접 참조하지 않더락도 매개변수를 통해 객체를 전달받으면 빈순수 함수가 됨
 * 
 * 함수가 외부 상태를 변경하면 상태 변화를 추적하기 어려워짐
 * 따라서 함수 외부 상태의 변경을 지영하는 순수함수를 사용하는것이 좋음
 * 예제의 increase 함수와 같은 비순수 함수는 코드의 복잡성을 증가시킨다.
 * 
 * 비순수 함수를 최대한 줄이는것은 부수효과를 최대한 억제하는것과 같음
 * 
 * 함수형 프로그래밍은 순수 함수와 보조 함수의 조합을 통해 외부 사앹를 변경하는 부수 효과를 최소화해서
 * 불변성을 지향하는 프로그래밍 패러다임
 * 
 * 로직내 존재하는 조건문과 반복문을 제거해서 복잡성을 해결하며,
 * 변수 사용을 억제하거나 생명주기를 최소화해서 상태변경을 피해 오류를 최소한것을 목표로함
 * 
 * 조건문이나 반복문은 로직의 흐름을 이해하기 어렵게해서 가독성을 해치고, 변수의 값은 누군가의 의해
 * 언제든지 변경될 수 있어 오류 발생의 근본적 원인이 될 수 있기 때문이다
 * 
 * 함수형 프로그래밍은 결수 순수함수를 통해 부수 효과를 최대한 억재해 오류를 피하고 프로그램의 안정성을 높이려는
 * 노력의 일환이라고 설명됨
 * 
 * js는 멀티패러다임 언어이므로 객체지향 프로그래밍뿐만아니라 함수형 프로그래밍을 적극적으로 활용하고있음 
 */
