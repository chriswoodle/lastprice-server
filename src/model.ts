import * as debug from 'debug';

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
    public startCall() {
        log(`Starting call!`)
        this._calling = true;
    }
}

export const model = new Model();