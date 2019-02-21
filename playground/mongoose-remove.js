const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({ _id: '5c6ea8c2341c63f43e6da932' }).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5c6ea8c2341c63f43e6da932').then((todo) => {
    console.log(todo);
});