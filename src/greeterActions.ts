import Dispatcher from './dispatcher';

export class GreeterAction {
    type: string;
    toBeGreeted: string;

    constructor(type: string, toBeGreeted: string) {
        this.type = type;
        this.toBeGreeted = toBeGreeted;
    }
}

export function changeToBeGreeted(toBeGreeted: string) {
    Dispatcher.dispatch(new GreeterAction("CHANGE_TO_BE_GREETED", toBeGreeted));
}