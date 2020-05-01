var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//ENDPOINT FOR ROUTES
let projectData = {};

//Body Parser config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cross origin allowance Cors
const cors = require('cors');
app.use(cors());
app.use(express.static('dist'));

// Get ROUTE
app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

//POST ROUTE
app.post('/add', addInfo);

function addInfo(req, res) {
  projectData['depCity'] = req.body.depCity;
  projectData['arrCity'] = req.body.arrCity;
  projectData['depDate'] = req.body.depDate;
  projectData['weather'] = req.body.weather;
  projectData['summary'] = req.body.summary;
  projectData['daysLeft'] = req.body.daysLeft;
  res.send(projectData);
}

//SERVER

const port = 5500;
const server = app.listen(port, listening);

function listening() {
  console.log(`running on localhost: ${port}`);
}
