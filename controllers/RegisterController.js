const bcrypt = require('bcrypt');
const db = require('../models/db.js');
const User = require('../models/UserModel.js');

const saltRounds = 10;

const signupController = {
    getRegisterPage: function(req,res){
        res.render('signup');
    },
    
    postSignUp: async function(req, res) {
        var fname = req.body.fname;
        var lname = req.body.lname;
        var email = req.body.email;
        var pw = req.body.pw;

        var newuser = {
            fname: fname,
            lname: lname,
            email: email,
            pw: pw
        };

        bcrypt.hash(newuser.pw, saltRounds, function(err, hash) {
            newuser.pw = hash
            db.insertOne(User, newuser, function(flag) {
                db.findOne(User, {
                    email: newuser.email
                }, null, function(result) {
                    console.log(result);
                    console.log("new user added");
                    res.redirect('/');
                })
            })
        })
    },

}

module.exports = signupController;