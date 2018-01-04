var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost:27017/TodoApp').then(() => {
// }).catch((e) =>{
//     mongoose.connect('mongodb://user:user123@ds239117.mlab.com:39117/todo-api');
// });

mongoose.connect(process.env.MONGODB_URI);

module.exports = {
    mongoose
}


