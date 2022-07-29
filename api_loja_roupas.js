const { request, response } = require('express');
const express = require('express')
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


app.listen(3000, () => {
    console.log('Status: Loja Aberta...')
    })
