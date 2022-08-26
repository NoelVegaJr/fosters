const express = require('express');
const app = express();
const port = 3001
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const mongoURI = 'mongodb+srv://noel:Spring120894$@fosters.duamo.mongodb.net/?retryWrites=true&w=majority'
const mongoose = require('mongoose');

async function mongooseConnection(URI) {
  try {
    await mongoose.connect(URI);
    console.log("Successfull Connection");
  } catch(error) {
    console.error(error);
  }
  mongoose.disconnect();
}

mongooseConnection(mongoURI);

app.get('/', (req, res) => {
  res.send("hello world");
})




app.listen(port, ()=> {
  console.log(`running on port ${port}` )
})