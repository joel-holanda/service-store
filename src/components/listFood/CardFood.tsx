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
};

// type IItems = {
//     id: number;
//     title: string;
//     listFlavors: IListFlavors;
// }

function Title({ title }: ITitle) {
    return (
        <div className="w-full h-10 flex items-center justify-center">
            <h1>{title}</h1>
        </div>
    );
}

function ListFlavor({ price, flavor, image }: IListFlavors) {
    return (
        <Box p="5" width={300} className='border-2'>
            <div>
                <Image src={image} alt='img food'/>
            </div>

            <div>
                <Text mt={2} fontSize='xl' fontWeight='semibold' lineHeight='short'>{flavor}</Text>
                <Text>{price}</Text>
            </div>
        </Box>
    );
}

export default function CardFood() {
    return (
        <div className="bg-slate-200 rounded-md">
            <div className="h-10 my-5 border-2 border-red-200">
                {itens.map((item, index) => (
                    <div key={index}>
                       <Title title={item.title} />
                       <SimpleGrid columns={4} spacing={5} >
                            {item.listFlavors.map((flavor, index) => (
                                <ListFlavor key={index} price={flavor.price} flavor={flavor.name} image={flavor.image}/>
                            ))}
                       </SimpleGrid>
                    </div>
                ))}
            </div>
        </div>
    );
}
