const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.connection.on('connected',()=>{
    console.log('Database connected...');
})


module.exports.User = require('./user');
module.exports.Poll = require('./poll');