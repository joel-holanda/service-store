'use client'

import { useCardContext } from "@/contexts/useCardContext"
import Image from "next/image"

export default function Order() {
    const {items} = useCardContext()
    
    return( 
        <div className="flex flex-col items-center">
            {items.map((it) => 
                <div key={it.id} className="w-1/2 h-[100px] bg-orange-400 mt-[20px]">
                    <h1 className="text-center text-4xl border-b-2 border-b-sky-200">{it.nameTitle}</h1>
                    <div className="flex justify-between px-3 mt-4 text-1xl">
                        <p>{it.name}</p>
                        <p>R$ {it.price}</p>
                    </div>
                </div>
            )}
        </div>
    )
}