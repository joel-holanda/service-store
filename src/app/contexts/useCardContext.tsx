'use client'

import { ReactNode, createContext, SetStateAction, Dispatch, useState, useContext } from "react";

const CardContext = createContext({} as ICardContext)

interface ICardContext {
    quantity: number;
    setQuantity: Dispatch<SetStateAction<number>>;
}

interface ICardProviderProps {
    children: ReactNode
}

export default function CardProvider({children}: ICardProviderProps) {
    const [quantity, setQuantity] = useState(0)
    return (<CardContext.Provider value={{quantity, setQuantity}}>
            {children}
        </CardContext.Provider>)
}

export const useCardContext = () =>  useContext(CardContext)