const mongoose = require ('mongoose');
  const { Schema } = mongoose; 
  const user = new Schema({
    title:  String, // String is shorthand for {type: String}
  });

module.exports = mongoose.model('User',user);