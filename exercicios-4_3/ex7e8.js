function maior( array ){
    let maior = 0;
    for(let i = 0 ; i < array.length ; i++){
        if( array[maior] < array[i] ){
            maior = i;
        }
    }
    return( maior ) ;
}
function menor( array ){
    let menor = 0;
    for(let i = 0 ; i < array.length ; i++){
        if(array[menor] > array[i] ){
            menor = i;
        }
    }
    return( menor);
}
let array = [2, 3, 6, 7, 10, 1];
console.log(array.length);
console.log('posição maior', maior(array) );
console.log('posição menor', menor(array));

