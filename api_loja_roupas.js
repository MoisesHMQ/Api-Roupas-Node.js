const { request, response } = require('express');
const express = require('express');
const app = express();
var uuid = require('uuid');

const Roupas = [];

app.post('/Roupas/cadastro', (request, response) => {  
    const validarRoupas = Roupas.find((validar) => validar.roupa == request.body.roupa)
        if (validarRoupas){
            return response.send("Erro: Rg já Cadstrado.")} 
    Roupas.push({
            id: uuid.v4(),
            roupa: request.body.roupa,
            tamanho: request.body.tamanho,
            cor: request.body.cor
        })
        return response.send("Status: Modelo Cadastrado com Sucesso")
    })

app.get('/listar/roupas', (request, response) => {
    console.log(request.body);
    return response.json(Roupas)
})


app.post('/excluir/roupas', (request,response) => {
    const id = Roupas.indexOf('id');
    const dell = Roupas.splice(id,1)
        console.log("Roupa excluida...")
    return response.send(dell)
})

const tenis = [];

app.post('/cadastro/tenis', (request, response) => {
    const validartenis = tenis.find((validaçao) => validaçao.Tenis == request.body.Tenis)
        if (validartenis){
            return response.send("Status: Tenis Já Cadastrado.")}
        
        tenis.push({
        id: uuid.v4(),
        Tenis: request.body.Tenis,
        numero: request.body.numero    
    })
    return response.send("Tenis cadastrado.")
})

app.get('/listar/tenis', (request, response) => {
    console.log(request.body);
    return response.json(tenis)
})

app.post('/excluir/tenis', (request,response) => {
    const id = tenis.indexOf('id');
    const dell = tenis.splice(id,1)
        console.log("Tenis excluido...")
    return response.send(dell)
})

const cliente = [];

app.post('/cadastro/cliente', (request, response) => {
    const validarcliente = cliente.find((user) => user.nome == request.body.nome)
        if (validarcliente){
            return response.send("Erro: nome Já Cadastrado.")}
        
        cliente.push({
        id: uuid.v4(),
        nome: request.body.nome,
        senha: request.body.senha    
    })
    return response.send("nome cadastrado.")
})


app.get('/listar/cliente', (request, response) => {
    console.log(request.body);
    return response.json(cliente)
})

app.post('/excluir/cliente', (request,response) => {
    const id = cliente.indexOf('id');
    const delete_id = cliente.splice(id,1)
        console.log("Tenis excluido...")
    return response.send(delete_id)
})


app.listen(3000, () => {
    console.log('Status: Loja Aberta...')
    })
