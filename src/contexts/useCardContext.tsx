'use client'

import React, { createContext, useState, useContext } from 'react'
import { ICardContext, ICardProviderProps, Product } from '@/types/IFood'

const CardContext = createContext({} as ICardContext)

const testeFood = {
  id: 1,
  price: 100,
  name: 'queijo',
  nameTitle: 'pizza',
  image: '',
  description: 'pizza da boa',
}

export default function CardProvider({ children }: ICardProviderProps) {
  const [items, setItems] = useState<Product[]>([testeFood])
  const [quantity, setQuantity] = useState(0)

  return (
    <CardContext.Provider value={{ items, setItems, quantity, setQuantity }}>
      {children}
    </CardContext.Provider>
  )
}

export const useCardContext = () => useContext(CardContext)
