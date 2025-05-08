
'use strict'

import { getContatos, getContatosPorNome, postContato } from "./contato.js"

// Cria e exibe um card com as informações de um contato
function criarCard (contato) {
    const container = document.getElementById('container')
    const card = document.createElement('div')    
    card.classList.add('card-contato')
    card.innerHTML = `
            <img src="${contato.foto}" alt="">
            <h2>${contato.nome}</h2>
            <p>${contato.celular}</p>
    `
    container.appendChild(card)
}

// Busca e exibe todos os contatos na tela
async function exibirContatos () {
    const container = document.getElementById('container')
    const contatos = await getContatos()
    container.replaceChildren()
    contatos.forEach(criarCard)
}

// Faz a busca de contatos pelo nome ao pressionar "Enter"
async function exibirPesquisa (evento) {
    const container = document.getElementById('container')
    if (evento.key == 'Enter') {
        const contatos = await getContatosPorNome(evento.target.value)
        container.replaceChildren()
        contatos.forEach(criarCard)
    }
    
}


// Mostra o formulário de cadastro de novo contato
function cadastroContato () {
    document.querySelector('main').className = 'form-show'
}

// Volta para a visualização dos cards de contato
function voltarHome () {
    document.querySelector('main').className = 'card-show'
}

// Salva um novo contato preenchido no formulário e atualiza a lista
async function salvarContato () {
    const contato = {
            "nome": document.getElementById('nome').value,
            "celular": document.getElementById('celular').value,
            "foto": document.getElementById('foto').value,
            "email": document.getElementById('email').value,
            "endereco": document.getElementById('endereco').value,
            "cidade": document.getElementById('cidade').value
        }

        if (await postContato(contato)){
            await exibirContatos()
            voltarHome()
            alert ('Cadastro realizado com sucesso!!!')
        }
        
}

exibirContatos()

// Adiciona evento para pesquisar contatos ao pressionar Enter
document.getElementById('pesquisar')
        .addEventListener('keydown',exibirPesquisa)

        // Adiciona evento para exibir o formulário de novo contato
document.getElementById('novo-contato')
        .addEventListener('click', cadastroContato)

// Adiciona evento para cancelar e voltar à tela de contatos
document.getElementById('cancelar')
        .addEventListener('click', voltarHome)

         // Adiciona evento para salvar um novo contato
document.getElementById('salvar')
        .addEventListener('click', salvarContato)
