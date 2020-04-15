function bigger(words){
    let maior = 0;
    for( let i = 0; i < words.length ; i++){
        if(words[maior].length < words[i].length){
            maior = i;
        }
    }
    return words[maior];
}
let words = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(bigger(words));