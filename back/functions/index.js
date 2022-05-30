const functions = require("firebase-functions");
const express = require('express');
// const rateLimit = require('express-rate-limit');
const indexRouter = require('./routes/index');
const cors = require('cors')({origin: true});
const app = express();

app.use(cors);
app.use('/api/', indexRouter);

exports.app = functions.https.onRequest(app);

