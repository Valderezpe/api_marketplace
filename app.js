const express = require('express');
const app =express();
app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    return res.send('novsa mensagem')
})
app.get('./username/:name', (req, res)=>{
    return res.send('o username digitado foi' + req.params.name)
})

app.post('/users', (req, res)=>{
    return res.json(req.body)
})

app.put('./users/:id', (req, res)=>{
    const id = req.params.id
    return res.json({msg:`usuario ${id} foi alterado com sucesso`})
})

app.delete('/users/:id', (req, res)=>{
    const id = req.params.id
    return res. json({msg: ` Usuario ${id} excluido com sucesso`})
})
module.exports = app;