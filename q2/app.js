const express = require('express');
const balls = require('./8ball');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));

app.get('/', (req, res) => { 
    res.render('index');
});

app.get('/8ball', (req, res) => {
    // Randomize index
    let index = Math.floor(Math.random() * balls.length) - 1;
    console.log(index);
    res.json({ answer : balls[index] });
})

app.listen(3000)

