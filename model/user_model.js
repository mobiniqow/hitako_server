const mongoose = require ('mongoose');
  const { Schema } = mongoose;
  const user = new Schema({
    name :  String, // name user
    family :  String, // user family
    token :  String, // token 
    verify_code :  String, // verify code 
    created_at :  String, // String is shorthand for {type: String}
    updated_at :  String, // String is shorthand for {type: String}
    user_type :  String, // String is shorthand for {type: String}
    user_created :  String, // String is shorthand for {type: String}
    user_created :  String, // // String is shorthand for {type: String}
  });

module.exports = mongoose.model('User',user);