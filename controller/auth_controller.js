const userService = require('../service/auth_service')
const validation = require('../util/validation')
var http = require('http');
module.exports = {
     user_register :async function(req,res,next){
        let {phone} = req.body

        console.log(phone);
        if(phone){
            if(validation.isPhoneNumber(phone)){
                let veryficode = await userService.sendCode(phone)
                if(veryficode){
                    //todo ersal code be shomare telephone phone
                    console.log(`verifycode ${veryficode}`);
                    return res.json({
                        message:`کد برای شما ارسال گردید ${veryficode}`
                    })
                }else{
                    return res.status(400).json({message:"کد یا شماره تلفن اشتباه است"})
                }
            }else{
                return res.status(400).json({
                    message:`شماره وارد شده صحیح نمی باشد`
                })
            }
            
        }else{
                return res.status(400).json({message:"کد یا شماره تلفن اشتباه است"})
        }

     },
     user_verify   : async function (req,res,next){
            let {code,phone} = req.body
            console.log(`${code} :: ${phone}`);
            if(code,phone){
            if(validation.isPhoneNumber(phone)){
                let token = await userService.loginOrRegister(phone,code)
                console.log(token);
                 if(token){
                    return res.json({
                        message:token.token
                    })
                 }else{
                    return res.status(400).json({
                        message:"شماره یا کد اشتباه میباشد"
                    })
                 }
            }else{
                return res.status(400).json({
                    message:"شماره وارد شده صحیح نمی باشد"
                })
            }
            }else{
                return res.status(400).json({
                    "message": "شماره یا کد اشتباه میباشد."
                })
            }
        
     },

     getUserPlan : async function(req , res){


       
           // console.log(req.get('Token'),"hhhhh")
        
           // userService.getPlan(req.get('Token'))


     

      //  return res.json({
         //   message:req.body.token,
          //  test:req.token

   //     })

     }

     
}