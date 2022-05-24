// js 해설을 위해서는 엔진 필요
// 엔진은여러개
// 모든 엔진이 알아듣는 자바스크립트 문법을 제공하기위해서 하는 애는 바벨
// 엔진이 클라이언트 - 브라우저
// 엔진 서버에 있으면 - 자바스크립트 서버  = node.js

// 타입: string, number, boolean, null, undefined, symbol (primitive type)/ object type(Stirng, Number, Boolean, Symbol, Array, ...) 
// let, const, var 차이점 

// var (function scope) vs  let, const (block scope) = function > block

// 변수 선언 ?  1) 선언, 2) 초기화 
let name = 'abc'

function sayHi() {
    function getDate() {
        var date = new Date();
        let count = 0;

        return date + '-' + count;
    }

    const getYesterDay = () => {
        let lastString = '2022-05-07';
        var lastDay = new Date(lastString);
        return lastDay
    }

    var result = `sayHi + ${getDate()} + ${getYesterDay()}`;

    return result;
}

// 가비지 콜렉터 ?


// console.log(result)
console.log(sayHi());

// 네이밍 컨벤션
// 카멜 케이스
const firstName = ''
// snake케이스
const first_name = '';
// pascal 케이스
const FirstName = '';
// 헝가리언 케이스(타입 + 식별자) 
const strName = ''
// DOM을 지칭할때(식별자 + El)
const inputEl = document.getElementById('input');


// 값, 리터럴, 표현식(그 결과가 값으로 딱 떨어지는지), 문(하나의 실행 단위, 값으로 떨어지지않음) 
// (=> 차이는 알아야 하지만, 정확한 정의를 외울 필요는 없다.)


true ? 'abc' : 'false';
10 + 20 


const x = 5; // 할당문 
x + 10;

x === 0
sayHi(); // 호출 표현식 


// 함수 이름은 fullName, 
// input(firstName, lastName), output("수빈 박")
function fullName(f_name, l_name) {
    
    // return f_name + " " + l_name;
    return `${f_name} ${l_name}`
}

console.log(fullName('수빈', '박')); // "수빈 박"
console.log(fullName("동욱", "강")); // "동욱 강"



console.log('*********')
console.log(' *******')
console.log('  *****')
console.log('   ***')
console.log('    *')

console.log('동욱 버전 =====')



// 1 -> 0(1-1), 9 (10 - 1(1 + 0))
// 2 -> 1(2-1), 7 (10 - 3(2 + 1))
// 3 -> 2(3-1), 5 (10 - 5(3 + 2))
// 4 -> 3(4-1), 3 (10 - 7(4 + 3))
// 5 -> 4(5-1), 1 (10 - 9(5 + 4))
 
// for(let i=1; i < 6; i++) {
//     let blank = i - 1;
//     let star = 10 - (i + i - 1);
    
//     blank = Array(blank).fill(" ").join('');
//     star = Array(star).fill("*").join('');
    
//     console.log(blank, star)
// }

//     *
//    **
//   ***
//  ****
// *****

for (let i = 0; i < 5; i++) {
    let star = i + 1;
    let blank = 5 - 1 - i;
    star = Array(star).fill("*").join(' ');
    blank = Array(blank).fill(" ").join('');
    console.log(blank,star) 
}

for (let i = 0; i < 5; i++) {
    let star = 4 - i;
    let blank = i + 1;

    star = Array(star).fill("*").join(' ');
    blank = Array(blank).fill(" ").join('');
    console.log(blank,star) 
}

for(let i=0; i<9; i++) {
    let star = 0, blank = 0;
    if(i > 4) { // 5, 6, 7, 8
        star = 9 - i;
        blank = i - 4;
    } else {
        star = i+1;
        blank = 9 -i-5;
    }

    star = Array(star).fill("*").join(' ');
    blank = Array(blank).fill(" ").join('');
    console.log(blank,star) 
}


// 0, 10 까지 소수 구하기
function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}