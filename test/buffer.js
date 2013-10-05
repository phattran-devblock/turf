var g = require('../index'), fs = require('fs')

describe('buffer', function(){
  describe('#index', function(){
    it('should buffer a Point', function(done){
      var p = {
        "type": "Point",
        "coordinates": [
          0,
          0.05
        ]
      }
      g.buffer(p, 10, function(err, buffered){
        //fs.writeFileSync('./testOut/test.geojson',JSON.stringify(buffered))
        done()
      })
    })
  })
}) 