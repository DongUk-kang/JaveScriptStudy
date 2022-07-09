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



/**
 * 16 - 03 데이터프로퍼티와 접근자 프로퍼티
 * 
 * 프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분가능
 * 
 * 데이터 프로퍼티
 * 키와 값으로 구성된 일반적인 프로퍼티. 지금까지 살펴본 모든 프로퍼티는 데이터 프로퍼티임
 * 
 * 접근자 프로퍼티
 * 자체적으로는 값을 갖지 않고 다른 데이터프로퍼티의 값을 읽거나 저장할떄 호출되는 접근자 함수로 구성된 프로퍼티임
 * 
 * 16.3.1  데이터 프로퍼티
 * 
 * 데이터 프로퍼티느느 다음과 같은 프로퍼티 어트리뷰트를 갖는다
 * 이 프로퍼티 어트리뷰트는 js엔진이 프로퍼티를 생성할때 기본값으로 자동 정의
 * 
 * [[Value]] < 프로퍼티 어트리뷰트 // value < 프로퍼티 디스크립터객체의프로퍼티 // 설명 프로퍼티키를 통해 프로퍼티 값에 접근하면 반한되는 값 // 프로퍼티 키를 통해 프로퍼티 값을 변경하면[[Value]에 값을 재할당함 이때 프로퍼티가 없으면 프로퍼티를 동적 생성하고 생성된 프로퍼티의 [[Value]]에 값을 저장함
 * 
 * [[Writable]] < 프로퍼티 어트리뷰트 // writable < 프로퍼티디스크립터객체의 프로퍼티 
 * 설명: 프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖음
 * [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의값을 변경할 수 없는 읽기 전용이됨
 * 
 * 
 * [[Enumerable]] , enumerable
 * 프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 갖음 
 * [[Enumerable]]의 값이 false인 경우 해당 프로퍼티는 for ... in 문이나 Object.keys 메서드등으로 열거 할 수 있음
 * 
 * [[Configurable]] Configurable
 * 프로퍼티의 재정의 가능 여부를 나타내며 불리언 값을 갖는다 
 * * */

//16.04
const human = {
    name: "Kang"
};
console.log(Object.getOwnPropertyDescriptor(human, 'name'));;
/**
 * Object.getOwnPropertyDescriptor 메서드가 반환한 프로퍼티 디스크립터 객체를 살펴보면 value프로퍼티의 값은 'kang'
 * 이것은 프로퍼티 어트리뷰트의 값이 'kang'인것을 의미함
 * 
 * 그리고 writable,enumerable, configurable 프로퍼티의 값은 모두 true
 * 
 * 이것은 프로퍼티느 어트리뷰트 [[Value]], [[Writable]], [[Enumerable]] 값이 모두 true인것을 의마함
 * 
 * 이처럼 프로퍼티가 생설될때 [[value]]의 깂은 프로퍼티 값으로 초기화되며 [[Writable]], [[Enumerable]], [[Configurable]]의 값은 true로 초기화함
 * 프로피트를 동적추가해도 동일함
 * 
 * */

