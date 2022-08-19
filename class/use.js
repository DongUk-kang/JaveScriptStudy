function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("sayHello");
};

const me = new Person("soobin");

me.sayHello();
