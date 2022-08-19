function Users() {
  this.type = "사람";
  this.company = "현대";
}

function Admin(ipAdress) {
  this.ipAdress = ipAdress;
  this.__proto__ = new Users();
}

const admin = new Admin(123);
console.log(admin.type);

const myProto = { x: 10 };
const obj = {
  y: 20,
};
obj.__proto__ = myProto;

obj.x;

// 비동기

function a() {
  bar();
  console.log("3");
}

function bar() {
  foo();
  console.log("1");
}

function foo() {
  console.log("0");
}

a(); // 3, 1, 0
