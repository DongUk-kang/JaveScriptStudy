/**
 * 객체는 키프로퍼티의 집합
 * 키, 값으로 이루어짐
 */

// 10 - 1
var person = {
    name: 'Lee',
    sayHello: function () {
        console.log(`Hello My Name is ${this.name}.`);
    }
}

console.log(typeof person); // object
console.log(person) // {name: 'Lee', sayHello: f}
// 중괄호 내에 프로퍼티를 미정의할때 빈객체가 생성됨

// 10 - 2
var empty = {}; //  빈객체
console.log(typeof empty) // object

//10 - 3
var person = {
    name:'Leee',
    age: 20
};

/**
 * 프로퍼티를 구분할때 쉼표로 구분
 * 마지막 프로퍼티는 쉼표를 사용하지않아도 무관
 * 
 * 프로퍼티키와 프로퍼티 값으로 사용할 수 있는것들
 * 키: 빈 문자열을 포함하는 모든 문자열 또는 심벌 값
 * 값: 자바스크립트에서 사용할수있는 모든 값
 * 
 * 프로퍼티 키는 문자열로 묶어야함 하지만
 * 식별자 네이밍 규칙을 준수하는 이름 즉, 자바스크립트에서 사용 가능한 유효한 이름인 경우는 따옴표를 생략가능
 * 식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표를 사용
 */

// 10 - 4
var person = {
    firstName: 'dong-uk', //식별자 네이밍 규칙을 준수한 키
    'last-name': 'Kang' // 식별자 네이밍 규칙을 준수하지 않은 키
};
console.log(person); // {firstName: 'dong-uk', last-name: 'Kang'}
/**
 * firstName은 식별자 네이밍 규칙을 준수하여 따옴표 생략가능
 * 'last-name'은 식별자 네이밍 규칙을 준수하지 않아서 따옴표 생략 불가  따옴표를 생략할 경우 자바스크립트 엔진에서 last-name의 - 를 연산자가있는 표현식으로 해석함
 */

// 10 - 5
// var person = {
//     firstName: 'dong-uk',
//     last-name: 'Kang' // 문법에러남
// }

// 10 - 6
var obj = {};
var key = 'hi';
obj[key] = 'world';
console.log(obj); // {hi: 'world'}
// 빈문자열을 키로 사용해도 에러가 발생되지 않지만 키값으로 의미를 갖지 못해 권장하지 않음

// 10 - 7
var foo = {
    '': ''
};
console.log(foo); // {'' : ''}

// 키값에 문자열이나 심벌값 외의 값을 사용할 경우 암묵적 타입변화를 통해 문자열로 진행됨
// 10 - 8
var foo = {
    0: 1,
    1: 2,
    2: 3
};
console.log(foo); // {0: 1, 1: 2, 2: 3}

// var, funtion과 같은 예약어를 키값으로 사용해도 에러 발생되지만 예상치 못한 에러가 발생할 경우가있어 권장하지 않음
// 10 - 9
var foo = {
    var: '',
    function: ''
}
console.log(foo); // {var: '', function: ''}

//이미 선언한 키값을 중복선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로포티를 덮어씀 이럴 경우 에러 발생안됨
// 10 - 10
var foo = {
    name: 'Lee',
    name: 'Kang'
};
console.log(foo);// {name: 'Kang'}


// 10 - 11
var circle = {
    radius: 5, // 프로퍼티

    //원의 지름
    getDiameter: function() { //<< 메서드
        return 2 * this.radius; // << this는 circle를 가리킴
    }
};
console.log(circle.getDiameter()); //10


// 10 - 12
/**
 * 프로퍼티 접근법 
 * 마침표 프로퍼티 접근연ㄱ산자를 사용하는 마침표 표기법 dot notation
 * 대괄호 프로퍼티 접근 연산자([...])를 사용하는 대괄호 표기법 bracket notation
 */
var person = {
    name: 'Lee',
};
// 마침표 표기법 활용한 접근법
console.log(person.name); // Lee

// 대괄호 표기법을 활용한 접근법
console.log(person['name']); // Lee 


/**
 * 대괄호 표기법을 사용하는 경우 대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표를 사용한 문자열이어야함
 * 따옴표로 감싸지않으면 자바스크립트 엔진은 식별자로 해석함
 */

// 10 - 13
var person = {
    name: "Lee"
};

console.log(person['name']);
/**
 * 위예제에서 에러발생한 이유는 대괄호 연산자를 따옴표로 감싸지않아서 발생함
 * 식별자로 평가된 name을 평가하기 위해 선언된 name을 찾았지만 찾지 못함
 * 객체에 존재하지 않는 프로퍼티는 접근 하면 undefined를 반환 
 * undefined가 발생되면 ReferenceError가 발생되지 않는데 주의 필요함
 */

// 10 - 14
var person = {
    name: 'Lee'
};
console.log(person.age) // undefined

/**
 * 키값이 식별자 네이밍 규칙을 준수하지않는 이름은 자바스크립트에서 사용가능한 유효한 이름이 아니면 반드시 대괄호 표기법을 사용해야함
 * 키값이 숫자로 이뤄진 문자열인 경우 따옴표 생략 가능 
 * 그외의 경우 대괄호 내에 들어가는 키값은 반드시 따옴표로 감싼 문자열이어야함
 */

// 10 - 15
var person = {
    'last-name': 'Lee',
    1: 10
};
// person.last-name; // 브라우저의 경우 NaN , node.js의 경우 레퍼런스에러
// person[last-name]; // 에러발생
// person['last-name']; // Lee
// //키값이 숫자을 경우 따옴표 생략가능
// // person.1 < 문법에러 숫자가아님
// // person.'1' << 문법에러 문자열이아님
// person[1]; // 10: person[1] > person['1']
// person['1']; //  10

// 10 - 16 프로퍼티 값 갱신
var person = {
    name: 'Lee'
};

//person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신
person.name = 'Kim';
console.log(person);  // {name: 'Kim'}


/**
 * 프로퍼티 동적 생성
 * 존재하지 않는 프로퍼티 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티값이 할당됨
 */

// 10 - 17
var person = {
    name: 'Lee'
};

//person 객체에는 age 프로퍼티 존재안함 
// 따라서 person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당됨
person.age = 20;
console.log(person);// {name: "Lee", age: 20}

/**
 * 프로퍼티 삭제
 * delete 연산자는 객체의 프로퍼티를 삭제함
 * delete 연산자의 피연산자는 프로퍼티값에 접근할 수 있는 표현식이 있어야함 
 * 존재하지 않는 프로퍼티를 삭제하면 에러없이 무시가되버림
 */

// 10 - 18
var person = {
    name: 'Lee'
};
//프로퍼티 동적 생성
person.age = 20;
//person 객체에 age 프로퍼티가 존재
// 따라서 delete 연산자로 age 프로퍼티를 삭제가능
delete person.age;
// 존재하지않는 프로퍼티를 삭제할경우 에러발생되지않고 해당 코드는 무시함
delete person.address;
console.log(person); // {name: 'Lee'}


/**
 * 프로퍼티 축약표현
 * 객체 리터럴의 프로퍼티는 키와 값으로 구성됨
 * 값은 변수에 할당된 값, 즉 식별자 표현식일 수 도 있음
 */

// 10 - 19
//es5
var x = 1, y = 2;
var obj = {
    x: x,
    y: y
};
console.log(obj); // {x: 1, y: 2}

/**
 * es6에서는 프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 키값이 동일한 이름일때 키값을 생략할 수 있음
 * 이때 프로퍼티 키값은 변수이름으로 자동생성됨
 */

// 10 - 20
// es6
let x = 1, y = 2;
//프로퍼티 축약표현
const obj = { x, y };
console.log(obj); // {x: 1, y: 2}

/**
 * 문자열 또는 문자열로 타입 변환 될 수 있는 값으로 평가되는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수 있음
 * 단, 프로퍼티 키로 사용할 표현식을 대괄호([...])로 묶어야함
 * 이를 계산된 프로퍼티 이름이라고함 
 * 
 * es5에서 계산된 프로퍼티 이름으로 프로퍼티키를 동적 생성하려면 객체 리터럴 외부에서 대괄호 표기법을 사용
 */

// 10 - 21
//es5
var perfix = 'prop';
var i = 0;

var obj = {};

//계산된 프로퍼티 이름으로 키값 동적생성
obj[perfix + '-' + ++i ] = i;
obj[perfix + '-' + ++i ] = i;
obj[perfix + '-' + ++i ] = i;
console.log(obj); //{prop-1: 1, prop-2: 2, prop-3: 3}

// es6는 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 잇음
// 10 - 22
//es6
const perfix = 'prop';
let i = 0;

//객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
const obj = {
    [`${perfix}-${++i}`]: i,
    [`${perfix}-${++i}`]: i,
    [`${perfix}-${++i}`]: i
};
console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}


/**
 * 메서드 축약 표현
 * es5에서 메서드를 정의하려면 프로퍼티 값으로 함수를 할당함 
 */

// 10 - 23
//es5 
var obj = {
    name: 'lee',
    sayHi: function() {
        console.log('Hi!' + this.name);
    }
};
obj.sayHi(); // Hi! lee

//es6에서는 메서드를 정의할때 function키워드를 생략한 축약 표현을 사용할 수있음
//es6
const obj = {
    name: 'Lee',
    //메서드 축약표현
    sayHi() {
        console.log('HIHI!' + this.name);
    }
};

obj.sayHi(); // HIHI! Lee

//es6의 메서드 축약 표현으로 정의한 메서드는 프로퍼티에 할당한 함수와 다르게 동작함