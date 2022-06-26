function printStar(max, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result = result + ' ';
    }

 
    for (let i = 0; i < max - num; i++) { 
        result = result + '*';
        
    }

    result = result + '\n';
    return result
}

function star(num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result = result + printStar(num, i)
    }
    return result
}

console.log(star(5))