const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const toolsRouter = require('./server/routes/tools');
const SuggestRouter = require('./server/routes/suggest');
const path = require("path")
require('dotenv').config();
const app = express();
const port = process.env.PORT;

// DB connection
const DB_URL = process.env.DB_URL;
const mongoose = require('mongoose');
mongoose.connect(DB_URL,
    {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log('Connected to %s', DB_URL);
});

app.use((req, res, next) => {
  res.header({'Access-Control-Allow-Credentials': 'true'});
  next();
});

const corsOptions = {
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));
app.disable('x-powered-by');

// Session stuff
app.use(cookieParser());
app.use(session({
	secret: process.env.SESS_SECRET,
	keys:[process.env.key1,process.env.key2,process.env.key3],
}));

// Body Parser
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb',extended: false}));

// Logging function
app.use((_req, _res, next) => {
	 next();
});

app.use('/tools', toolsRouter);
app.use('/suggest', SuggestRouter);

app.use(express.static(path.join(__dirname,"client","build")))

app.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, function() {
  console.log(`App started on port ${port}`);
});
