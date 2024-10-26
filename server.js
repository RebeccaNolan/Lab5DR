//Import express framwork - used to create and manage a web server
const express = require('express');
const app = express(); //initialise an instance of espress
const port = 4000; //define the port the server will listen on

const path = require('path'); //defines path module to handle and transform file paths

//route handles GET requests to greet user by name using URL parameters
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`); //send greeting message
});

//URL parameters :name/:surname
app.get('/hello/:name/:surname', (req, res) => {
    const name = req.params.name;
    const surname = req.params.surname;
    res.send(`Hello ${name} ${surname}`); //send greeting message w name + surname
});

//route to send list of movies as a JSON response
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
    res.status(200).json({ myMovies:movies }); //return JSON response with movie data
    //res.json({ movies }); //sending array back
});

//Path module from index.html
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); //sends index.html as a response
});

// '/' local host - domain
//listen for HTTP request
app.get('/', (req, res) => { //req- request res - response, handle requests to the root route
    res.send('Welcome to Data Representation & Querying'); //message
});

//html greeting message from query parameters
app.get('/name', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send(`Hello ${firstname} ${lastname}`); //greeting message name + surname
});

//POST form submission
//import pody-parser to parse URL encoded data for POST requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//POST route to handle form submission, greeting user with form data
app.post('/name', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    res.send(`Hello ${firstname} ${lastname}`); //message name + surname 
});

//server static files from the 'public' directory
//any file in this dir can be accessed directly via URL
app.use(express.static('public')); //serve static assets 

//error handling
app.use((err, req, res, next) => {
    console.error(err.stack); //log error to console
    res.status(500).send('Something went wrong!'); //generic error message
});

//always has to be at bottom of file
//start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); //log message to indicate servers running
}); //app is for HTTP request
