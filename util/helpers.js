module.exports = {
        random_builder : function(min, max) {  
            return Math.floor(
              Math.random() * (max - min) + min
            )
          }
}