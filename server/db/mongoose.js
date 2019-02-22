var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI);
mongoose.connect('mongodb+srv://orjerby:1@cluster0-dc2za.mongodb.net/test?retryWrites=true');

module.exports = {
    mongoose
};