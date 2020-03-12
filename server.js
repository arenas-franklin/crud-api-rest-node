

//Congidurar setup da App:

//Chamadas dos pacotes
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Produto = require('./app/models/produto')

//configurando o mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/node-crud-api-produtos',
     {useMongoClient:true} 
     ).then(()=>{
        console.log("bando conectado com sucesso!!!!")
     }).catch((err)=>{
         console.log("houve um erro ao se conectar ao mongoDB: "+ err)
     })

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
//=============================================================


//Rotas que terminarem com '/produtos' (servir: Get ALL  & POST)
router.route('/produtos')
    
    /* 1) Método: criar produto (acessar em Post http://localhost:8000/api/produtos)  */
    .post((req,res)=>{
        const produto = new Produto()

        produto.nome = req.body.nome
        produto.preco = req.body.preco
        produto.descricao = req.body.descricao

        produto.save((error)=>{
            if(error)
                res.send('Error ao tentar salvar o produto....' + error)
            
            res.json({message:'Produto Cadasstrado com Sucesso!'})
        })
    })

    /*2) Metodo Selecinar Todos Produtos (acessar em GET http://localhost:8000/api/produto)  */
    .get((req,res)=>{
        Produto.find((error, produtos)=>{
            if(error)
                res.send('Erro ao tentar Selecionar Todos os Produtos ....' + error)

                res.json(produtos)
        })
    })


//definindo um padrão das rotas prefixadas: '/api'
app.use('/api/', router)

//Iniciando a Aplicação (servidor)
app.listen(port, ()=>{
    console.log("servidor funcionando na porta: " + port)
})
