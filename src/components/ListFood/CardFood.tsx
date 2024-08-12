'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SimpleGrid } from '@chakra-ui/react'

import { itensFood } from '@/mock/food'

import ListFlavor from './Flavors'

export default function CardFood() {
  return (
    <>
      <div>
        {itensFood.map((it) => (
          <div key={it.id}>
            <div className="flex items-center justify-center flex-col">
              <h1 className="flex items-center justify-center text-4xl pt-10 pb-2">
                {it.title}
              </h1>
              <span className="border border-primary border-solid w-[500px] bottom-[128px]"></span>
            </div>
            <SimpleGrid
              minChildWidth="150px"
              spacing="20px"
              className="place-content-center p-5 pt-10"
            >
              {it.listFlavors.map((flavor) => (
                <motion.div
                  key={flavor.id}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ListFlavor
                    id={flavor.id}
                    price={flavor.price}
                    description={flavor.description}
                    image={flavor.image}
                    name={flavor.name}
                    idTitle={it.id}
                    nameTitle={it.title}
                  />
                </motion.div>
              ))}
            </SimpleGrid>
          </div>
        ))}
      </div>
    </>
  )
}
