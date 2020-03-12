/**
 * Arquivo produto.js
 * Descrição: arquivo responsavel onde trataremos o modelo da classe 'Produto'
 * Data:12/03/2020
 */

 const mongoose = require('mongoose')
 const Schema = mongoose.Schema

 /**
  * Produto:
  * 
  * ->Id:int
  * ->Nome: String
  * ->Preco: Number
  * ->Descricao: String
  */

const ProdutoSchema = new Schema({
    nome: String,
    preco: Number,
    descricao:String
})

module.exports = mongose.model('Produto', ProdutoSchema)