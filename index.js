const express = require('express');

const server = express();
server.use(express.json())
// tipos de parametros
// Query params = ?nome=Nodejs
// route params = /curso/2
// request body = {nome:'nodejs', tipo:'backend'}

const cursos = ['Node', 'js', 'react']

server.get('/curso', (req, res) => {
    return res.json(cursos);
})
server.get('/curso/:index', (req, res) => {
    const {
        index
    } = req.params;
    return res.json(cursos[index]);

})
server.delete('/curso/:index', (req, res) => {
    const {
        index
    } = req.params;
    cursos.splice(index, 1)
    return res.json(cursos[index]);

})

server.post('/curso', (req, res) => {
    const {
        name
    } = req.body;
    cursos.push(name)
    return res.json(cursos)
})
server.put('/curso/:index', (req, res) => {
    const {
        name
    } = req.body;
    const {
        index
    } = req.params
    cursos[index] = name;
    return res.json(cursos)
})



server.listen(3000);