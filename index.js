var app = require("express");

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('...');
});

app.listen('3001', function() {
  console.log('app running on http://localhost:3001');
});
