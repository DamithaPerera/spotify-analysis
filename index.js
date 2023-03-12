const express = require('express');
const analysis = require('./module/analysis/analysis.router');


const app = express();
const port = 3000;

app.use(express.json());

app.use('/analysis', analysis)
app.get('/health', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});