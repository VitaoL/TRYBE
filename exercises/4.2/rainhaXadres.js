let posiçaoColunaRainha = 1;
let posiçaoLinhaRainha = 2;

let posiçaoLinhaInimigo = 3; 
let posiçaoColunaInimigo = 4;

let ataquefeito = false; //a resporta se pode ou noa atacar;

//  para verificar se a peça esta na mesma linha ou colula 

if ( posiçaoColunaRainha === posiçaoColunaInimigo || posiçaoLinhaRainha === posiçaoLinhaInimigo) {
    ataquefeito = true ;
} 
 //diagonal superios esquerdo
for(let i = 1; i < 8; i++ ){
    //criando o andar da peça sem mexer ela mesmo 
    let linha = posiçaoLinhaRainha + i ;
    let coluna = posiçaoColunaRainha + i;

    if ( linha > 8 ||  coluna > 8){
        break;
    }

    if ( posiçaoLinhaInimigo === linha && posiçaoColunaInimigo === coluna) {
        ataquefeito = true;
    }
}
console.log(ataquefeito);