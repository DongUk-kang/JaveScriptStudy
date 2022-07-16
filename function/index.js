const add = function (x, y) {
  return x + y;
};
console.log(add(2, 3));

// 동적 스코프(호출되는 시점에), 정적 스코프
let x = 20;
function foo() {
  var x = 10;
  bar();
}
function bar() {
  console.log(x);
}

function getAverage(math, kor, english) {
  let result = sum(math, kor, english) / 3;
  function sum(a, b, c) {
    return result;
  }

  return result;
}
