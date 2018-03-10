var express = require('express');
var router = express.Router();
var AuthorController = require('../controllers/authorController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/authors', AuthorController.findAuthor)
router.post('/authors', AuthorController.createAuthor)
router.delete('/authors/:idAuthor', AuthorController.deleteAuthor)

module.exports = router;
