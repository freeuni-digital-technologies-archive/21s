const express = require('express')
const cors = require('cors')
const allowedOrigins = ['http://localhost:3000', 'http://localhost:8080', '127.0.0.1:3000'];
const options = {
  origin: allowedOrigins
};
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
	console.log('sending hello')
	res.send('hi!')
})

app.listen(port, () => console.log('server started on port ' + port))