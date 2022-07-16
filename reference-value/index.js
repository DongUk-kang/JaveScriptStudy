// call by reference, call by value
// deep copy, shallow copy

// primitive
let name = 'soobin';
let studentName = name;
studentName = 'donguk'
console.log(name, studentName);

// 객체
let person = {
    name: 'soobin',
    age: 20
}

let student = person; // shallow copy

let student2 = {...person}; // deep copy

student2.name = 'donguk';
console.log(person.name, student2.name)



let store = {
    apple: 20,
    banana: 30,
    delivery: {
        fee: 40
    }
}

let myStore = {...store, delivery: {...store.delivery}};
myStore.delivery.fee = 100;

// deep copy 방법 1. JSON.parse, JSON.stringify
let yourStore = JSON.parse(JSON.stringify(store));
yourStore.delivery.fee = 0;
console.log(store.delivery.fee, yourStore.delivery.fee);


// JSON.Parse(JSON.Stringfy(store))


// deep copy 방법 2. 직접 구현한다
function deepClone(input) {
    if (input === null || typeof input !== "object") return input;
    const output = Array.isArray(input) ? [] : {};
    for (const key of Object.keys(input)) {
        output[key] = deepClone(input[key]); // {fee: 40}
    }
    return output;
}

deepClone(store)