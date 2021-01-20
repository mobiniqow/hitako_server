const User = require('../model/user_model')
module.exports = {
    getUser : async function(phone){
       return await User.find({phone})
    },
    saveUser : async function(phone){
        let user = new User({phone})
        return await user.save()
    },
    isExist : async function(phone){
        let user = await User.find({phone:phone}).exec() 
        if(user){ 
            return user[0] 
        }else{
            return false
        }
    },
    updateUser:async function(phone,token){ 
        let user = await User.find({phone}).exec() 
        if(user){
            user[0].token = token
            return await user[0].save()
        }else{
            return false
        }
    }
}