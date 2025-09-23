'use client'

import React, { createContext, useState, useContext } from 'react'
import { ICardContext, ICardProviderProps, IListFlavors } from '@/dto/IFood'

const CardContext = createContext({} as ICardContext)

export default function CardProvider({ children }: ICardProviderProps) {
  const [items, setItems] = useState<IListFlavors[]>([])
  const [quantity, setQuantity] = useState(0)

  return (
    <CardContext.Provider value={{ items, setItems, quantity, setQuantity }}>
      {children}
    </CardContext.Provider>
  )
}

export const useCardContext = () => useContext(CardContext)
