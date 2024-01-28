const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

let webhookData = [];

// Route to receive webhook data
app.post('/webhook', (req, res) => {
    webhookData.push(req.body);
    res.status(200).end();
});

// Route to display webhook data
app.get('/', (req, res) => {
    res.send(`<pre>${JSON.stringify(webhookData, null, 2)}</pre>`);
});

const port = 80;
app.listen(port, () => {
    console.log(`Server is running on http://web.lighton.co.za:${port}`);
});