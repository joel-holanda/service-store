'use client'

import React from 'react'
import { useCardContext } from '@/contexts/useCardContext'
import { Card, Divider, Grid, GridItem, Heading } from '@chakra-ui/react'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Order() {
  const { items } = useCardContext()

  return (
    <>
      <div className="max-w-screen-md mx-auto flex flex-col gap-5 py-5">
        <Link href={'/'} className="flex gap-1 items-center">
          <ChevronLeft size={26} />
          <span className="text-lg">Voltar</span>
        </Link>

        {items.map((it) => {
          return (
            <>
              <Card key={it.id} className="w-full h-[100px]">
                <Grid templateColumns="100px 1fr" gap={10}>
                  <GridItem>
                    <Image src={it.image} alt="" width={100} height={100} />
                  </GridItem>
                  <GridItem>
                    <Heading as="h4">1x {it.nameTitle}</Heading>
                    <div className="flex justify-between px-3 mt-4 text-1xl">
                      <p>{it.name}</p>
                      <p>R$ {it.price}</p>
                    </div>
                  </GridItem>
                </Grid>
              </Card>
              <Divider className="h-px bg-zinc-400" />
            </>
          )
        })}
      </div>
    </>
  )
}
