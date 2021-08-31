import React, {useContext, createContext, useState} from 'react'

export const IdContext = createContext()


export const IdProvider = (props) => {
    
    const [id, setId] = useState()

    return (
        <IdContext.Provider value={{id, setId}}>
            {props.children}
        </IdContext.Provider>
    )
}

export const useId = () => useContext(IdContext)
