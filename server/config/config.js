var env = process.env.NODE_ENV || 'development';

process.env.MONGODB_URI = 'mongodb+srv://orjerby:1@cluster0-dc2za.mongodb.net/test?retryWrites=true';
if (env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}