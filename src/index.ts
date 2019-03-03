import 'source-map-support/register'

import * as http from 'http';

import * as debug from 'debug';

const log = debug('app:server');

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';


import * as utils from './utils';

import { model } from './model';

const PORT = process.env.PORT || 3000;

const app = express();

log(`Server starting on port: ${PORT}`);

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log('**ready**');
});

app.use(cors());

app.use(bodyParser.json());

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/hotels', (req, res) => {
    utils.getHotels().then(response => {
        res.send(response);
    });
});

app.put('/call', (req, res) => {
    log(req.body)
    if (!model.calling) {
        model.startCall();
        res.send('Starting call!');
    } else {
        res.send('Call in progress!');
    }
});

app.get('/callStatus', (req, res) => {
    res.send({ calling: model.calling });
});

app.get('/callResult', (req, res) => {
    res.send({ result: model.result });
});
