let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

info['recorrente'] = 'sim';

for ( let i in info){
    console.log(info[i]);
}