/*CRIE UM ALGORITMO QUE LEIA UMA LISTA E RETORNE DUAS NOVAS LISTAS CONTENDO NUMEROS PARES E NUMEROS IMPARES OBS. A LISTA DEVE CONTER NUMEROS DE 1 A 9 E USAR A ESTRUTURA E REPETIÇÃO FOR */

//DECLARANDO A VARIAVEL

let listaNumeros=[1,2,3,4,5,6,7,8,9];
let pares=[];
let impares=[];


for(let numeros of listaNumeros){
    if(numeros % 2 ==0){
        pares.push(numeros)
    }else{
        impares.push(numeros)
    }
}
console.log(pares)
console.log(impares)
