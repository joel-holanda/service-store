'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { Product, ProductsSection } from '@/types/IFood'
import { Box, Text } from '@chakra-ui/react'
import { useCardContext } from '@/contexts/useCardContext'
import Image from 'next/image'

type ProductProps = {
  product: Product
  section: ProductsSection
}

export function ProductItem({ product, section }: ProductProps) {
  const { items, setItems, quantity, setQuantity } = useCardContext()

  const addItem = (product: Product) => {
    setItems([...items, product])
    setQuantity(quantity + 1)
  }

  return (
    <motion.div
      className="cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Box
        p="5"
        maxW="400px"
        borderWidth="2px"
        borderRadius="lg"
        key={product.id}
        onClick={() =>
          addItem({ ...product, idTitle: section.id, nameTitle: section.title })
        }
      >
        <div>
          <Image
            className="w-full"
            src={product.image}
            alt={product.description}
            width={100}
            height={100}
          />
        </div>
        <div>
          <Text
            className="text-dark/80"
            mt={2}
            fontSize="xl"
            textAlign={'center'}
            lineHeight="short"
          >
            <strong className="uppercase">{product.name}</strong>
          </Text>
          <Text className="text-sm text-gray-700/75">
            {product.description}
          </Text>
          <Text className="border-t-2 mt-2">R$ {product.price}</Text>
        </div>
      </Box>
    </motion.div>
  )
}
