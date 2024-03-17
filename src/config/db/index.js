const mongoose = require('mongoose');
async function connect() {
    mongoose
        .connect('mongodb://127.0.0.1:27018/education_dev')
        .then(() => console.log('Connected! '))
        .catch(() => console.log('failed! '));
}
module.exports = { connect };
