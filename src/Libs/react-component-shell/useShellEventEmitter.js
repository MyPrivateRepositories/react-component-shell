import {
    useEffect,
} from 'react'
import {
    useShell,
} from '.'
import {
    isFunction,
} from './utils'

const useShellEventEmitter = (eventEmitterSelector, listener) => {
    if (!isFunction(eventEmitterSelector) || !isFunction(listener)) {
        throw new TypeError('[[useShellEventEmitter]] arguments type must be a [[Functions]]')
    }
    const shell = useShell()
    const eventEmitter = eventEmitterSelector(shell)

    useEffect(() => {
        eventEmitter.on(listener)
        return () => {
            eventEmitter.off(listener)
        }
    }, [eventEmitter, eventEmitterSelector, listener])
}

export {useShellEventEmitter}