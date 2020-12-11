var mongoose = require('mongoose')

var dburi = 'mongodb+srv://rohitWebDB:rohit6691@dataconnectivity-iqlzn.mongodb.net/mobileDB?retryWrites=true&w=majority';

mongoose.connect(dburi, {dbname: 'mobileDB'})

mongoose.connection.on('connected', function(){
    console.log("Aplication is connected to database::" +dburi);
    disconnect()
})

mongoose.connection.on('error', function(error){
    console.log("Errr..", +error);
})
function disconnect(){
    mongoose.connection.on('disconnected',function(){
        console.log("Aplication is disconnected to database"); 
    })
}

require('./mobile');
