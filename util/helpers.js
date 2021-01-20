const jwt = require('jsonwebtoken')
module.exports = {
        random_builder : function(min, max) {  
            return Math.floor(
              Math.random() * (max - min) + min
            )
        },
        generateToken:async function(value){ 
          var token = await jwt.sign(value,
             process.env.TOKEN_SECRET_KEY );
          return token;
        }
}