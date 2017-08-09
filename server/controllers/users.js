const mongoose = require('mongoose');
const User = mongoose.model('User')

module.exports = {
    index: function(req, res) {
        User.find({}, function(err, users) {
            if(err) {
                console.log(`Something bad happened getting users ${err}`);
                return
            }
            res.render('index', {users: users})
        })
    },
    create: function(req, res) {
        const body = req.body;
        console.log(`Here's the POST data: ${body.name +' ' + body.color}`);
        const user = new User(body);

        user.save(function(err) {
            if(err) {
                console.log(`Something crappy happenedd`);
                res.status(404).redirect('/')
                return 
            }

            console.log(`Successful db save!`);
            res.redirect('/')
        })
        
    }
}