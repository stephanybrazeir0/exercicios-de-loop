//1
// for(let i = 0; i < 41; i++){
//   console.log(i);
// }


// 2
// function leiaNumero(numero: number){
//   let resultado = [];
//   for(let i = 0; i <= numero; i++){
//    resultado[i] = i;
//   }
//   return resultado;
// }

// console.log(leiaNumero(7));


// 3
// function leiaDoisNumeros(m: number, n:number){
//   if(m < n){
//     for(let i = m; i <= n; i++){
//       console.log(i)
//     }
//   }
// }

// console.log(leiaDoisNumeros(5,10));

// //4 
// function leiaDoisNumerosImpares(m: number, n: number) {
//   for (let i = m; i <= n; i++) {
//     if (i % 2 !== 0) {
//       console.log(i)
//     }
//   }
// }

// console.log(leiaDoisNumerosImpares(0, 10));

//5
// function leiaDoisNumerosPares (m: number, n: number) {
//   let contador: number = 0;
//   for (let i = m; i <= n; i++) {
//     if (i % 2 === 0 && i != 0) {
//       console.log(i);
//       contador++;
//     }
//   }
//   return "Total: " + contador;
// }

// console.log(leiaDoisNumerosPares(0, 10));

//6
// function leiaDoisNumerosDiv3 (m: number, n: number) {
//   for (let i = m; i <= n; i++) {
//     if (i % 3 === 0 && i != 0) {
//       console.log(i);

//     }
//   }
// }

// console.log(leiaDoisNumerosDiv3(0, 10));

//7
// function leiaM (m: number, id: number, n: number) {
//   for (let i = 0; i < n; i++) {
//     console.log(m)
//     m += id;
//   }

// }

// console.log(leiaM(6, 3, 4));

// 8
// function MaiorMenor(quant: number, array: number[]) {
//   let maior = array[0];
//   let menor = array[0];
//   for (let i = 0; i < quant; i++) {

//     if (array[i] > maior) {
//       maior = array[i];
//     }
//     else if (array[i] < menor) {
//       menor = array[i];
//     }
//   }
//   console.log(maior, menor);
//   return `Maior: ${maior} Menor: ${menor}`;
// }


// console.log(MaiorMenor(8, [9, 2, 7, 8, 3, 6, 2, 1]));

//9
// function leianumeros (n: number[]){
//   n.sort((a, b) => b - a);
//   for (let i = 0; i < 3; i++){
//     console.log(n[i])
//   }
// }

// console.log(leianumeros([6, 2, 1, 399, 2, 3, 1]))

//10

// function naodeterminada (m: number, n: number){
//   if (m >= n){
//     return;
//   }
//   else {
//     for (let i = m; i <= n; i++){
//       console.log(i, n)
//     }
//   }
// }

// console.log(naodeterminada(10,18));

//11
// function numerosPositivos(array: number[]){
//   let contador: number = 0;
//   for(let i = 0; i < array.length; i++){
//     if(array[i] > 0){
//       contador += 1;
//     }
//     else if(array[i] === -1){
//       return contador;
//     }
//     else {
//       return `Número não aceito!`;
//     }
//   }
// }

// console.log(numerosPositivos([1, -5, 3, -1, 5, 6, 5]));

//12

// function contadorNumPositivos(array: number[]){
//   let soma: number = 0;
//   for(let i = 0; i < array.length; i++){
//     if(array[i] > 0){
//       soma += array[i];
//     }
//     else if(array[i] === -1){
//       return soma;
//     }
//     else {
//       return `Número não aceito!`;
//     }
//   }
// }
// console.log(contadorNumPositivos([1, -5, 10, 20, -1, 30]));

//13

// function numerosParesImpares(array: number[]){
//   let impar: number = 0;
//   let par: number = 0;
//   for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 === 0){
//       par++;
//     }
//     else if (array[i] % 2 !== 0 && array[i] !== -1){
//       impar++;
//     }
//     else if(array[i] === -1){
//       return "Pares: " + par + " Impares: " + impar;
//     }
//     else {
//       return `Número não aceito!`;
//     }
//   }
// }
// console.log(numerosParesImpares([2, 3, 4, 5, 6, -1, 20]));

//14

// function numerosMultiplos(array: number[]){
//   let mult2e5: number = 0;
//   let mult2e3: number = 0;
//   for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 === 0 && array[i] % 3 === 0){
//       mult2e3++;
//     }
//     else if (array[i] % 2 === 0 && array[i] % 5 === 0){
//       mult2e5++;
//     }
//     else if(array[i] === -1){
//       return "Multiplos de 2 e 5: " + mult2e5 + " Multiplos de 2 e 3: " + mult2e3;
//     }
//     else {
//       return `Número não aceito!`;
//     }
//   }
// }
// console.log(numerosMultiplos([20, 12, 40, 30, -1, 100]));

//15

// function leiaArray (array: number[]){
//   let par: number = 0;
//   let impar: number = 0;
//   let medPar: number = 0;
//   let medT: number = 0;
//   let somaPar: number = 0;
//   let somaT: number = 0;
  
//   for (let i = 0; i < array.length; i++){
//     if (array[i] > 0){
//       somaT += array[i];
//       if (array[i] % 2 ===0){
//         par++;
//         somaPar += array[i];
//       }
//       else {
//         impar++;
//       }
//     }
//     else if (array[i] === 0){
//       medPar = somaPar/par;
//       medT = somaT/(array.length - 1);
//       return "Pares: " + par + " Impares: " + impar + " Media de Pares: " + medPar + "Media Total: " + medT;
//     }
//     else{
//       return `Número não aceito`;

//     }
//   }
// }
// console.log(leiaArray([7, 2, 3, 4, 5, 0]));