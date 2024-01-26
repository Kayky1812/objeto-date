// funcao construtora sempre começa com letra maiuscula

const data = new Date ();       //01/01/1970 timestamp Unix
const dataBrasil = formataData(data);
console.log(dataBrasil)
 //os meses em js começa em 0 - janeiro e termina em 11 de dezembro 
// os dias começam com 0 que é domingo e termina com 6 que é sabado 

// formato da data é composto por ano,mes,dia, hora, minuto e segundos

// console.log(data.getDay)
// console.log(data.getMonth)
// console.log(data.getHours)

// criando funcao para formatar a data

function formataData(data){
   // console.log(data);
   const dia = zeroEsquerda(data.getDate());
   const mes = zeroEsquerda(data.getMonth() + 1 );
   const ano = zeroEsquerda(data.getFullYear());

   return `${dia}/${mes}/${ano}`
}

function zeroEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

