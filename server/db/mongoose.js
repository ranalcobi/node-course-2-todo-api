var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//local env

mongoose.connect('mongodb://localhost:27017/TodoApp').then(() => {
}).catch((e) =>{
    mongoose.connect('mongodb://user:user123@ds239117.mlab.com:39117/todo-api');
});


module.exports = {
    mongoose
}

