var express = require('express');
var bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

//post new todo
app.post('/todos',(req, res) =>{
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
})

//Get all todos
app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
        res.send({todos}); 
    }, (e) =>{
        res.status(400).send(e)
    })
});

//Get todo by ID
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if( !ObjectID.isValid(id) ){
        return res.status(404).send()
    }
    Todo.findById(id).then((todo) => {
        if(!todo){
            return res.status(404).send()
        }
        res.send({todo})
    }).catch((e) => {
        res.status(400).send(e)
    });
    //res.send(req.params)
});

app.delete('/todos/:id', (req,res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        return res.send({todo});
    }).catch((e) => {
        return res.status(404).send(e)
    })

})


app.listen(port, () => {
    console.log(`Started up at port ${port}`);
})

module.exports = {app};