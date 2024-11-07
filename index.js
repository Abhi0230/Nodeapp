var express = require('express');

var app = express();
app.get('/', funtion (req, res) {
  res.send('hello Mumbai.!!);
});
app.listen(process.env.PORT || 80);

module.exports=app;


