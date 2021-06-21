import {isFunction} from './utils'

class EventEmitter {
    listeners = []

    constructor(initialListener) {
        if (isFunction(initialListener)) {
            this.listeners.push(initialListener)
        }
    }

    on = (listener) => {
        if (isFunction(listener)) {
            this.listeners.push(listener)
        }
    }

    emit = (...args) => {
        for (let i = 0; i < this.listeners.length; ++i) {
            this.listeners[i](...args)
        }
    }

    off = (listener) => {
        this.listeners = this.listeners.filter(l => l !== listener)
    }

    offAll = () => {
        this.listeners = []
    }
}

export {EventEmitter}