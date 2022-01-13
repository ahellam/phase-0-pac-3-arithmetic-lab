
function add(a,b){
    return a + b;
}
console.log (add(5, 6));

function subtract(a,b){
    return a - b;
}
console.log (subtract(5, 6));

function multiply(a,b){
    return a * b;
}
console.log (multiply(5, 6));

function divide(a,b){
    return a / b;
}
console.log (divide(5, 6));

function increment(n){
    return (n += 1);
}
console.log (increment(755));

function decrement(n){
    return (n -= 1);
}
console.log (decrement(755));

function makeInt(string){
    return parseInt(string, 10);
}
console.log (makeInt("2", 10));

function preserveDecimal(string){
    return parseFloat(string, 10);
}
console.log (preserveDecimal("3.5", 10));