//중괄호로 묶은것 
// 블록문의 경우 하나의 실행단위로 취급
// 대체적으로 제어문이나 함수를 정의할때 사용하는것이 일반적 


//블록문
{
    var foo = 10;
}

// 제어문

var x = 1;
if ( x < 10) {
    x++;
}

//함수 선언문
function sum(a, b) {
    return a + b;
}
 
/**
 * 조건문은 주어진 조선식의 평과 결과에 따라 코드블록의 실행을 결정함
 * 조건식의 경우 boolean값으로 평가될 수 있는 표현식임
 * js의 경우 if else & switch문으로 조건문을 사용가능
 * 
 * if문의 조건식은 boolean 값으로 평가되어야함
 * if문의 조건식이 boolean 값이 아닌 값으로 평가될 경우 엔진에서 자체적으로 강제 변환함
 */

if (조건식) {
    // 조건식이 참(true)면 해당 코드 블록이 실행됨
} else {
    // 조건식이 거짓이면(false)먄 해당 코드블록이 실행됨
}

if (조건식1) {
    // 조건식1이 참이면 해당 코드블럭이 실행
} else if (조건식2) {
    // 조건식2이 참이면 해당 코드블럭이 실행
} else {
    // 조건식1 & 조건식2 두개다 거짓이면 이 코드블럭이 실행댐
}

var num = 2;
var kind;

// if문
if (num > 0) {
    kind = '양수'; //음수를 구별할 수 없다
}
console.log(kind); // 양수

// if else 문
if (num > 0) {
    kind = '양수';
} else {
    kind = '음수'; // 0은 음수가 아님
}
console.log(kind); //양수 

// if else if 문
if (num > 0) {
    kind = '양수';
} else if (num < 0) {
    kind = '음수';
} else {
    kind = '0';
}
console.log(kind); // 양수;

// 8 - 3
var num = 2;
var kind;
if (num > 0) {
    kind = '양수';
} else if(num < 0) {
    kind = '음수';
} else {
    kind = '0';
}
console.log(kind); // 양수

// 8 - 4
var x = 2;
var result;

if (x % 2) {
    //2 % 2는 0이다.
    // 이때 0은 false로 암묵적으로 강제 변환
    result = '홀수';
} else {
    result = '짝수';
}

console.log(result); // '짝수'

// 8 - 5
var x = 2;
// 0 은 false로 취급함
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수

// 8 - 6
var num = 2;
var kind = num ? (num > 0 ? '짝수' : '홀수') : '0';
console.log(kind); // 양수

// swtich 문
/**
 * switch문은 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문으로 실행 흐름을 옮김
 * case문은 상황을 의미하는 표현식을 지정하고 클론으로 마무리 그리고 그 뒤에 실행할 문들을 위치시킴
 * switch 문의 표현식과 일치하는 case문이 없다면 실행순서는 default문으로 이동
 * default문으 선택사항으로, 사용할 수도 있고 사용하지 않아도됨 
 */

// switch (표현식) {
//     case 표현식1:
//         switch 문의 표현식과 표현식1이 일치하면 실행될문;
//         break;
//     case 표현식2:
//         switch 문의 표현식과 표현식2가 일치하면 실행될문;
//         break;
//     default:
//         switch 문의 표현식과 일치하는 case 문이 실행되는 문;
// }

/**
 * if else 문의 조건식은 boolean값으로 평가되나
 * switch문의 경우 문자열이나 숫자값인 경우가 많음
*/

// 8 - 7
var month = 11;
var monthName;

switch (month) {
    case 1: monthName = '1월';
    case 2: monthName = '2월';
    case 3: monthName = '3월';
    case 4: monthName = '4월';
    case 5: monthName = '5월';
    case 6: monthName = '6월';
    case 7: monthName = '7월';
    case 8: monthName = '8월';
    case 9: monthName = '9월';
    case 10: monthName = '10월';
    case 11: monthName = '11월';
    case 12: monthName = '12월';
    default: monthName = 'Invalid month';
}
console.log(monthName); 

// 8 - 8
var month = 11;
var monthName;

switch (month) {
    case 1: monthName = '1월';
        break;
    case 2: monthName = '2월';
        break;
    case 3: monthName = '3월';
        break;
    case 4: monthName = '4월';
        break;
    case 5: monthName = '5월';
        break;
    case 6: monthName = '6월';
        break;
    case 7: monthName = '7월';
        break;
    case 8: monthName = '8월';
        break;
    case 9: monthName = '9월';
        break;
    case 10: monthName = '10월';
        break;
    case 11: monthName = '11월';
        break;
    case 12: monthName = '12월';
        break;
    default: monthName = 'invalid month';    
}

console.log(monthName);


// 8 - 9
var year = 2000;
var month = 2;
var days = 0;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
    /**
     * 윤년 계산 알고리즘
     * 1. 연도가 4로 나누어떨어지는 해 (2000, 2004, 2008, 2012)는 윤년
     * 2. 연도가 4로 나누어떨어지더라도 연고가 100으로 나누어떨이즈는해 (2000, 2100 , 2200) 평년
     * 3. 연도가 400으로 나누어떨어지는 해 (2000, 2400, 2800)는 윤년
     */
    days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
    break;
    default:
        console.log('invaild month')
}
console.log(days);

// 8 - 10
for (var i = 0; i < 2; i++) {
    console.log(i);
}

// 8  - 11
for (var i = 1; i >= 0; i--) {
    console.log(i);
}

// 8 - 12 
// for (;;) {
//     ...
// }


// 8 - 13 
for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
        if (i + j === 6) console.log(`[${i}, ${j}]`)
    }
}


/**
 * while 문 
 * 주어진 조건식의 평가 결과가 참이면 코드블록이 계속해서 반복실행함 
 * for 문은 반복횟수가 명확할때
 * while문은 반복횟수가 불명확할때 사요ㅕㅇ
 * 
 * while 문은 조건문의 평각 결과가 거짓일 경우 코드블록이 실행되지 않고 종료
 * 만약 조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 강제 변환하여 true , false을 구별함
 */
// 8 - 14 
var count = 0;
//count 가 3보다 작을떄까지 코드블록이 반복 실행함
while (count < 3) {
    console.log(count);
    count ++;
}

// 8 -15 무한루프
// while (true) {}
// 무한루프 발생시 코드블록내에서 if문으로 탈출조건을 만들고 break문으로 코드블록을 탈출함

// 8 - 16

var count = 0;
//무한루프
while (true) {
    console.log (count);
    count ++;
    if (count === 3) break;
}

 
/**
 * do... while 문의 경우 코드 블록을 먼저 실행하고 조건식을 평가
 * 따라서 코드 블록은 무조건 한번이상 실행됨
 * 
 */

// 8 -17 
var count = 0;
do {
    console.log(count);
    count ++;
} while (count < 3);

// 8 - 17 break문
// if (true) {
//     break;
// }

//8 - 19
//레이블문의 경우 프로그램의 실행순서를 제어하는데 사용
//사실 switch문의 case 문과 default문 레이블문
// 레이블문 마무리시 break문에서 레이블 식별자를 지정한다.
foo: console.log('foo')

// 8 - 20
foo: {
    console.log(1);
    break foo;
    console.log(2);
}
console.log('done!')

// 8 - 21
outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        if (i + j === 3) break outer;
        console.log(`inner [${i}], [${j}]`);
    }
}
console.log('done');

// 8 - 22
var string = 'hello world';
var search = 'l';
var index;

for (var i = 0; i < string.length; i++) {
    if (string[i] === search) {
        index = 1;
        break;
    }
}

console.log(index);


/**
 * continue문은 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동시킴
 * break문철머 반복문을 탈출하지는않음
 */

// 8 - 23
var string = 'hello world';
var search = 'l';
var count = 0;

for (var i = 0; i < string.length; i++) {
    if (string[i] !== search) continue;
    count ++;
}
console.log(count)

const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length);

// 8 -24
for (var i = 0; i < string.length; i++) {
    if (string[i] === search) count ++;
}

// 8 - 25
for (var i = 0; i < string.length; i++) {
    if (string[i] === search) {
        count ++;
    }
}

for (var i = 0; i < string.length; i++) {
    if (string[i] !== search) continue;
    count ++;
}