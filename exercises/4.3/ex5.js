let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
  info['recorrente'] = 'sim';
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "sim"
  };
for (let i in info2){
    if(info[i] != info2 [i]){
        console.log(info[i] + " e " + info2[i]);
    }
    else{
        console.log("Ambos " + i);
    }
}

