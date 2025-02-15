const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/auth');

require('dotenv').config();
require('./models/db');


const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors())
app.use('/auth',AuthRouter);




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})