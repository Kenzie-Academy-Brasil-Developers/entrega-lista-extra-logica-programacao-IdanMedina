/*descomentar o 'console.log' no fim de cada função do kata
 para ver o resultado*/

function calculateSalary(salario, venda) {
  let comissao = 0;
  if (venda <= 1200) {
    comissao = venda * 0.03;
  } else if (venda > 1200) {
    let vendaPlus = venda - 1200;
    comissao = (vendaPlus * 0.05)+36;
  }
  let result = comissao + salario;

  return result;
}
//console.log(calculateSalary(1500, 1000))
//console.log(calculateSalary(1500, 1500))

function cashMachine(saque, salario, vendas) {
  let salarioTotal = salario + vendas;
  let saldo = salarioTotal - saque;
  let contador = {
    200: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
  };
  if (saque >= 200) {
    contador[200] += parseInt(saque / 200);
    saque -= contador[200] * 200;
  }
  if (saque >= 100) {
    contador[100] += parseInt(saque / 100);
    saque -= contador[100] * 100;
  }
  if (saque >= 50) {
    contador[50] += parseInt(saque / 50);
    saque -= contador[50] * 50;
  }
  if (saque >= 20) {
    contador[20] += parseInt(saque / 20);
    saque -= contador[20] * 20;
  }
  if (saque >= 10) {
    contador[10] += parseInt(saque / 10);
    saque -= contador[10] * 10;
  }
  if (saque >= 5) {
    contador[5] += parseInt(saque / 5);
    saque -= contador[5] * 5;
  }
  if (saque >= 2) {
    contador[2] += parseInt(saque / 2);
    saque -= contador[2] * 2;
  }console.log(contador)

  return `Notas sacadas: ${contador[200]} notas de R$ 200,
   ${contador[200]} notas de R$ 100,
   ${contador[100]} notas de R$ 50,
   ${contador[20]} notas de R$ 20,
   ${contador[10]} notas de R$ 10,
   ${contador[5]} notas de R$ 5,
   ${contador[2]} notas de R$ 2,
   Saldo Atual: R$${saldo}`;
}
//console.log(cashMachine(777,1200,475))

function calculateStock(quantAtual, quantMax, quantMin) {
let quantMed = (quantMax+quantMin)/2;
if (quantAtual >= quantMed) {
    return 'Não efetuar compra'
}
else {return 'Efetuar compra'}
}
//console.log(calculateStock(10,12,8))
//console.log(calculateStock(10,12,9))

function calculateAge(anoNatal, anoAtual) {
let idade = anoAtual - anoNatal;
let idadeMeses = idade*12;
let idadeDias = idade*365;
let idadeSemanas = parseInt(idadeDias/7);

return (`${idade} anos, ou ${idadeMeses} meses, ou ${idadeDias} dias ou então ${idadeSemanas} semanas`)
}
//console.log (calculateAge(1988,2022))
let matriz = [[1,2,3,4,5],
              [6,7,8,9,10],
              [11,12,13,14,15],
              [16,17,18,19,20],
              [21,22,23,24,25]]
function getDiagonal(raiz) {
    let diagonal = []
for (let i =0; i < raiz.length; i++){
    for (let j = 0; j < raiz[i].length; j++) {
        if(j == i) {diagonal.push(raiz[i][j])}
    }
} return diagonal
}
//console.log(getDiagonal(matriz))