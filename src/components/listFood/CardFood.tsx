'use client'

import { SimpleGrid, Box, Text, Image } from '@chakra-ui/react'
import { itens, ITitle, IListFlavors } from "../../mock/food";
import { useState } from 'react';

// import { addCard } from '@/service/card-service'

function addCard(id:Number) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [card, setCard] = useState([])


    function add() {
        setCard
    }

}

function Title({ title }: ITitle) {
    return (
        <div className="w-full h-20 flex items-center justify-center mt-10 border-4 border-black border-opacity-60 text-4xl">
            <h1>{title}</h1>
        </div>
    );
}

function ListFlavor(flavor: IListFlavors) {
    return (
        <Box p="5" maxW='400px' borderWidth='2px' borderRadius='lg' onClick={() => addCard(id)}>
            <div>
                <Image src={flavor.image} alt={flavor.description}/>
            </div>

            <div>
                <Text className='text-text' mt={2} fontSize='xl' textAlign={'center'} lineHeight='short'><strong>{flavor.name.toUpperCase()}</strong></Text>
                <Text className='opacity-75 y-6'>Calabresa, Calabresa,, Calabresa,, Calabresa, Calabresa,Calabresa</Text>
                <Text className='border-t-2 mt-2'>R$ {flavor.price}</Text>
            </div>
        </Box>
    );
}

export default function CardFood() {
    return (
        <div>
            <div>
                {itens.map((item, index) => (
                    <div key={index}>
                        <Title title={item.title} />
                        <SimpleGrid  minChildWidth='150px'  spacing='40px' className='place-items-center'>
                            {item.listFlavors.map((flavor: IListFlavors) => (
                                <ListFlavor key={flavor.id} flavor={flavor}/>
                            ))}
                        </SimpleGrid>
                    </div>
                ))}
            </div>
        </div>
    );
}
