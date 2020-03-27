let a = 10;
let b = 5;
let operador ='multiplicação';
switch(operador){
    case'soma':
    console.log(a+b);
    break;
    case'subtraçao':
    console.log('subtrção a por b: ', a-b);
    console.log('subtração b por a: ', b-a);
    break;
    case'multiplicação':
    console.log(a*b);
    break;
    case'divisão':
    console.log('divisão de a por b: ', a/b);
    console.log('divisão de b por a: ', b/a);
    break;
    case'módulo':
    console.log('modulo de a por b: ', a%b);
    console.log('modulo de b por a: ', b%a);
    break;

}
