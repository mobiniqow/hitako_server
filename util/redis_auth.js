const redis = require('redis')
const utilities = require('./helpers') 
const { promisify } = require('util');
const client = redis.createClient({
    host : process.env.HOST,
    port : 5902,
    password: process.env.REDIS_PASSSWORD
  });
const setAsync = promisify(client.set).bind(client);
const getAsync = promisify(client.get).bind(client);
  client.on('connect', err => {
      if(err){
          console.log('Error redis' + err);
      }else{
          console.log("redis connected")
      }
});

module.exports = {
    send_code:async function(phone_number){
        let code = await utilities.random_builder(10000,99999)
        setAsync(phone_number, code, 'EX', 60);
        return code;
    },
    is_verify:async function(phone_number,code){
      let redis_code = await getAsync(phone_number)
        if(code == redis_code){
            return true
        }else{
            return false
        }
    },
}
