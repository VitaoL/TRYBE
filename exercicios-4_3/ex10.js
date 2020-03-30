function most(array){
    let comum = 0;
    let contador2 = 0;
    let contador = 0 ;
    for(let i = 0; i < array.length ; i++){
        contador = 0;
        for( let j = 0; j < array.length  ; j++ ){
            if(array[i] === array[j]){
                contador++;
            }
        }
         
        if(contador2 < contador){
            contador2 = contador;
            comum = array[i];
        }
    }
    return comum;
}
let array = [2, 3, 2, 5, 8, 2, 3];
console.log(most(array));