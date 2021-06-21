import {
    useState,
    useEffect,
} from 'react'
import {
    useShell,
    useShellEventEmitter,
} from '.'
import {
    isFunction,
} from './utils'

const useShellState = (selector) => {
    if (!isFunction(selector)) {
        throw new TypeError('[[useShellState]] argument type must be a [[Function]]')
    }
    const shell = useShell()
    const [selectedState, setSelectedState] = useState(selector(shell.state))

    useShellEventEmitter(shell => shell.onShellStateChange, () => {
        if (selector(shell.state) !== selectedState) {
            setSelectedState()
        }
    })
    
    return selectedState
}

export {useShellState}