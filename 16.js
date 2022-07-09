/**
 * 프로퍼티 어트리뷰트 
 */

/**
 * 16.1.1 내부 슬롯과 내부 메서드
 * 
 * 내부슬롯과 내부 메서드는 js엔진의 구현 알고릐즘을 설명하기 위해 ecmascrip 사양에서 사용하는의사 프로퍼티와 의사 메서드
 * 
 * ecmascript 사양에 등장하는 이중 대괄호로 감싼 이름들이 내부슬롯과 내부 메서드임 
 * 
 * 내부슬롯과 내부 메서드는 ecmascript 사양에 정의된 대로 구현되어 js엔진에서 실제로 동작함
 * 
 * 하지만 개발자가 직접 접근할수 있도록 외부로 공개된 객체의 프로퍼트는 아님
 */

const o = {};
//내부 슬롯은 js엔진의 내부 로직이므로 직접 접근 불가
// o.[[Prototype]] // > uncaught SyntaxError발샐
//단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하긴함
o.__proto__ // > object.prototype

/**
 * 16.2 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
 * 
 * js엔진은 프로퍼트를 생성하때 프로퍼티의 상태를 나타내는 프로퍼트 어트리뷰트를 기본값으로 자동정의함
 * 
 * 프로퍼티의 상태란 프로퍼티의 값, 값의 갱신 가능 여부, 열거 가능 여부, 재정의 가능여부를 말함
 * 
 * 프로퍼티 어트립트는 js엔진이 관리하는 내부 상태값인 내부슬롯임
 * 
 * 따라서 포로퍼티 어트리뷰트에 직접 접근할 수 없지만 object.getOwnPropertyDescriptor 메서드를 사용하여 간접적으로 확인 가능
 */

// 16. 2
// // const person = {
// //     name: "Lee"
// };
//프로퍼티 어트리뷰트 정보를 제공하는 프로퍼트 디스크립터 개체를 반환함
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

/**
 * getOwnPropertyDescriptor 메서드를 호출할때 첫번째 매개변수에는 객체의 참조를 전달하고
 * 두번째 매개변수에는 프로퍼티 키를 문자열로 전달함
 * 이때 getOwnPropertyDescriptor 메서드는 포르퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환함
 * 
 * 만약 존재하지 않는 프로퍼티나 상속받은 프로퍼티에 대한 프로퍼티 디스크립터를 요구하면 undefined가 반환됨
 * 
 * Object.getOwnPropertyDescriptor 메서드는 하나의 프로퍼티에 대해 프로퍼티 디스크럽터 객체를 반환하지만 es8에서 도입된 Object.getOwnPropertyDescriptor메서드는 
 * 모든 프러퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환하
 */

// 16.3 
const person = {
    name: "Lee"
};

person.age = 20;
console.log(Object.getOwnPropertyDescriptor(person));

