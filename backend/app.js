const express = require('express');
const bodyParser = require('body-parser');


const userRoutes = require('./routes/user');
const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});




app.use(bodyParser.json());


app.use('/api/auth', userRoutes);
app.use('/api/post', postsRoutes);
app.use('/api/comment', commentsRoutes);

module.exports = app;