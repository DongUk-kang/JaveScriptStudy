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

// 16 - 05
const peple = {
    name: 'Wook'
};
peple.age = 20;
// 동적 생성

console.log(Object.getOwnPropertyDescriptor(peple));

//16.3.2 접근자 프로퍼티
/**
 * 접근자 프로퍼티는 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을읽거나 저장할때 사용하는 접근자 함수로 구성된 프로퍼티
 * 
 * 접근자 프로퍼티는 다음과 같은 프로퍼티 어트리뷰트를 갖음
 * 
 * [[Get]] , get 
 * 설명: 접근자 프로퍼트를 통해 데이터 프로퍼티의 값을 읽을때 호출되는 접근자함수
 * 즉, 접근자 프로퍼티 키로 프로퍼티 값에 접근하면 프로퍼티 어트리뷰트[[Get]]의 값, 즉 getter 함수가 호출되고 그결과가 프로퍼티값으로 반환됨
 * 
 * 
 * [[Set]], set
 * 설명: 접근자프로퍼티를 통해 데이터 프로퍼티의 값을 저장할때 호출되는 접근자 함수
 * 접근자 프로퍼티 키로 프로퍼티 값을 저장하면 프로퍼티어트리뷰트[[Set]]의 값, 즉 setter 함수가 호출되고 그 결과가 프로퍼티값으로 저장됨
 * 
 * 
 * [[Enumerable]], Enumerable 
 * 데이터 프로퍼티의 [[Enumerable]] 동일
 * 
 * [[Configurable]], Configurable
 * 데이터 프로퍼티의 [[Configurable]] 동일 
 * 
 * 접근자 함수는 getter/setter 함수라고도 부른다 
 * 접근자 프로퍼터의 getter 와 setter 함수를 모두 정의할 수도 있고 하나만 정의 할 수도 있다
 *  */

// 16 - 06
const persons = {
    //데이터 프로퍼티
    firstName: 'Dong Uk',
    lastName: 'Kang',

    //full Name은 접근자 함수로 구성된 접근자 프로퍼티임
    //getter gkatn
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    //setter 함수
    set fullName(name) {
        // 배열 디스트럭처 할당
        [this.firstName, this.lastName] = name.split(' ');
    }
};

//데이터 프로퍼티를 통한 포르퍼티 값의 참조
console.log(persons.firstName + ' ' + persons.lastName); // Donguk Kang

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼터 fullName에 값을 저장하면 setter 함수가 호출됨
persons.fullName = 'hihi lee';
console.log(persons);

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출됨
console.log(persons.fullName); 

// first Name은 데이터 프로퍼티임
//데이터 프로퍼티는 [[Value]] , [[Writable]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖음
let descriptor = Object.getOwnPropertyDescriptor(persons, 'firstName');

// fullName은 접근자 프로퍼티
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]]
descriptor = Object.getOwnPropertyDescriptor(persons, 'fullName');

/**
 * persons 객체의 firstName과 lastName 프로퍼티는 일반적인 데이터 프로퍼티다
 * 메서드 앞에 get, set이 붙은 메서드가 있는데 이것들이 바로 getter와 setter함수이고 getter/setter 함수의 이름 fullName이 접근자 프로퍼티
 * 
 * 접근자 프로퍼티는 자체적으로값을 가지지 않으며 다만 데이터 프로퍼티의 값을 읽거나 저장할때 관여함
 * 
 * 이를 내부 슬롯/메서드 관점에서 설명하면 다음과 같음
 * 접근자 프로퍼티 fullName으로 프로퍼티 값에 접근하면 내부적으로[[Get]]내부 메서드가 호출되어 다음과 같이 동작함
 * 
 * 
 * 1. 프로퍼티 키가 유효한지 확인한다. 프로퍼티 키는 문자열 또는 심벌이여함 프로퍼티키 "fullName"은 문자열이므로 유효한 프로퍼티 키
 * 
 * 2. 프로토타입 체인에서 프로퍼티를 검색한다 persons 객체에 fullName프로퍼티가 존재함
 * 
 * 3.  검색된 fullName 프로퍼티가 데이터 프로퍼티인지 접근자 프로퍼티인지 확인 fullName 프로퍼티는 접근자 프로퍼티임
 * 
 * 4.  접근자 프로퍼티 fullName의 프로퍼티 어트리튜브[[Get]]의 값 즉 getter 함수를 호출하여 그결과를 반환함
 * 프로퍼티 fullName의 프로퍼티 어트리뷰트 [[Get]]의 값은 Object.getOwnPropertyDescriptor 메서드가 반환하는 프로퍼티 디스크립터 객체의 get 프로퍼티 갑과 같음
 * 
 * 프로토타입
 * 프로토타입은 어떤 객체의 상위 객체의 역할을 하는 객체임
 * 프로토타입은 하위 객체에게 자신의 프로퍼티와 메서드를 상속함
 * 프로토 타입 객체의 프로토타입 객체의 프로퍼티나 메서드를 상속받은 하위 객체는 자신의 프로퍼티 또는 메서드인 것처럼 자유롭게 사용할수 있음
 * 프로퍼트 체인은 프로토타입이 단방향 링크드 리스트 형대로 연결되어 있는 상속 구조를 말함
 * 객체의 프로퍼티나 메서드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메스다가 없다면 프로토타입 체인을 따라 프로토타입의 프로퍼티나 메서드를 차례대로 검색한다.
 */

// 접근자 프로퍼티와 데이터 프로퍼티를 구별하는 방법
// 16 - 07
//일반 객체의 --proty--는 접근자 프로퍼티
Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');

//함수 객체의 protytype은 데이터 프로퍼티
Object.getOwnPropertyDescriptor(function() {}, 'prototype');
/**
 * 접근자 프로퍼티와 데이터 프로퍼티의 프로퍼티 디스크립터 객체의 포르퍼티가 다른것을 확인가능
 */


//16.4 프로퍼티 정의
/**
 * 프로펕티 정의란 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나, 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의 하는 것을 말함
 * 
 * 예를 들어 프로퍼타 값을 갱신 가능하도록 할 것인지, 프로퍼티를 열거 가능하도록 할것인지, 프로퍼티를 재정의 가능하도록 할것인지 정의 할 수 있다.
 * 이를 통해 객체의 프로퍼티가 어떻케 동작해야 하는지를 명확히 정의가능
 * 
 * Object.defineProperty 메서드를 사용하면 프로터의 어트리뷰트를 정의할수 있음
 * 인수로는 객체의 참조와 데이터 프로퍼티의 키인 문자열, 프로퍼티 디스크립터 객체를 전달함
 */


// 16 - 08
const person = {};

Object.defineProperty(person, 'firstName', {
    value: 'Ungmo',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(person, 'lastName', {
    value: 'Lee'
})

let descriptors = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptors);

// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값
descriptors = Object.getOwnPropertyDescriptor(person, 'lastName');

//[[Enumerable]]의 값이 false인 경우
// 해당 프로퍼티는 for ... in문이나 Object.keys 등으로 열거 할수 없음
//lastName 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않음
console.log(Object.keys(person));

/**
 * [[Writable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없음
 * lastName 프로퍼티는 [[Configurable]]의 값이 false이므로 값을 변경할수 없음
 * // 이때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시함
 */
person.lastName = 'KIm';

//[[Confugurable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없음
// lastName 프로퍼티는 [[Confugurable]]의 값이 false이므로 삭제할 수 없음
// 이때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시됨
delete person.lastName;

//[[Configurable]]의 값이 false인 경우 해당 프로퍼티를 재정의 할 수 없음
//Object.defineProperty(person, 'lastName', { enumerable: true });

descriptors = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);

//접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
    //getter 함수
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    //set함수
    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
});
descriptors = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptors);

person.firstName = 'Heegun Leee';
console.log(person);

//Object.defineProperty 메서드로 프로퍼티를 정의할때 프로퍼티 디스크립터 객체의 프로퍼티를 일부 생략가능
// 프로퍼티 디스크립터 객체에서 생략된 어트리뷰트는 다음과 같이 기본값 제공됨
//Object.definedProperty 메서더는 한번에 하나의 프로퍼티만 정의할수 있음
//Object.defineProperties 메서드를 사용하면 여러개의 프로퍼티를 한번에 정의 가능

// 16 - 09 

const peoples = {};
Object.defineProperties(peoples, {
    firstName: {
        value: 'Mee',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: 'Lee',
        writable: true,
        enumerable: true,
        configurable: true
    },
    //접근자 프로퍼티 정의
    fullName: {
        //getter 함수
        get() {
            return `${this.firstName}, ${this.lastName}`;
        },
        //setter 함수
        set(name) {
            [this.firstName, this.lastName] = name.split(' ');
        },
        enumerable: true,
        configurable: true
    }
});
peoples.fullName = 'Mee Lee';
console.log(peoples);


//16.5 객체 변경 방지
/**
 * 객체는 변경 가능한 값이므로 재할당 없이 직접 변경 가능
 * 즉, 프로퍼티를 추가하거나 삭제할 수 있고, 프로퍼티 값을 갱신할 수 있으며, Object.defineProperty 또는 Object.defineProperties 메서드를 사용하여 프로퍼티 어트리뷰트를 재정의 할 수 도 있음
 * 
 * js는 객체의 변경을 방지하는 다양한 메서드를 제공함
 * 객체 변경 방지 메서드들을 객체의 변경을 금지하는 강도가 다름
 * 
 * 
 * 16.5.1
 * Object.perventExtensions 메서드는 객체의 확장을 금지
 * 객체 확장 금지란 프로퍼티 추가 금지를 의미함
 * 즉, 확장이 금지된 객체는 프로퍼티 추가가 금지
 * 프로퍼티는 프로퍼티 동적 추가와 Object.defineProperty 메서드로 추가할수 있음
 * 이 두가지 추가 방법이 모두 금지됨
 * 
 * 확장 가능한 객체인지 여부는 Object.isExtensible 메서드로 확인 가능
 */

// 16 - 10
const person = { name: 'Lee' };

//person 객체는 확징이 금되진 객체가 아님
console.log(Object.isExtensible(person)); // true

//person 객체의 확장을 금지하여 프로퍼티 추가를 금지함
Object.preventExtensions(person);

//person 객체는 확장이 금지된 객체
console.log(Object.isExtensible(person)); //false

// 프로퍼티 추가가 금지됨
person.age = 20; // 무시하지만 strict mode에서는 에러 발생됨
console.log(person); // {name: "Lee"}

// 프로퍼티 추가는 금지되지만 삭제는 가능함
delete person.name;
console.log(person); // {}


// 프로퍼티 정의에 의한 프로퍼티 추가도 금지됨
// Object.defineProperty(person, 'age', { value: 20 });
// 타입에러 발생됨
