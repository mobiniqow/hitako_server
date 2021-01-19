const router = require('express').Router()
const redis_auth = require('../util/redis_auth')
router.post('/send_code',async (req,res,next) => {
    let code  = await redis_auth.send_code("09383119460")
    console.log(`niqow ${code}`);
    return res.json({
        "message": code
    })
})
router.post('/verify',(req,res,next)=>{
    let {code,phone} = req.body
    console.log(`${code} :: ${phone}`);
    if(code,phone){
        if(redis_auth.is_verify(phone,code)){
            return res.status(400).json({
                "message": "user created successfully"
            })
            //todo save user to data bases
            // agar dashtim hamchenin shomare e ro login kon 
            //vagarna besaz in user ro bere peykaresh
        }
    }else{
        return res.status(400).json({
            "message": "code or phone is invalidate"
        })
    }
})

module.exports = router