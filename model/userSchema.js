const mongooes = require('mongoose');

const userschema = new mongooes.Schema({
    name:({
        type:String
    })
    
});

var model = mongooes.model('user',userschema);

module.exports = model;