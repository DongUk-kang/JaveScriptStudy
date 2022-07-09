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

// 18 - 2
function square(number) {
    return number * number;
}
console.log(square);