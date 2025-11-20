var express = require('express');
var router = express.Router();
const userModel = require('../routes/users')
const passport = require('passport')


//in doh line say user login hota h 
const localStrategy = require('passport-local')
passport.authenticate(new localStrategy(userModel.authenticate()))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile', isLoggedIn,function(req, res) {
  res.send("profile");
});

router.get('/register', function(req, res) {
// const userData = new userModel({
//   username:req.body.username,
//   fullName:req.body.fullName,
//   email:req.body.email,
  
// }) //we just created an object of userModel , now we short this code
const {username, fullName, email} = req.body
const userData = new userModel({username, fullName, email})
userModel.register(userData, req.body.password)
.then(function() {
passport.authenticate("local")(req, res, function () {
res.redirect("/profile");
})
});
}); 

router.get('/login', passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/"
}) ,function(req, res) {

});  

router.get("/logout", function(req, res){
req.logout(function(err) {
if (err) { return next(err); }
res.redirect('/');
});
})

function isLoggedIn(req, res, next){
if(req.isAuthenticated())
return next();
res.redirect('/')
}
module.exports = router;
