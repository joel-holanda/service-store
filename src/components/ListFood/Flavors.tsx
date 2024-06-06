import { useCardContext } from '@/contexts/useCardContext'  

import { Box, Text, Image } from '@chakra-ui/react'
import { IListFlavors } from "@/dto/IFood"

export default function ListFlavor({id, price, description, image, name, idTitle, nameTitle }: IListFlavors) {
    const { items, setItems, quantity, setQuantity } = useCardContext()

    const addItem = (flavor: IListFlavors) => {
        console.log(flavor)
        setItems([...items, flavor])
        setQuantity(quantity + 1)
    }

    return (
          <Box p="5" maxW='400px' borderWidth='2px' borderRadius='lg' key={id} onClick={() => addItem({id, price, description, image, name, idTitle, nameTitle })}>
            <div>
                <Image src={image} alt={description}/>
            </div>
            <div>
                <Text className='text-text' mt={2} fontSize='xl' textAlign={'center'} lineHeight='short'><strong>{name}</strong></Text>
                <Text className='opacity-75 y-6'>Calabresa, Calabresa,, Calabresa, Calabresa, Calabresa,Calabresa</Text>
                <Text className='border-t-2 mt-2'>R$ {price}</Text>
            </div>
        </Box>
    )
}