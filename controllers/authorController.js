const Author = require('../models/author.js')

class AuthorController{
  static findAuthor (req, res){
    Author.find()
      .then(data=>{
        res.send({message: 'data has found', data: data})
      })
      .catch(error=>{
        res.send({message: 'error broh', error: error})
      })
  }

  static createAuthor (req, res){
    let objData = {
      username: req.body.username,
      password: req.body.password,
      articlesList: []
    }
    Author.create(objData)
      .then(data=>{
        res.send({message: 'data has been create', data: data})
      })
      .catch(error=>{
        res.send({message: 'cannot be created', error: error})
      })
  }

  static deleteAuthor (req, res){
    Author.remove({'_id': req.params.idAuthor})
      .then(data=>{
        res.send({message: 'data has delete', data: data})
      })
      .catch(error=>{
        res.send({message: 'error pas delete', error: error})
      })
  }
}

module.exports = AuthorController

