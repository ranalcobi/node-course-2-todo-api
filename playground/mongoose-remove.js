const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');




// Todo.remove({}).then((result) => {
//     console.log(remove);
// });

// Todo.findOneAndRemove({_id: '5a4b8d0d0ea7171490bada3d'}).then((todo) => {
//    console.log(todo);
// });


Todo.findByIdAndRemove('5a4b8d0d0ea7171490bada3d').then((todo) => {
    console.log(todo);
});