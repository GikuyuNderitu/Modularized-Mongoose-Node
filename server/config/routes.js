const main = require('../controllers/users');

module.exports = function(app) {
    app.get('/', main.index);
    app.post('/users', main.create);
}