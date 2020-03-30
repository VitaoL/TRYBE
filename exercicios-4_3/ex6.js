function palindrome( word ){
    let contador = 0;
    for(let i = 0; i < word.length - 1; i++){
        if( word[i] === word[word.length - 1 - i]){
            contador++;   
        }
        else{
           contador--;  
        }
    }
    if(contador === word.length - 1){
        return true;
    }
    else{
        return false;
    }
}

let word = 'vitao'
console.log(palindrome(word));
