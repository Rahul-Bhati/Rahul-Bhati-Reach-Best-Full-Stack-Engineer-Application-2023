const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const { config } = require('dotenv');

const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
config();

// Connect to mongoDB
mongoose.connect(process.env.MONGODB_URL)
     .then(function () {
          console.log('mongoDB connected');
     })
     .catch(function () {
          console.log('Error :');
     })

// mongoose.connect(process.env.MONGODB_URL)
const bookMatching = new mongoose.Schema({});
const Books = mongoose.model('book-matching', bookMatching, 'book-matching');
console.log(Books.find({}));

// Start the server
app.listen(PORT, () => console.log("Server Open and Connected to Database !"));
