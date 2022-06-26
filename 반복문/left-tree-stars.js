function printsStar(num) {
    let result = '';
    for (let i = 0; i < num; i ++) {
        result = result + '*'
    }
    result = result + '\n';
    return result
}

function star(num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result = result + printsStar(i + 1);
    }
    return result;
}


console.log(star(3));
console.log(star(5));
