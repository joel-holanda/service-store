import { Box, Text, Image } from '@chakra-ui/react'
import { IListFlavors } from "../../mock/food"
import CardService from '@/service/card-service'


export default function ListFlavor({ image, description, name, price } : IListFlavors) {
    const [quantity ,setQuantity] = CardService()

    return (
          <Box p="5" maxW='400px' borderWidth='2px' borderRadius='lg' onClick={() => setQuantity(quantity + 1)}>
            <div>
                <Image src={image} alt={description}/>
            </div>
            <div>
                <h1>{quantity}</h1>
                <Text className='text-text' mt={2} fontSize='xl' textAlign={'center'} lineHeight='short'><strong>{name}</strong></Text>
                <Text className='opacity-75 y-6'>Calabresa, Calabresa,, Calabresa,, Calabresa, Calabresa,Calabresa</Text>
                <Text className='border-t-2 mt-2'>R$ {price}</Text>
            </div>
        </Box>
    )
}