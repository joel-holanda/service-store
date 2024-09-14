'use client'

import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'

import { ProductsSection } from '@/types/IFood'
import { ProductItem } from '../product'

type ProductSectionProps = {
  section: ProductsSection
}

export function Section({ section }: ProductSectionProps) {
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="flex items-center justify-center text-4xl pt-10 pb-2">
          {section.title}
        </h1>
        <span className="border border-primary border-solid w-[500px] bottom-[128px]"></span>
      </div>

      <SimpleGrid
        minChildWidth="150px"
        spacing="20px"
        className="place-content-center p-5 pt-10"
      >
        {section.products.map((product) => (
          <ProductItem product={product} section={section} key={product.id} />
        ))}
      </SimpleGrid>
    </div>
  )
}
