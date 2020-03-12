

//Congidurar setup da App:

//Chamadas dos pacotes
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Produto = require('./app/models/produto')

mongoose.connect('mongodb://localhost:27017/node-crud-api-produtos')

//Configuração da variável app para usar  o 'bodyParse()'
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Definindo a porta onde será executada a nossa api:
const port = process.env.port || 8000

//Criando uma instancia das rotas via express
const router = express.Router()

//Rota de exemplo:
router.get('/', (req, res)=>{
    res.json({ message: 'Benvindo a nossa loja XYZ...'})
})

//definindo um padrão das rotas prefixadas: '/api'
app.use('/api/', router)

//Iniciando a Aplicação (servidor)
app.listen(port, ()=>{
    console.log("servidor funcionando na porta: " + port)
})
