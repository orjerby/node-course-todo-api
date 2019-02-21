var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
// mongoose.connect('mongodb+srv://orjerby:or2402@cluster0-dc2za.mongodb.net/test?retryWrites=true');

module.exports = {
    mongoose
};