'use strict'

import { getContatos ,getContatosPorNome } from "./contato.js"



// Função que cria e exibe um "card" visual com os dados de um contato
function criarCard(contato){
    console.log(contato)
    const container = document.getElementById('container')
    const card = document.createElement('div')
        card.classList.add('card-contato')
        card.innerHTML = `
               <img src="${contato.foto}" alt="">
                <h2>${contato.nome}</h2>
                <p>(${contato.celular}</p>
            `
    container.appendChild(card)
}
// Função que busca todos os contatos e os exibe na tela
async function exibirContatos(){
    const contatos = await getContatos()
    contatos.forEach(criarCard)
}
    
// Função que responde ao evento de pressionar uma tecla na caixa de busca
async function exibirPesquisa(evento){
    if(evento.key == 'enter'){// Verifica se a tecla pressionada foi "Enter"
        const contatos = await getContatosPorNome(evento.target.value)
        container.replaceChildren()
        contatos.forEach(criarCard)
    }
}


exibirContatos()

document.getElementById('pesquisar').addEventListener('keydown', exibirPesquisa)

