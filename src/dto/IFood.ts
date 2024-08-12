import { ReactNode, SetStateAction, Dispatch } from 'react'

export type FlavorsItems = {
  id: number
  title: string
  listFlavors: IListFlavors[]
}

export type IListFlavors = {
  id: number
  price: number
  name: string
  image: string
  description: string
  idTitle?: number
  nameTitle?: string
}

export type ICardContext = {
  items: IListFlavors[]
  quantity: number
  setQuantity: Dispatch<SetStateAction<number>>
  setItems: Dispatch<SetStateAction<IListFlavors[]>>
}
export type ICardProviderProps = {
  children: ReactNode
}
