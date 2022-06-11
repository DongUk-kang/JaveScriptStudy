/**
 *  원시타입과 객체타입으로 자바스크립트 타입 구분
 *  원시값은 변경 불가능한 값 객체값은 변경가능한 값
 * 
 *  원시값을 변수에 할당하면 변수에는 실제 값이 저장
 * 개체를 변수에 할당하면 변수에는 참조값이 저장
 * 
 *  원시값을 갖는 변수를 다른 벼ㅕㄴ수에 할당할 경우 원본의 우너시 값이 복사되어 전달 > 갑ㅂㅅ에 의한 전달
 * 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참쪼 값이 복사되어 전달 > 참조에 의한 전달
 */


// 11.1 원시값
/**
 * 11.1.1 변경 불가능한 값
 * 원시타입의 값은 변경불가능한 값
 * 한번 생성된 원시값은 읽기 전용값으로 변경 불가능 
 * */

// 11/1

//const 키워드를 사용해 선언한 변수는 재할딩이 금지 상수는 재할당이 금지된 변수임
 const o = {};

 // const 키워드를 사용해 선언한 변수에 할당한 원시값은 변경x
 // 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경 가능
 o.a = 1;
 console.log(o) // {a: 1}

 /**
  * 원시값은 변경이 불가능한 값 "onlyread" 
  * 원시값은 어떠한 일이 생겨도 불변함
  * 불변하는 원시값의 특성은 데이터의 신뢰성을 보장함
  */

 /**
  * 11.1.2 문자열과 불변성
  * 원시값을 저장하려면 먼저 확보해야하는 메모리 공간의 크기를 결정해야함
  * 원시 타입별로 메모리 공간의 크기가 미리정해져 있다고 했다
  */

 // 11.2
 // 문자열은 0개 이상의 문자로 이뤄진 집합
 var str1 = ''; // 0개의 문자로 이뤄진 문자열(빈문자열)
 var str2 = 'Hello' // 5개의 문자로 이뤄진 문자열

 //js에서는 편의를 위해 원시타입인 문자열 타입을 제공함
 //js의 문자열은 원시타입이며, 변경불가능

 //11.3
 var str = 'Hello';
 str = 'world'

 /**
* 첫번째 문이 실행되면 문자열 'Hello'가 저장된 메모리 공간의 첫번째 메모리 셀주소를 가르킴
 문자열 두번째 문이 실행되면 이전에 생성된 문자열 수정하는것이 아닌 새로운 문자열을 메모리에 생성 후 식별자 str은 이것을 가르킴
 이때 문자열은 모두 메모리에 존재함 
 식별자 str은 문자열 'Hello'를 가리키고있다가 문자열 'world'를 가리키도록 변경
 */

 //유사 배열 객체
 /**
  * 유사 배열 객체란 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체
  * 문자열은 마치 배열처럼 인덱스를 통해 각 문자에 접근할 수 있음
  * length 프로퍼티를 갖기 때문에 유사 배열 객체이고 for문으로 순회할수있음
  */

 // 11.4
 var str = 'string';
 //문자열은 유사 배열이므로 배열과 윳ㅂㅈ다하게 인덱스를 사용해 각 문자에 접근할수있음
 console.log(str[0]); //s

 //원시 값인 문자열이 객체처럼 동작
 console.log(str.length); // 6
 console.log(str.toUpperCase()); //STRING

 // 11.5
 var str = 'string';

/**
 * 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근 할 수 있음
 * 하지만 문자열은 원시값 이므로 변경할 수 없다. 이때 에러가 발생안됨
 */

str[0] = 'S';
console.log(str); // string

/**
 * str[0] = 'S' 처럼 이미 생성된 문자열의 일부문자를 변경해도 반영되지 않음
 * 문자열은 변경 불가능한값이기떄문에
 * 이처럼 한번 생성된 문자열을 읽기 전용값으로서 변경할수 없음
 * 원시값은 어떤일이 있어도 불변하기때문에 데이터의 신뢰서응ㄹ 보장함
 * 
 * 그러나 변수에 새로운 문자열을 재할당하는 것은 물론 가능
 * 기존 문자열을 변경하는것이 아니라 새로운 문자열을 새롭게 할당하는것이기 때문에
 */

// 11.6
var score = 80;
var copy = score;

console.log(score); // 80
console.log(copy); // 80

score = 100;

console.log(score); // 100
console.log(copy); // 80

/**
 * score 변수에 숫자값 80을 할당
 * copy변수에 score 변수를 할당
 * 그 후 score 변수에 새로운 숫자 값 100을 재할당할경우
 * copy = score에서 score는 변수 값 80으로 평가되여 copy 변수에도 80이 할당될것
 * 변수에 원시 값을 갖는 변수를 할당하면 할당받는 변수(copy)에는 할당되는 변수 (score)의 원시값이 복사되어 전달됨
 * 값에의한전달이라하고함
 * 
 * copy 변수에 원시값을 갖는 score변수를 할당하면 할당받는 변수 copy에는 할당되는 변수 score의 원시 값 80이 복사됨
 */

// 11.7
var score = 80;

var copy = score;
console.log(score, copy); // 80 80
console.log(score === copy); // true

//11.8 
var score = 80;
//copy 변수이는 score 변수의 값 80이 복사되어 할당
var copy = score;
console.log(score, copy); // 80 80
console.log(score === copy); // true

/**
 * score 변수와 copy 변수의 값은 다른 메모리 공간에 저장된 별개의 값
 * score 변수의 값을 변경해도 copy 변수의 값에는 어떠한 영향x
 */
score = 100;
console.log(score, copy); // 100 , 80
console.log(score === copy); // false

// score 변수와 copy 변수값 80은 다른 메모리 공간에 저장된 별개의 값을 주의
// score 변수의값을 변경해도 copy 변수의 값에는 어떠한 영향도 주지않음

//11.9
var x = 10;

//11.10
var copy = score;

// 11-11
var person = {
    name: 'Lee'
};

//11-12
var person = {
    name: 'Lee'
};

//person 변수에 저장되어있는 참조 값으로 실제 객체에 접근
console.log(person); // {name: "Lee"}

//11.13
var person = {
    name: "Lee"
};
//프로퍼티값 갱신
person.name = 'Kim';
//프로퍼티 동적 생성
person.address = 'Seoul';
console.log(person); // {name: 'Kim', address: 'Seoul'}

//shallow copy, deep copy
/**
 * 객체를 프로퍼티 ㄱ밧으로 갖는 객체의 경우 얕은 복사는 한단계까지만 복사하는 것
 * 깊은 복사는 객체에 중첩되어있는 객체까지 모두 복사하는것
 */

const o = { x: { y: 1} };

//shallow copy
// const c1 = { ...o }; 
// console.log(c1 === o); // false 
// console.log(c1.x === o.x ); // true

//lodash의 cloneDeep을 사용한 깊은 복사
// npm i loadsh 설치 후 사용가능

// const _ = require('lodash');
// 깊은 복사
// const c2 = _.cloneDeep(o);
// console.log(c2 === o); // false
// console.log(c2.x === o.x); // false 
/**
 * 얖은 복사와 깊은 복사로 생성된 객체는 원본과는 다른 객체
 * 원본과 복사본은 참조 값이 다른 별개의 객체
 * 얕은 복사는 객체에 중첩되어있는 객체의 경우 참조 값을 복사하고 깊은 복사는 객체에 중첩되어있는
 * 객체까지 모두 복사해서 원시값처럼 완전한 복사본을 만드는 차이가있음
 * 
 * 원시값을 할당한 변수를다른 변수에 할당하는 것을 깊은복사
 * 객체를 할당한 변수를 다른 변수에 할당하는것을 얕은 복사
 */


// 11-15
const v = 1;
//깊은 복사
const c1 = v;
console.log(c1 === v); //true

const o = { x: 1};
//얕은복사
const c2 = o;
console.log(c2 === o); //true

//11.2.2 참조에 의한 전달
/**
 * 여러개의 식별자가 하나의 객체를 공유에대한 의미 & 어떤 부작용이 발생하는지 확인이 필요함
 */

//11-16
var person = {
    name: 'Lee'
};
//참조 값을 복사(얕은복사)
var copy = person;