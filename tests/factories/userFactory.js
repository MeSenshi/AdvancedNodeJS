const mongoos = require('mongoose');
const User = mongoos.model('User');

module.exports = () => {
    return new User({}).save();
};
