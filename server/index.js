const express = require('express');
const app = express();
const port = 3001
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const mongoURI = 'mongodb+srv://noel:Spring120894$@fosters.duamo.mongodb.net/fosters?retryWrites=true&w=majority'
const mongoose = require('mongoose');

async function mongooseConnection(URI) {
  try {
    await mongoose.connect(URI);
    console.log("Successfull Connection");
  } catch(error) {
    console.error(error);
  }
}
const UserModel = require('./models/User');
mongooseConnection(mongoURI);

// middlewares
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send("hello world");
})

app.post('/register', async (req, res) => {
  const {username, firstName, lastName, email, phone, password} = req.body;
  // Checking if user exists
  if(await UserModel.findOne({email})){
    res.send("User already exists");
  }
  
  // User does not exist. Begin creating new user.
  let newUser = new UserModel({
    username,
    firstName,
    lastName,
    email,
    phone,
    password
  })
  await newUser.save();
  res.send("creating users")

});


app.listen(port, ()=> {
  console.log(`running on port ${port}` )
})