module.exports =  {
    isPhoneNumber:function(phone){
        return /^((9|09|989|\+989)\d{9})$/.test(phone)
    },
    isValidName:function(name){ 
        // todo is validate name
    }
}