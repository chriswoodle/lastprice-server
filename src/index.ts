import 'source-map-support/register'

import * as http from 'http';

import * as debug from 'debug';

const log = debug('app:server');

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';

const PORT = process.env.PORT || 3000;

const app = express()

const server = http.createServer(app);
server.listen(PORT, () => {
    log(`Server listening on port: ${PORT}`);
});

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

console.log('**ready**');