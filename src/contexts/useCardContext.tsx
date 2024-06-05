'use client'

import { createContext, useState, useContext } from "react"
import { FlavorsItems, ICardContext, ICardProviderProps, IListFlavors } from "@/dto/IFood"

const CardContext = createContext({} as ICardContext)

const testeFood = {id: 1, price: 100, name: 'queijo', nameTitle: 'pizza', image: '', description: 'pizza da boa'}

export default function CardProvider({children}: ICardProviderProps) {
    const [items, setItems] = useState<IListFlavors[]>([testeFood])
    const [quantity, setQuantity] = useState(0)


    return (<CardContext.Provider value={{ items, setItems, quantity, setQuantity}}>
            {children}
        </CardContext.Provider>)
}

export const useCardContext = () => useContext(CardContext) 


