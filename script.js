let display = document.getElementById('display')
let numero = document.querySelectorAll('.numero')
let limpar = document.getElementById('limpar')
let operadores = document.querySelectorAll('.operador')
let calcular = document.getElementById('calcular')

let valorAtual = ''
let primeiroNumero = null
let operadorAtual = ''

numero.forEach(function(botao) {
    botao.addEventListener('click', function() {
        valorAtual += botao.textContent
        display.textContent = valorAtual
    })
})


operadores.forEach(function(operador) {
    operador.addEventListener('click', function() {
        primeiroNumero = valorAtual
        operadorAtual = operador.textContent
        valorAtual = ''
    })
})

calcular.addEventListener('click', function() {
    const a = parseFloat(primeiroNumero)
    const b = parseFloat(valorAtual)
    let resultado

    if (operadorAtual === '+') {
        resultado = a + b
    }
    if (operadorAtual === 'x') {
        resultado = a * b
    }
    if (operadorAtual === '-') {
        resultado = a - b
    }
    if (operadorAtual === '/') {
        resultado = a / b
    }

    display.textContent = resultado
    valorAtual = resultado
})

limpar.addEventListener('click', function() {
    display.textContent = ''
    valorAtual = ''
    operadorAtual = ''
    primeiroNumero = null

})