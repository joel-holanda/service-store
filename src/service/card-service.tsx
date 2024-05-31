'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react"

import { itens, ITitle, IListFlavors } from "@/mock/food"

function CardService(): [number, Dispatch<SetStateAction<number>>] {
    const [quantity, setQuantity] = useState(0)

    return [quantity, setQuantity]

}

export default CardService