const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');


const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
    _id : userOneId,
    email: 'ran@gmail.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({ _id: userOneId, access: 'auth' }, 'qwe123').toString()
    }]
}, {
    _id : userTwoId,
    email : 'ran2@gmail.com',
    password: 'userTwoPass'
}];


const todos = [
    {
        _id: new ObjectID(),
        text: "First test todo",
        completed: false
    }, {
        _id: new ObjectID(),
        text: "Second test todo",
        completed: true,
        completedAt: 333
    }];
    

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        Todo.insertMany(todos)
    }).then(() => done())
};

const populateUsers = function(done) {
    this.timeout(5000);
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
        done();
    }).then(() => done())
};

module.exports = {todos, populateTodos, users, populateUsers};