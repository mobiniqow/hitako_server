const mongoose=require("mongoose")
const {Schema}=mongoose;
const plans=new Schema({
    plan_type:String,
    
})
module.exports=mongoose.model('plans',plans)