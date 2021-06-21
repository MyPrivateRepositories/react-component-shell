import {useContext} from 'react'
import {ShellContext} from './context'

const useShell = () => {
    const shell = useContext(ShellContext)
    return shell
}

export {useShell}