const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


const criar = (objeto,key, value) => objeto[key] = value;
criar(lesson2,'turno','noite');
console.log(`exercicio 8.2.  1 : ${Object.keys(lesson2)},${Object.values(lesson2)}`);



let listar = (item) => { 
    const x = Object.keys(item);
    for (i in x) {
        console.log(`${x[i]} `);
    } 
};

console.log(`exercicio 2: ${listar(lesson2)} <-DUVIDA NESSE CONSOLE `);

let tamanho = (item) => console.log(Object.keys(item).length);
console.log(`exercicio 3 : ${tamanho(lesson1)}`);


const allLessons = (item1, item2, item3) => { 
const a = Object.entries(item1,item2,item3);

console.log(a)
}

allLessons(lesson1,lesson2,lesson3);

const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);
  



  