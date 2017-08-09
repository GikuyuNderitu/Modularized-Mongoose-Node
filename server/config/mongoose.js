const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.connect('mongodb://localhost/basic_person');

const model_path = path.join(__dirname, '..', 'models');

fs.readdirSync(model_path).forEach(function(filename){
    if(filename.indexOf('.js') >= 0) {
        console.log(model_path);
        require(`${model_path}/${filename}`);
    }
});
