var express = require('express'),
    app     = express();

app.use(express.static('public'));



app.listen(3000, function(){
  console.log('React server is up');
})