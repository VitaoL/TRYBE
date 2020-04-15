function number(num){
    let soma = 0;
    for (let i = 0; i < num;i++ ){
        soma +=  num - i;
    }
    return soma;
}
let num = 5;
console.log(number(num));