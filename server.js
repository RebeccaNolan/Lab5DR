const express = require('express');
const app = express();
const port = 4000;

// '/' local host - domain
//listen for HTTP request
app.get('/', (req, res) => { //req- request res - response
    res.send('Welcome to Data Representation & Querying');
});

// app.get('/whatever', (req, res) => { 
//     res.send('Whatever i want');
// });

app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

app.get('/hello/:name/:surname', (req, res) => {
    const name = req.params.name;
    const surname = req.params.surname;
    res.send(`Hello ${name} ${surname}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//always has to be at bottom of file
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); //app is for HTTP request