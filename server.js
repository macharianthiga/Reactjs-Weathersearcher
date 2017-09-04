var express = require('express'),
    app     = express();

app.use(express.static('public'));
var port = process.env.PORT || 3000;



app.listen(port, function(){
  console.log('React server is up');
})
