const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }

    console.log('Connected to MongoDB server')
    
    var db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a4a3e51d4cfe70eacf6bd84')
    // }).toArray().then((docs) => {
    //     console.log('Todos:')
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`)
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name:'Ran'}).toArray().then((docs) => {
        console.log('Users: ')
        console.log(JSON.stringify(docs,undefined,2))
    },(err) => {
        console.log('Unable to get Users data: ',err)
    })

   // client.close();
});