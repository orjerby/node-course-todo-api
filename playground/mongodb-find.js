// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    const db = client.db('TodoApp');

    // db.collection("Todos").find({
    //     _id: new ObjectID('5c6d628b45fd8a29443224bb')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection("Todos").find({ text: 'Walk the dog' }).count().then((count) => {
        console.log('Todos count:', count);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').find({ name: 'Or' }).toArray().then(docs => {
        console.log(JSON.stringify(docs, undefined, 2));
    });

    // client.close();
});