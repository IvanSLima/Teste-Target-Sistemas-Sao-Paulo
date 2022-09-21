// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;


const dadosJson = require('./dados.json')

//Separando os valores 0 de faturamento
const semZero = dadosJson.filter((arr) => {
    return arr.valor > 0;
})

//O menor valor de faturamento ocorrido em um dia do mês;
const menorValor = semZero.reduce((prev, curr) => {
    return (prev.valor < curr.valor) ? prev : curr
})

//O maior valor de faturamento ocorrido em um dia do mês;
const maiorValor = dadosJson.reduce((prev, curr) => {
    return (prev.valor > curr.valor) ? prev : curr
})


//Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. 
const somaTotal = dadosJson.map(valor => valor.valor).reduce((prev, curr) => prev + curr, 0)
const media = somaTotal / dadosJson.length;
const dias = dadosJson.filter((arr) => {
    return arr.valor > media;
})

console.log('Maior valor:', maiorValor)
console.log('Menor valor:', menorValor)
console.log('Números de dias no mês que apresentam o valor de faturamento diário maior que a média mensal: ', dias.length)