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