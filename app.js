const express = require('express');
const app =express();

app.get('/', (req, res)=>{
    return res.send('novsa mensagem')
})

module.exports = app;