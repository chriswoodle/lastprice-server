import * as debug from 'debug';

import * as request from 'request';

const log = debug('app:model');

class Model {
    constructor() {
        log('Creating model...')
    }
    private _calling = false;

    private _result: any;

    get result(): any {
        return this._result;
    }

    get calling(): boolean {
        log(`Calling status: ${this._calling}`)
        return this._calling;
    }
    public startCall(query: any) {
        return new Promise((resolve, reject) => {
            log(`Starting call!`)
            this._calling = true;
            var options = {
                method: 'GET',
                url: `${process.env.FLASK_API_HOST}/status`,
                qs: query
            };

            request(options, (error, response, body) => {
                if (error) throw new Error(error);
                console.log(response);
                resolve();
            });
        });
    }

    public getCallStatus() {
        return new Promise((resolve, reject) => {
            log(`Starting call!`)
            this._calling = true;
            var options = {
                method: 'GET',
                url: `${process.env.FLASK_API_HOST}/status`
            };

            request(options, (error, response, body) => {
                if (error) throw new Error(error);
                console.log(response);
                resolve();
            });
        });
    }
}

export const model = new Model();