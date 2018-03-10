var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new Schema({
  username: String,
  password: String,
  articleList: [{type: Schema.Types.ObjectId, ref: 'Article'}]
});

var Author = mongoose.model('Author', authorSchema);

module.exports = Author

