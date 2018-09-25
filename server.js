const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/dynamix'));
app.get('/*', function(req, res) {
  res.sendFile(path.join('./dist/dynamix/index.html'));
});
app.listen(process.env.PORT || 8080);