'use client'

import { SimpleGrid } from '@chakra-ui/react'
import { itens } from "../../mock/food"

import ListFlavor from './Flavors'

export default function CardFood() {
    return (
        <div>
            <div>
                {itens.map((item, index) => (
                    <div key={index}>
                        <h1 className="w-full h-20 flex items-center justify-center border-4 border-black border-opacity-60 text-4xl">{item.title}</h1>
                        <SimpleGrid  minChildWidth='150px'  spacing='40px' className='place-items-center'>
                            {item.listFlavors.map((flavor) => (
                                <ListFlavor
                                    id={flavor.id}                         
                                    key={flavor.id}
                                    image={flavor.image}
                                    description={flavor.description}
                                    name={flavor.name}
                                    price={flavor.price}
                                    />
                                ))}
                        </SimpleGrid>
                    </div>
                ))}
            </div>
        </div>
    )
}