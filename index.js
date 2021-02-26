require('dotenv').config();//For handling the environment variables
const path = require('path')
const express = require('express');
const cors = require('cors');
//HTTP-based header mechanism that allows a server to indicate any other origins 
//(domain, scheme, or port) than its own from which a browser should permit loading of resources.

const bodyParser = require('body-parser'); // It is required for parsing request body

const routes = require('./routes');
const handle = require('./handlers');//Handlers are for giving functionality to each endpoints

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', routes.auth);
app.use('/api/polls', routes.poll);

//Used only for production level
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname='client/build/index.html'));
    })
}

app.use(handle.error);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));