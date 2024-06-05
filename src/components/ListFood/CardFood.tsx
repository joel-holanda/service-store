'use client'

import { itensFood } from "@/mock/food"
import ListFlavor from './Flavors'

import { SimpleGrid } from '@chakra-ui/react'

export default function CardFood() {

    return(
        <div>
            {itensFood.map((it) => (
                <div key={it.id}>
                    <h1 className="w-full h-20 flex items-center justify-center border-4 border-black border-opacity-60 text-4xl">{it.title}</h1>
                    <SimpleGrid  minChildWidth='150px'  spacing='40px' className='place-items-center'>
                            {it.listFlavors.map((flavor) => (
                                <div key={flavor.id} className='cursor-pointer'>
                                    <ListFlavor
                                        id={flavor.id}
                                        price={flavor.price}
                                        description={flavor.description}
                                        image={flavor.image}
                                        name={flavor.name}
                                        idTitle={it.id}
                                        nameTitle={it.title}
                                        />
                                    </div>
                                ))}                                    

                        </SimpleGrid>
                </div>
            ))}
        </div>
    )
}