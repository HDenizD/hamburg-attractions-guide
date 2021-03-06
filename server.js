const express = require('./node_modules/express/index.js');
const app = express();
const port = process.env.PORT || 3000;;

app.use('/public',express.static(__dirname + '/public'));
app.use('/node', express.static(__dirname + '/node_modules'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(
    `App listening on port localhost:${port}`);
});
