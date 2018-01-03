const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '5a4b772be99c621ed0dd62d8';


// if(!ObjectID.isValid(id)){
//     console.log('ID not valid')
// }

// Todo.find({
//     _id:id
// }).then((todos) => {
//     console.log('Todos:',todos);
// })

// Todo.findOne({
//     _id:id
// }).then((todo) => {
//     console.log('Todo:',todo);
// })

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log("ID not found")
//     }
//     console.log('Todo (FinddById):',todo);
// }).catch((e) => console.log(e))

var userId = '5a4b3feefc7a032b90836fb5';
User.findById(userId).then((user) => {
    if(!user){
        return console.log('User ID not found')
    }
     console.log('User: ', user)
}).catch((e) => console.log(e.message))