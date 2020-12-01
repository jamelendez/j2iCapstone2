const express = require('express');
const mongoose = require('mongoose')
const path = require('path')
const config = require('config');



const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose.set('useFindAndModify', false);
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));



// Use Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/serverInfo', require('./routes/api/serverInfo'));
app.use('/api/digitalInputs', require('./routes/api/digitalInputs'));
app.use('/api/digitalOutputs', require('./routes/api/digitalOutputs'));
app.use('/api/analogInputs', require('./routes/api/analogInputs'));
app.use('/api/analogOutputs', require('./routes/api/analogOutputs'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port ' + port));





