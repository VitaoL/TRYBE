let nomePeça = "rei";
switch(nomePeça.toLowerCase()){
    case'peao':
    console.log('peões se movem somente para frente, uma casa por vez.');
    break;
    case'bispo':
    console.log('O bispo se move em uma linha reta diagonalmente no tabuleiro.');
    break;
    case'torre':
    console.log('A torre se move em linha reta horizontalmente e verticalmente.');
    break;
    case'cavalo':
    console.log('O movimento do cavalo forma um “L”.')
    break;
    case'rainha':
    console.log('Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. A rainha se move como a torre e o bispo combinados.');
    break;
    case'rei':
    console.log('O rei pode se mover para qualquer casa adjacente.');
    break;
}