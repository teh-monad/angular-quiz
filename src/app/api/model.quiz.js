const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let quiz= new Schema({
  person_name: {
    type: String
  },
  person_surname: {
    type: String
  },
  person_id: {
    type: Number
  }
},{
    collection: 'quiz'
});

module.exports = mongoose.model('Quiz', quiz);
