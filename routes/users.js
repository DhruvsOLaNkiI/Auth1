const mongoose = require('mongoose');
const passport = require('passport');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb+srv://user123:user123@cluster0.ofi5bhc.mongodb.net/?appName=Cluster0')

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
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