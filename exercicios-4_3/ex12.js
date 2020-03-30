function comp(string1 ,string2){
    let cont = 0;
    for(let i = 0; i < string2.length;i++){
        if(string2[string2.length - i] === string1[string1.length -i]){
            cont++;
        }
    }
    
    if(cont === string2.length){
        return true;
    }
    else{
        return false;
    }
}
let string1 = 'joao fernando';
let string2 = 'trybe';
console.log(comp(string1, string2));