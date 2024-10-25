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

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//always has to be at bottom of file
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); //app is for HTTP request