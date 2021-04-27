const express = require('express');

const app = express();

//ROUTES
app.get('/', (req, res) =>{
    res.send('we are on home 2');
});

app.get('/posts', (req, res) =>{
    res.send('we are on home 2 posts');
});

//how to we start listinig to the server
app.listen(3000);