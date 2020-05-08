const fatorial = x => {if(x==1){return 1} return x * fatorial(x-1)};

console.log(` exercicio 1 usando fatorial: ${fatorial(6)}`);

const longestWord = "Antônio foi no banheiro e não sabemos o que aconteceu"; // retorna 'aconteceu'
const biggest = x => {
        let maior = x.split(' ')[0];
            for(let i = 0 ; i < x.split(' ').length ; i++){
            if(maior.length < x.split(' ')[i].length)
                maior = x.split(' ')[i];
        }
        return maior;
    };
console.log(`exercicio 2 : ${biggest(longestWord)}`);




