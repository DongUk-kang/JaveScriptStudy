/**
 * 타입변환
 * 개발자가 의도적으로 값의 타입을 변환한 경우는 명시적 타입 explicit coercion & type casting
 */

// 9 -1 

var x= 10;
// 명시적 변환 타입
// 숫자를 문자열로 타입 캐스팅
var str = x.toString();
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아님
console.log(typeof x, x); // number 10

/**
 * 개발자의 의도와는 상관없이 표현식을 평가하는 도중에 
 * 자바스크립트 엔진에 의해 암묵적으로 타입이 변환되기도함
 * implicit coercion(암묵적 타입 변환) & type coercion(타입 강제 변환)
 */

// 9 -2 
var x = 10;
// 암묵적 타입변환
// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성
var str = x + '';
console.log(typeof str, str); // string 10
// x변수의 값이 변경된 것은 아닌다
console.log(typeof x, x); // number 10

/**
 * 암묵적 타입 변환
 * 자바스크립트 엔진의 표현식을 평가할떄 개발자의 의도와는 상관없이 코드의 문맥을 고려해
 * 암묵적으로 데이터 타입을 강제변환함
 */

// 9 - 3
// 피연산자가 모두 문자열 타입이어야하는 문맥
'10' + 2 // '102'

// 피연산자가 모두 숫자 타입이어야하는 문맥
5 * '10' // 50

// 피연산자 또는 표현식이 불리언 타이업야하는 문맥
!0 // true
if (1) {

}

//문자열 타입으로 변환
// 9 - 4
1 + '2' // '12'

// 9 - 5
`1 + 1 = ${1 + 1}` // "1 + 1 = 2"

// 숫자타입 
// 9 -6

// 숫자타입 
0 + '' // '0'
-0 + "" // "0"
1 + '' // '1'
-1 + '' // '-1'
Nan + '' // 'Nan'
Infinity + '' // 'Infinity'
-Infinity + '' // '-Infinity'

// 불리언타입

true + '' // 'true'
false + '' // 'false'

// null 타입
null + '' // 'null'

// undefined 타입
undefined + '' // 'undefined'

// 심벌 타입
(Symbol()) + '' // type Error: Cannot convert a Symbol value to a string

//객체 타입
({}) + '' // "{object object}"
Math + '' // "[object Math]"
// [] + '' // ""
[10, 20] + '' // "10, 20"
(function(){}) // "function(){}"
Array + '' // "function Array() {[native code]}"


/**
 * 산술연산자 
 * 산술연산자의 역할은 숫자 값을 만드는것
 * 산술 연산자의 모든 피연산자는 코드 문맥상 모두 숫자 타입이어야함
 * 자바스크립트 엔진은 산술 연산자 표현식을 평하기 위해 산술 연산자의 피연산자 중에서 숫자 타입이 아닌 
 * 피연산자를 숫자 타입으로 암묵적 타입 변환
 * 피연산자를 숫자 타입으로 변활할 수 없는 경우는 산술 연산을 수행할수없어 평가 결과는 nan이 됨
 */
// 9 - 7
1 - '1' // 0
1 * '10' // 10
1 / one // Nan

// 9 - 8
'1' > 0 // true


// 9 - 9
//문자열 타입
+"" // 0
+'0' // 0
+'1' // 1
+'string' // nan

//불리언 타입
+true // 1
+false // 0

// null타입
+null // 0

//undefined 타입
+undefined // nan

//sybol 타입
+Symbol() // type error cannot convert a symbol value to a number

// 객체 
+{} // NaN
+[] // 0
+[10, 20] // NaN
+(function(){}) // NaN

//9 - 10
if ('') console.log(x);
/**
 * if문 또는 for문 과 같은 제어문 또는 삼향 조건 연산자의 조건식은 불리언값 즉 논리적 참 / 거짓으로 평되어야하는 표현식
 * 자바스크립트 엔진은 조건식의 평가 결과를 불리언 타입으로 암묵적 타입변환
 */


// 9 - 11
if ('') console.log('1');
if (true) console.log('2');
if (0) console.log('3');
if ('str') console.log('4');
if (null) console.log('5');

// 9 - 12
if (!false) console.log(false + 'is falsy value');
if (!undefined) console.log(undefined + 'is falsy value');
if (!null) console.log(null + 'is falsy value');
if (!0) console.log(0 + 'is falsy value');
if (!NaN) console.log (NaN + 'is falsy value');
if (!'') console.log ('' + 'is falsy value');

// 9 - 13
// 전달받은 인수가 falsy 값이면 참, truthy 값이면 거짓을 반환한다
function isFalsy(v) {
    return !v;
}

// 전달 받은 인수가 truthy 값이면 true, falsy 값이면 false를 반환
function isTruthy(v) {
    return !v;
}

// 하단 코드는 전체적으로 true를 반환함
isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy('');

isTruthy(true);
isTruthy('0'); // 빈 문자열이 아닌 문자열은 trythy값
isTruthy({});
isTruthy([]);

// 9 - 14
/**
 * 개발자의 의도에 따라서 명시적으로 타입을 변경하는 방법은 다양함
 * 표전 빌트인 생성자 함수(스트링, 넘버, 불리언)를 new 연산자 없이 호출하는 방법 & 빌트인 메서드를 사용하는 방법, 암묵적 타입변환
 * 문자열 타입이 아닌 값을 문자열 타입으로 반한하는 방법
 */

//1, String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 -> 문자열 타입
String(1); // "1"
String(NaN); // 'NaN'
String(Infinity); // 'infinity'

// 불리언 타입 -> 문자열 타입
String(true); // 'true'
String(false); // 'false'

// 2. object.prototype.toString 메서드를 사용하는방법
// 숫자타입 -> 문자열 타입
(1).toString(); // '1'
(NaN).toString(); // 'nan'
(Infinity).toString(); // 'infinity'

// 불리언타입 -> 문자열타입
(true).toString(); // true
(false).toString(); // false

//3 문자열 연결 연산자를 이용하는 방법
// 숫자타입 -> 문자열 타입
1 + ''; // '1'
NaN + ''; // 'NaN'
Infinity + ''; 'infinity'

// 불리언 타입 -> 문자열타입
true + ''; // 'true'
false + ''; // 'false'


// 9.3.2
/**
 * 숫자 타입이 아닌 값을 숫자 타입으로 변환하는 방법
 * Number 생성자 함수를 new 연산자 없이 호출하는방법
 * parseInt, parseFloat 함수를 사용하는 방법 (문자열만 숫자타입으로 변환 가능)
 * +단향 산술 연산자를 이용하는 방법
 * *산술 연산자를 이용하는 방법
 */

// 9 - 15 

// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 -> 숫자타입
Number('0'); //0
Number('-1'); // -1
Number('10.53'); // 10.53

//불리언타입 -> 숫자타입
Number(true); // 1
Number(false); // 0

//2. parseInt, parseFloat 함수를 사용하는 방법 (문자열만 변환 가능 )

// 문자열 타입 -> 숫자 타입
parseInt('0'); // 0
parseInt('-1'); // -1
parseInt('10.53'); // 10.53

// 3. +단향 산술 연산자를 이용하는 방법
// 문자열 타입 -> 숫자타입 
+'0'; // 0
+'1'; // +1
+'10.53';; // 10.53

//불리언 타입 -> 숫자타입
+true; // 1
+false; // 0

// 4. *산술 연산자를 이용하는 방법
//문자열타입 -> 숫자 타입
'0' * 1; // 0
'-1' * 1; // -1
'10.53' * 1; // 10.53
// 불리언 타입 -> 숫자타입
true * 1; // 1
false * 1; // 0


//9.3.3 불리언 타입으로 변환
/**
 * 불리언 타입이 아닌 값을 불리언 타입으로 변환하는 방법
 * 1. Boolean 생성자 함수를 new연산자 없이 호출하는 방법
 * ! 부정논리 연산자를 두번 사용하는 방법
 */

// 1. Boolean 생성자 함수를 new 연산자없이 호출하는 방법
// 문자열 타입 -> 불리언 타입
Boolean('x'); // true
Boolean(''); // false
Boolean('false'); //true

//숫자타입 -> 불리언타입
Boolean(0);//false
Boolean(1); // true
Boolean(NaN); // false
Boolean(Infinity); // true

//null 타입 -> 불리언
Boolean(null); // false
//undefined 타입 -> 불리언타입
Boolean(undefined); // false

//객체타입 -> 불리언
Boolean({}); // true
Boolean([]);// true

//2. !부정 논리 연산자를 두번 사용하는 방법
//문자열 타입 -> 불리언타입
!!'x'; // true
!!''; // false
!!'false' // true

//숫자타입 -> 불리언 타입
!!0; // false
!!1; // true
!!NaN; // false
!!Infinity; // true
//null 타입 -> 불리언타입
!!null; // false
//undefiend ->  불리언타입
!!undefined; // false
//객체 타입 -> 불리언 타입
!!{}; // true
!![]; // true

/**
 * 논리합(||) 또는 논리곱(&&) 연산자 표현식의 평가 결과를 불리언 값이 아닐수도 있음
 * 논리합(||) 또는 논리곱(&&) 연산자 표현식은 언제나 2개의 피연산자중 한쪽으로 평가됨
 */

/**
 * 논리곱 연산자는 두개의 피연산자가 모두 true일때만 true로 반환
 * 논리곱 연산자는 좌향에서 우향으로 평가진행
 */
// 9 - 17
'Cat' && 'Dog' // Dog

// 9 - 18
'Cat' || 'Dog' // Cat
/**
 * 논리합(||)연산자와 논리곱 연산자와 동일하게작동
 * 논리합 연산자는 두개의 피연산자 중 하나만 true로 평가되어도 true를 반환
 * 논리합 연산자도 좌향에서 우향으로 평가진행
 * 논리곱 연산자 논리합 연산자는 논리 연산의 결과를 경ㄹ정하는 피연산자를 타입 변환하지않고 그대로 반환하는데 이를 단축 평가라고함
 * 단축평가는 표현식을 평가하는 동중에 평가결과가 확정된 경우 나머지 평가과정을 생략하는것
 */

// 9 - 19
// 논리합 연산자
'Cat' || 'Dog' // 'Cat'
false || 'Dog' // 'Dog
'Cat' || false // 'Cat'

//논리곱 연산자
'Cat' && 'Dog' // 'Dog'
false && 'Dog' // false
'Cat' && false // false
/**
 * 단축평가를 사용하면 if문을 대체가능
 * 어떤 조건이 Truthy 갑(참으로 평가되는 값)일 때 무언가를 해야한다면 논리곱 연산자표현식으로 if문 대체할 수 있음
 */

// 9 - 20
var done = true;
var message = '';

// 주어진 조건이 true 일때
if (done) message = '완료';

//if문은 단축 평가로 대체가능
// done이 true라면 message에 '완료'를 할당
message = done && '완료';
console.log(message); // '완료'
/**
 * 조건이 Falsy 값(거짓으로 평가되는 값)일때 무언가를 해야한다면 논리합 연산자 표ㅕ현식으로 if문을 대체 가능
 * 
 */

// 9 - 21
var done = false;
var message = '';
//주어진 조건이 false 일때
if (!done) message = '미완료';

// if문은 단축평가로 대체가능
// done이 false라면 message에 '미완료'를 할당
message = done || '미완료';
console.log(message); // '미완료'

// 삼항 조건 연산자는 if else문을 대체 할수 있음

var done = true;
var message = '';

// if else 문
if (done) message = '완료';
else message = '미완료';
console.log(message); // 완료

//if else 문은 삼항 조건 연산자로 대체 가능
message = done ? '완료' : '미완료';
console.log(message); // 완료

// 9 - 23
var elem = null;
var value = elem.value; // 타입에러 발생

// 9 - 24
// 단축 평가를 사용시 에러 발생 x
var elem = null;
/**
 * elem이 null이거나 undefined와 같은 Falsy 값이면 elem으로 평가
 * elem이 Truthy 값이면 elem.value로 평가
 */
var value = elem && elem.value; // null

/**
 * 함수 매개변수에 기본값을 설정할때
 * 함수를 호출시 인수를 전달하지 않으면 매개변수에는 undefined가 할당
 * 단축 평가를 사용해 매개변수의 기본값을 설정하면 undefined로 인해 발생하는 에러를 방지할 수 있음
 */

// 9 - 25
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
}

getStringLength() ; // 0
getStringLength('hi'); //2

//es6의 매개변수 기본값 설정
function getStringLength(str = '') {
    return str.length;
}

getStringLength(); // 0
getStringLength('hi'); // 2

/**
 * 9.4.2 옵셔널 체인징
 * es11에 도입됨
 * 연산자 ? .는 좌향의 피연산자가 null 또눈 undefined인 경우 undefined를 반환 그렇지않을경우 우향의 프로퍼티참조릴 이어감
 */
// 9 - 26
var elem = null;
// elem null 또는 undefined이면 undefined를 반환하고 그렇지 않으면 우향의 프로퍼티 참조를 이어감
var value = elem?.value;
console.log(value); // undefined
/**
 * 옵셔널 체이닝 연산자 ?. 는 객체를 가리키기를 기대하는 변수가 null또는 undefined아닌지 확인하고 프로퍼티를 참조할떄 유용
 * 옵셔널 체이닝 연산자가 도입되기 이전에는 논리연산자를 사용한 단축 평가를 통해 변수가 null 또는 undefine인지 확인했었음
 */

// 9 - 27
var elem = null;

//elem 이 Falsy ㄱ밧이면 elem으로 평가 Truthy 값이uas elem.valuefh vudrk
var value = elem && elem.value;
console.log(value); // null
/**
 * 논리 연산자 &&는 좌향 연산자가 false로 평가되는 Falsy갑이면 좌향 피연산자를 그대로 반환 
 * 좌향 연산자가 Falsy 값인 0이나 ''인 경우도 마찬가지
 * 0 또는 '' 객체로 평가될떄도있음
 */

// 9 -28
var str = '';
//문자열의 길이를 참조(length)
var length = str && str.length;

//문자열의 길이를 참조하지 못함
console.log(length); // ''
/**
 * 옵셔널 체이닝 연산자는 좌향 피연산자가 false로 평가되는 Falsy값이라도 null 또는 undefined가 아니면 우향의 프로퍼티 참조를 이어간다 
 */

// 9 -29 
var str = '';
//문자열이 길이를 참조
//이때 좌향 피연산자가 false로 평가되는 Flasy 값이라도 null 또는 undefined가 아니면 우향의 프로퍼티를 참조함
var length = str?.length;
console.log(length); // 0

/**
 *  9.4.3
 * es11에 처음도입된 null 병합 연산자는 좌향의 피연산자가 null 또는 undefined인 경우 우향의 피연산자를 반환 그렇지않으면
 * 좌향의 피연산자를 반환
 * null 병합 연산자는 ??는 변수에 기본값을 설정할때 유용함
 */

//좌향의 피연산자가 null 또는 undefined이면 우향의 피연산자를 반환 그렇지 않을 경우 좌향의 피연산자를 반환함
// 9 - 30
var foo = null ?? 'default string';
console.log(foo); // 'default string';

/**
 * null 병합 연산자 ??는 변수에 기본값을 설정할때 유용함
 * null 병합 연산자?? 도입전에는 논리연산자||를 사용한 단축평가를 통해 변수의 기본값을 설정함
 * 
 * 논리 연산자 ||를 사용한 단축 평가의 경우 좌향의 피연산자가 false로 평가되는 Falsy값이면 우향의 피연산자를 반환
 * 만약 Falsy 값인 0 이나 ""도 기본값으로서 유효하다면 예기치않은 동작 발생됨
 */

// 9 - 31
var foo = "" || 'default string';
console.log(foo); // 'default string'

/**
 * null 병합 연산자는 좌향의 피연산자가 false로 평가되는 Falsy값이라도 null 또는 undefined가 아니면 좌향의 피연산자를 그대로 반환
 */

// 9 - 32
var foo = '' ?? 'default string';
console.log(foo); // ""