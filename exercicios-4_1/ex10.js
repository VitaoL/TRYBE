let custoProduto = 5 ;
let valorVenda = 0 ;
let lucro;

if( custoProduto === 0 || valorVenda === 0){
    console.log('coloque valores maiores que 0');
}
else{
    let imposto = custoProduto * 0.2 ;
    lucro = 1000 * ( valorVenda - (imposto + custoProduto)); 
    console.log( 'valor do lucro em mil produtos ',lucro);
}
