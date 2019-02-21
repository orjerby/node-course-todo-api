const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// var id = "5c6e795811ff8f1a48e890f411";

// if (!ObjectID.isValid(id)) {
//     console.log("ID is not valid");
// }

// Todo.find({
//     _id: id // mongoose doesnt required to pass object id's
// }).then((todos) => {
//     console.log('Todos:', todos);
// });

// Todo.findOne({
//     _id: id // mongoose doesnt required to pass object id's
// }).then((todo) => {
//     console.log('Todo:', todo);
// })

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id:', todo);
// }).catch((e) => {
//     console.log(e);
// });

if (!ObjectID.isValid("5c6dba5f6692bf0100ab2adb")) {
    console.log('ID is not valid');
}
User.findById("5c6dba5f6692bf0100ab2adb").then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));