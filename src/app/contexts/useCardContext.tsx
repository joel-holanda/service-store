'use client'

import { ReactNode, createContext, SetStateAction, Dispatch, useState, useContext } from "react";

const CardContext = createContext({} as ICardContext)

interface ICardContext{
    items: IItems[];
    quantity: number;
    setQuantity: Dispatch<SetStateAction<number>>;
    setItems: Dispatch<SetStateAction<IItems[]>>
}       

interface IItems {
    name: string;
    price: number;
}

interface ICardProviderProps {
    children: ReactNode
}

export default function CardProvider({children}: ICardProviderProps) {
    const [items, setItems] = useState([{name: 'calabresa', price: 20}]);
    const [quantity, setQuantity] = useState(0)


    return (<CardContext.Provider value={{ items, setItems, quantity, setQuantity}}>
            {children}
        </CardContext.Provider>)
}

export const useCardContext = () => useContext(CardContext)


