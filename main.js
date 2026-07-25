'use strict'

const botaoCalcular = document.getElementById('calcular')
const botaoLimpar = document.getElementById('limpar')

function mostrarComissao() {
    const nome = document.getElementById('caixa-nome')
    const valor = document.getElementById('caixa-valor')
    const resultado = document.getElementById('resultado')

    const salario = Number(valor.value) * 0.08

    resultado.textContent = `${nome.value}, o valor das vendas é: R$${valor.value},00 e o salário é: R$${salario},00`
}

function limpar() {
    const inputNome = document.getElementById('caixa-nome');
    const inputVendas = document.getElementById('caixa-valor');
    const divResultado = document.getElementById('resultado');

    inputNome.value = "";
    inputVendas.value = "";
    divResultado.textContent = "O resultado vai aparecer aqui"; 
    inputNome.focus();
}

botaoCalcular.addEventListener('click', mostrarComissao)
botaoLimpar.addEventListener('click', limpar)