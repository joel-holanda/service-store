import { SimpleGrid, Box, Text, Image } from '@chakra-ui/react'
import { itens } from "../../mock/food";

import './CardFood.css';

type ITitle = {
    title: string;
};

type IListFlavors = {
    price: number;
    flavor: string;
    image: string;
    description: string;
};

function Title({ title }: ITitle) {
    return (
        <div className="w-full h-10 flex items-center justify-center">
            <h1>{title}</h1>
        </div>
    );
}

function ListFlavor({ price, flavor, image, description }: IListFlavors) {
    return (
        <Box p="5" maxW='400px' borderWidth='2px' borderRadius='lg'>
            <div>
                <Image src={image} alt={description}/>
            </div>

            <div>
                <Text className='text-text' mt={2} fontSize='xl' textAlign={'center'} lineHeight='short'><strong>{flavor.toUpperCase()}</strong></Text>
                <Text className='opacity-75 y-6'>Calabresa, Calabresa,, Calabresa,, Calabresa, Calabresa,Calabresa</Text>
                <Text className='border-t-2 mt-2'>R$ {price}</Text>
            </div>
        </Box>
    );
}

export default function CardFood() {
    return (
        <div className="">
            <div className="">
                {itens.map((item, index) => (
                    <div key={index}>
                        <Title title={item.title} />
                        <SimpleGrid minChildWidth='300px' spacing='80px' className='place-items-center'>
                            {item.listFlavors.map((flavor, index) => (
                                <ListFlavor key={index} price={flavor.price} flavor={flavor.name} image={flavor.image} description={flavor.description}/>
                            ))}
                        </SimpleGrid>
                    </div>
                ))}
            </div>
        </div>
    );
}
