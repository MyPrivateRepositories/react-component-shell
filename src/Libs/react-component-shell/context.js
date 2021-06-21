import {createContext} from 'react'
import {Shell} from '.'

const defaultShell = new Shell()

const ShellContext = createContext(defaultShell)

export {ShellContext}