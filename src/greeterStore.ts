import { EventEmitter } from 'events';

import Dispatcher from './dispatcher';

import { GreeterAction } from './greeterActions'

class greeterStore extends EventEmitter {
    toBeGreeted: string;
    
    handleAction(action: GreeterAction) {
        switch (action.type) {
            case "CHANGE_TO_BE_GREETED": {
                    this.changeToBeGreeted(action.toBeGreeted)
                }
                break;
            case "SOMETHING": {
                    //Just an example.
                }
                break;
        }
    }

    changeToBeGreeted(toBeGreeted: string) {
        this.toBeGreeted = toBeGreeted;

        this.emit("TO_BE_GREETED_CHANGED")
    }

    getToBeGreeted() {
        return this.toBeGreeted;
    }
}

const greetStore = new greeterStore();
Dispatcher.register((action: GreeterAction) => greetStore.handleAction(action));

export default greetStore;