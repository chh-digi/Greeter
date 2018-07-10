import Dispatcher from './dispatcher';

export function changeToBeGreeted(toBeGreeted: string) {
    Dispatcher.dispatch({
        type: "CHANGE_TO_BE_GREETED",
        toBeGreeted
    })
}