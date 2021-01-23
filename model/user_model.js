const mongoose = require ('mongoose');
  const { Schema } = mongoose;
  const user = new Schema({
    name :  {type:String},
    phone:{
      type:String,
      unique:true,
      required:true,
    }, // name user
    family :  String, // user family
    token :  String, // token   // verify code 
    created_at :  Number, // String is shorthand for {type: String}
    updated_at :  Number, // String is shorthand for {type: String}
    user_plan :  { 
      type:Number,
       default:0}, // String is shorthand for {type: String}
    user_cridit_one :  String, // String is shorthand for {type: String}
    user_cridit_two :  String, // // String is shorthand for {type: String}
  });
  user.methods.toJSON = function () {
    var obj = this.toObject()
    delete obj._id
    delete obj.__v
    return obj
  }
  user.pre("save", function(next) {
    var self = this;
      console.log(`model ${self}`);
      let current = new Date(Date.now()).getTime()
      if(self.created_at){
        self.updated_at = current
      } else {
        self.updated_at = current
        self.created_at = current
      }
    next()
});
module.exports = mongoose.model('user',user);