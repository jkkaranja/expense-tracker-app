const express = require('express');
const helmet = require('helmet');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();
app.use(helmet());
app.use(express.static(path.join(__dirname)));

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

https.createServer(options, app).listen(3000, () => {
    console.log("Secure Expense Tracker App running at https://localhost:3000");
});