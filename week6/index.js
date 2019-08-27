const express = require('express')
const app = express()
const port = 3000
router = require('./routes/routes')
middle = require('./middleware/middleware')

app.use('/', router);
// app.use('', middle);
app.get('**',(req, res) => res.redirect('/'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

