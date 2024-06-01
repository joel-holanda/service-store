import { Box, Text, Image } from '@chakra-ui/react'
import { IListFlavors } from "@/dto/IFood"
import { useCardContext } from '@/app/contexts/useCardContext'

export default function ListFlavor({ image, description, name, price } : IListFlavors) {
    const { items, setItems, quantity, setQuantity } = useCardContext()

    const addItem = (name: string, price: number) => {
        setItems([...items, {name: name, price: price}])
        setQuantity(quantity + 1)
    }

    return (
          <Box p="5" maxW='400px' borderWidth='2px' borderRadius='lg' onClick={() => addItem(name, price)}>
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