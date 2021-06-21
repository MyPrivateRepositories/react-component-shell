import produce from 'immer'
import {isFunction} from './utils'
import {EventEmitter} from '.'

class Shell {
    state = {}
    onShellStateChange = new EventEmitter()

    setShellState = (cb) => {
        if (!isFunction(cb)) {
            throw new TypeError('[[setShellState]] argument type must be a [[Function]]')
        }
        const prevState = this.state
        this.state = produce(this.state, cb)
        this.onShellStateChange.emit(this.state, prevState)
    }
}

export {Shell}