//controller.js
const db = require('../models/db.js');
const User = require('../models/UserModel.js');

const controller = {

    getFirstPage: function(req,res){
        res.render('login');
    },

    getHomePage: async function(req, res) {
        console.log("userID: " + req.session.userID);

        db.findOne(User, {_id: req.session.userID}, null, function(result) {
            //res.send(result);
            console.log("result: " + result)
            if(result) {
                console.log("checking if user exist");
                if (req.session.userID) {
                    result.userID = req.session.userID;
                    console.log("user fname: " + result.fname);
                    console.log("user lname: " + result.lname);
                    //res.render('home', result);
                    res.render('home', {
                        user: result
                    });
                } else {
                    result.userID = null;
                    console.log("home error");
                    //res.render('error', result);
                }

            }
            else {
                console.log('There was an error: ');

            }
        });

    },

}

module.exports = controller;