var express = require('express');
var cors = require('cors');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
	res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ "name": req.file.originalname, "type": req.file.mimetype, "size": req.file.size }));
})

app.get('/', (req, res) => {
	res.sendFile(process.cwd() + '/views/index.html');
});

app.listen(7000, () => {
	console.log('Your app is listening on port 7000') // 7000 chosen as all our DEFRA services use 3000, and I kept "overlapping" and having to kill one service
});
