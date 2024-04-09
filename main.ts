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