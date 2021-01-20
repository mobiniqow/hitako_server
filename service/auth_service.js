const  authRepo = require('../repository/auth_repository')
const  userRepo = require('../repository/user_repository')
const  helper = require('../util/helpers')
module.exports = {
    sendCode :async function(phone){
        return await authRepo.send_code(phone)
    },
    loginOrRegister:async function(phone,code){
        if(await authRepo.is_verify(phone,code)){
            let foundedUser = await userRepo.isExist(phone) 
            if(foundedUser){
               return userRepo.updateUser(phone,await helper.generateToken({id:foundedUser.id}))
                 
            }else{
                let noTokenUser = await userRepo.saveUser(phone)
                return await userRepo.updateUser(phone,await helper.generateToken({id:noTokenUser.id}))
            }
        } else{
            return false
        }
    }
}