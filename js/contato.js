
'use strict'

// Busca todos os contatos da API.
export async function getContatos () {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'
    const response = await fetch(url)
    const data = await response.json()
    return data
}
// Busca contatos pelo nome
export async function getContatosPorNome (nome) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos?nome_like=^${nome}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

// Busca um contato específico pelo ID.
async function getContato (id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
    return data
}

// Envia (cadastra) um novo contato para a API.
export async function postContato(contato) {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }
    const response = await fetch (url, options)

    return response.ok
}

// Atualiza um contato existente com base no ID.
async function putContato(id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }
    const response = await fetch (url, options)

    return response.ok
}

// Deleta um contato existente com base no ID.
async function deleteContato(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'DELETE'
    }    
    const response = await fetch(url, options)
    return response.ok
}
