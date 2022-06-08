/* Algoritmo

1 - Digitar o valor total da conta no input bill e pegar esse valor;
2 - Digitar o número de pessoas na mesa no input numberPeople e pegar esse valor;
3 - Selecionar um dos botões de tip ou input custom;
4 - Multiplicar a conta pelo percentual de gorjeto que estão nos botões e/ou TipCustom e descobrir 
o percentual do tip;
5 - Dividir o valor da gorjeto pelo número de pessoas;
6 - Dividir o valor total da conta + gorjeta pelo número de pessoas;
4 - Exibir com o DOM no p tipAmountPerson, o valor da gorjeta por pessoa;
5 - Exibir com o DOM no p totalPerson, o valor total da conta com gorjeta por pessoa;
6 - Clicar no botão reset para limpar as operações;

Pesquisar sobre Onchange e Eventlistener

*/

function botao(percentage){

  const tipCustom = document.getElementById('tipCustom');
  const reset = document.getElementById('clean')
  const bill = parseFloat(document.getElementById('valorConta').value) ;
  const numberPeople = parseFloat(document.getElementById('numberPeople').value);
  const tipAmountPerson = document.getElementById('tipAmountPerson');
  const totalPerson = document.getElementById('totalPerson');

  let percentualBill = bill * percentage/100;

  let totalconta = percentualBill + bill;

  let tipPorPessoa = percentualBill / numberPeople;
  tipAmountPerson.innerHtml = tipPorPessoa

  let totalContaPorPessoa = totalconta / numberPeople;
  totalPerson.innerHtml = totalContaPorPessoa

  console.table(percentualBill)
  console.table(totalconta)
  console.table(tipPorPessoa)
  console.table(totalContaPorPessoa)

}

function clean() {
  bill.innerHTML = " ";
  tipCustom.innerHTML += " ";
  numberPeople.innerHTML += " ";
  tipAmountPerson.innerHTML += " ";
  totalPerson.innerHTML += " ";
}

