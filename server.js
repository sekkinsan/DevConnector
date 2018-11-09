const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected')) //if it connects console log
  .catch(err => console.log(err)); // if it fails

app.get('/', (req, res) => res.send('Hello~'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));