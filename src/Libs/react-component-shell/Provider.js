import {ShellContext} from '.'

const Provider = (props) => {
    const {
        shell,
        children,
    } = props

    return (
        <ShellContext.Provider value={shell}>
            {children}
        </ShellContext.Provider>
    )
}

export {Provider}