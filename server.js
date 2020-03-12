

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

    // Rptas que irão terminar em 'produtos/:produto_id' (servir tanto para:GET, PUT, & DELETE:id):
    router.route('/produtos/:produto_id')

    /* 3) Método: Selecionar por Id: (acessar em GET http://localhost:8000/api/produtos/:produto_id) */
    .get((req,res)=>{
        
        //Função para poder Selecionar uma deterninado produto por ID - Ira verificar se caso não encontrar
        //determinado produto pelo id ... retorne uma mensagem:
        Produto.findById(req.params.produto_id, (error,produto)=>{
            if(error)
                res.send('ID do produdo não encontrado .....' + error)

            res.json(produto)
        })
    })


    /* 4) Metodo: Atualizar por Id (acessar em: PUT http://localhost:8000/api/produto/:produto_id) */
    .put((req,res)=>{
        
        //primeiro: para atualizar, precisamos achar 'Id' do 'Produto':
        Produto.findById(req.params.produto_id, (error, produto)=>{
            if(error)
                res.send('ID do produto não encontrada ... ' + error)

                //segundo: atualizar os dados 
                produto.nome = req.body.nome
                produto.preco = req.body.preco
                produto.descricao = req.body.descricao

            //terceiro: Salvar os valores dos dados
                produto.save((error)=>{
                    if(error)
                        res.send('Erro ao atualizar o produto...... ' + error)

                    res.json({message: 'Produto atualizado com sucesso!'})
            })


        })
    })

    /* 5) Método: excluir por Id (acessar: http://localhost:8000/api/produto/:produto_id) */
    .delete((req,res)=>{

        Produto.remove({
            _id: req.params.produto_id
        },(error)=>{
            if(error)
                res.send('Id do produtod não encontrado...' + error)

            res.json({mesage: 'Produto excluir com Sucesso!'})
            
        })
    })

//definindo um padrão das rotas prefixadas: '/api'
app.use('/api/', router)

//Iniciando a Aplicação (servidor)
app.listen(port, ()=>{
    console.log("servidor funcionando na porta: " + port)
})
