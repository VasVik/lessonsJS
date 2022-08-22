const express = require('express');
const bodyParser = require('body-parser');
const weatherRequest = require('./requests/weather.request');

// api Key 
// 6639664b67c97ed7795e0b8f439609f0

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.render('index')
});

app.post('/', (req, res) => {

    const { city } = req.body;

    weatherRequest(city);
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server started on port 3000...');
});