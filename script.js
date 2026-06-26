let opcoes = document.querySelectorAll('.opcao')
let result = document.getElementById('resultado')

opcoes.forEach(function(btn) {
    btn.addEventListener('click', function() {

        result.textContent = `Clicou no ${btn.textContent}`
    })
})