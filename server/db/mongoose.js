var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

 mongoose.connect('mongodb://user:user123@ds239117.mlab.com:39117/todo-api').then(() => {
 }).catch((e) =>{
     mongoose.connect(process.env.MONGODB_URI);
 });

//mongoose.connect(process.env.MONGODB_URI);

module.exports = {
    mongoose
}


