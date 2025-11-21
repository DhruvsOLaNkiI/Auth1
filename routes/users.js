const mongoose = require('mongoose');
const passport = require('passport');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb+srv://user123:user123@cluster0.ofi5bhc.mongodb.net/my-app').then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
  },
  fullName:{
    type: String,
    required: true,
  },
  posts:{
    type : mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
  dp:{
    type: String, // URL for the display picture
  },
  email:{
    type: String,
    required: true,
    unique: true,
  }


});

userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);