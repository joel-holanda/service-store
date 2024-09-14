import { ReactNode, SetStateAction, Dispatch } from 'react'

export type ProductsSection = {
  id: number
  title: string
  products: Product[]
}

export type Product = {
  id: number
  price: number
  name: string
  image: string
  description: string
  idTitle?: number
  nameTitle?: string
}

export type ICardContext = {
  items: Product[]
  quantity: number
  setQuantity: Dispatch<SetStateAction<number>>
  setItems: Dispatch<SetStateAction<Product[]>>
}
export type ICardProviderProps = {
  children: ReactNode
}
