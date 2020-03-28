let angulo1 = 'nuolasd';
let angulo2 = 60;
let angulo3 = 60;
let result = false;
if( typeof angulo1 == "number" && typeof angulo2 == "number" && typeof angulo3 == "number" ){
    if( angulo1 === 0 || angulo2 === 0 || angulo3 === 0 ){

        console.log('angulos invalidos para triangulo');

    }
    else{

        let soma = ( angulo3 + angulo2 + angulo1 );

        if (soma === 180 ){
            result = true ;
        }
        else{
            result = false;
        }
    }
        
}
else{
    console.log('por favor inserir angulos validos');
}
console.log(result);