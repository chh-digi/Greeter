import { EventEmitter } from 'events';

import Dispatcher from './dispatcher';

class greeterStore extends EventEmitter {
    toBeGreeted: string;
    
    handleAction(action) {
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
Dispatcher.register((action: any) => greetStore.handleAction(action));

export default greetStore;