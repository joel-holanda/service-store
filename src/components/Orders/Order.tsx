'use client'

import { useCardContext } from "@/app/contexts/useCardContext"

export default function Order() {
    const {items} = useCardContext()
    console.log(items)
    return(
        <div className="w-full flex justify-center">
            <div className="w-[400px] h-[400px] bg-red-200">
                <h1 className="text-center text-4xl">Pizza</h1>
                <p>Sabores:</p>

                <div>
                    <div className="">
                        {items.map((it) => (
                            <p key={1}>{it.name}</p>
                        ))}
                    </div>
                    <div>

                    </div>
                </div>

                
            </div>
        </div>
    )
}