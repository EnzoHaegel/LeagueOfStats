const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const cors = require('cors');

const port = 3000

app.use(cors())
app.use(express.json());
app.use('/api/', indexRouter);
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
