const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }

    console.log('Connected to MongoDB server')
    
    var db = client.db('TodoApp');


    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID('5a4b351dbed8bd0b1c6ed05e')
    //  }, {
    //      $set: { completed: true } 
    //  }, {
    //     returnOriginal: false 
    //  }).then((result)=> {
    //      console.log(result);
    //  })

     db.collection('Users').findOneAndUpdate({
         _id: new ObjectID('5a4a4388b1b4e00fd0511b1b')
     }, {
         $set: {name: 'Ran'},
         $inc: {age: 1}
     },{
         returnOriginal: false
     }).then((result) => {
         console.log(result);
     });

   // client.close();

});