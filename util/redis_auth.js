const redis = require('redis')
const client = redis.createClient({
    host : process.env.HOST,
    port : 5902,
    password: process.env.REDIS_PASSSWORD
  });
  client.on('connect', err => {
      if(err){
          console.log('Error redis' + err);
      }else{
          console.log("redis connected")
      } 
});

module.exports = {
    send_code:function(code){
        
    }

}
