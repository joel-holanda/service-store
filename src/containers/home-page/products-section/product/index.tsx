'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { Product, ProductsSection } from '@/types/IFood'
import ListFlavor from '@/components/ListFood/Flavors'

type ProductProps = {
  product: Product
  section: ProductsSection
}

export function ProductItem({ product, section }: ProductProps) {
  return (
    <motion.div
      className="cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ListFlavor
        id={product.id}
        price={product.price}
        description={product.description}
        image={product.image}
        name={product.name}
        idTitle={section.id}
        nameTitle={section.title}
      />
    </motion.div>
  )
}
