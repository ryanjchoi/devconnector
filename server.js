/*
* @Author: Ryan Choi
* @Date:   2018-08-22 22:14:00
* @Last Modified by:   Ryan Choi
* @Last Modified time: 2018-08-24 07:05:32
*/

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extented: false}));
app.use(bodyParser.json());

// DB Config
// const dbtest = require('./config/keys').mongoURI; ???
const db = 'mongodb://ryan:ryanchoi1@ds051645.mlab.com:51645/devconnector';

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello'));

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));