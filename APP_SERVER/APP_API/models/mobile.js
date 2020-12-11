var mongoose = require('mongoose');



const specSchema = new mongoose.Schema({
    ram: {type: String},
    storage: {type: String},
    display: {type: String},
    camera: {type: String}

});


var mobileSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:3},
    type: {type: String},
    brand: {type: String},
    reviews: {type: String},
    price: {type: String},
    specifications: specSchema
   

});



var mobileModel = mongoose.model('Mobile', mobileSchema);
module.exports = {mobileModel}