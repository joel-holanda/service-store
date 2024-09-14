import React from 'react'

import { useCardContext } from '@/contexts/useCardContext'
import { Box, Text, Image } from '@chakra-ui/react'
import { Product } from '@/types/IFood'

export default function ListFlavor({
  id,
  price,
  description,
  image,
  name,
  idTitle,
  nameTitle,
}: Product) {
  const { items, setItems, quantity, setQuantity } = useCardContext()

  const addItem = (product: Product) => {
    setItems([...items, product])
    setQuantity(quantity + 1)
  }

  return (
    <>
      <Box
        p="5"
        maxW="400px"
        borderWidth="2px"
        borderRadius="lg"
        key={id}
        onClick={() =>
          addItem({ id, price, description, image, name, idTitle, nameTitle })
        }
      >
        <div>
          <Image src={image} alt={description} />
        </div>
        <div>
          <Text
            className="text-dark/80"
            mt={2}
            fontSize="xl"
            textAlign={'center'}
            lineHeight="short"
          >
            <strong className="uppercase">{name}</strong>
          </Text>
          <Text className="text-sm text-gray-700/75">{description}</Text>
          <Text className="border-t-2 mt-2">R$ {price}</Text>
        </div>
      </Box>
    </>
  )
}
