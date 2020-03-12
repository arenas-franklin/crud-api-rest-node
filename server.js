

//Congidurar setup da App:

//Chamadas dos pacotes
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Produto = require('./app/models/produto')

mongoose.connect(
    'mongodb://localhost:27017/node-crud-api-produtos',
     {useNewUrlParser:true}
     ).catch(error=> handleError(error))

//Configuração da variável app para usar  o 'bodyParse()'
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Definindo a porta onde será executada a nossa api:
const port = process.env.port || 8000

//Rotas da nossa API
//=====================================================

//Criando uma instancia das rotas via express
const router = express.Router()

router.use('/', (req,res, next)=>{
    console.log("algo está acontecendo aqui......")
    next()
})


//Rota de exemplo:
router.get('/', (req, res)=>{
    res.json({ message: 'Benvindo a nossa loja XYZ...'})
})

//API's



//definindo um padrão das rotas prefixadas: '/api'
app.use('/api/', router)

//Iniciando a Aplicação (servidor)
app.listen(port, ()=>{
    console.log("servidor funcionando na porta: " + port)
})
