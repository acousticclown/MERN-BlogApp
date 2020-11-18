const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(express.static('public'))

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`connection established successfully`);
});

const articlesRouter = require('./routes/articles');
app.use('/articles', articlesRouter);

if(process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
