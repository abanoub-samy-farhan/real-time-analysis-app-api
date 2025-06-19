const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 3000;

const { generateSummary } = require('./controllers/postData');

const app = express();
app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Text Summarization API');
})

app.post('/generate', generateSummary);

module.exports = app;
