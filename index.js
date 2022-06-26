function numberType(x){
    return x % 2 ? '홀수' : '짝수' 
} // 짝수/홀수

// console.log(numberType(2)); 
// console.log(numberType(5)); 



function getMonthName(date) {
    let month = Number(date.slice(4, 6))
    let result = ''
    switch (month) {
        case 1: result =  '일월';break;
        case 2: result = '이월';break;
        case 3: result = '삼월';break;
        default: result = 'ddd';
    } 
    return result;
}


for(let i=0; i<10; i++){
    if(i === 5) continue;
    console.log(i)
    console.log(i)
    console.log(i)
    console.log(i)
    console.log(i)
    console.log(i)
}

function onClickCoupon() {
    
    // call api
    // response를 받으면 (이미 다운받은애야)
    // coupon download 이미지가 보여짐
}


// primitive vs object
// (string, number, boolean, undefined, null, symbol)
String()


// falsy
// 0, false, '', NaN, null, undefined