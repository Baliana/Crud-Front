'use strict'
// Função para buscar todos os contatos da API
export async function getContatos(){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`
    const response = await fetch(url)
    const data = await response.json()
    return data 
}
// Função para buscar contatos pelo nome 
export async function getContatosPorNome(nome){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos?nome_like=^${nome}`
    const response = await fetch(url)
    const data = await response.json()
    return data 
}
// Função para buscar um único contato pelo ID
export async function getContato(id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return data 
}
// Função para cadastrar (POST) um novo contato
async function postContato(contato){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`
    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }
    const response = await fetch(url, options)
    return response.ok
}

// Função para editar (PUT) um contato existente
async function putContato(id,contato){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }
    const response = await fetch(url, options)
    return response.ok
}
// Função para deletar um contato específico pelo ID
async function deleteContato(id) {
     const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
     const options ={
        method: 'DELETE'
     }
    const response =  await fetch(url, options)

    return response.ok
}

const novoContato = {
    "nome": "Miguel Baliana",
    "celular": "11 9 7171-6784",
    "foto": "../img/logo.png",
    "email": "Miguel@gmail.com",
    "endereco": "rua joão guilherme",
    "cidade": "taboao da serra "
}