const express = require('express');
//brings in express

const app = express();
//initialize app variable with express

app.get('/', (req, res) => res.send('API Running'));
//test: makes a get request reponse  | sends data to browser
const PORT = process.env.PORT || 3000;
//looks for an environment variable called PORT
app.listen(PORT, () => console.log(`Server started on port`))
//app variable listens out for port