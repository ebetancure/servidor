const express = require ('express');
const app = express();
const cors = require('cors')

require('./database')

app.use(express.json());

app.use(cors())
app.use('/api', require('./routes/index'))

app.listen(3000);
console.log('servidor en el puerto', 3200)