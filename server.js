const express = require('express');
const app = express();
const port = 4000;

const path = require('path');

//name
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

//url parameters :name/:surname
app.get('/hello/:name/:surname', (req, res) => {
    const name = req.params.name;
    const surname = req.params.surname;
    res.send(`Hello ${name} ${surname}`);
});

app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.status(200).json({ myMovies:movies }); //return JSON response
    //res.json({ movies }); //sending array back
});

//Path module from index.html
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// '/' local host - domain
//listen for HTTP request
app.get('/', (req, res) => { //req- request res - response
    res.send('Welcome to Data Representation & Querying');
});

//html greeting message
app.get('/name', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

//POST form submission
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/name', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

app.use(express.static('public')); //serve static assets 


//error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//always has to be at bottom of file
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); //app is for HTTP request