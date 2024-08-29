'use client'

import React from 'react'
import { useCardContext } from '@/contexts/useCardContext'
import { Card } from '@chakra-ui/react'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function Order() {
  const { items } = useCardContext()

  return (
    <>
      <div className="max-w-screen-md mx-auto flex flex-col gap-5 py-5">
        <Link href={'/'} className="flex gap-1 items-center">
          <ChevronLeft size={26} />
          <span className="text-lg">Voltar</span>
        </Link>

        {items.map((it) => (
          <Card key={it.id} className="w-full h-[100px] bg-orange-400">
            <h1 className="text-center text-4xl border-b-2 border-b-sky-200">
              {it.nameTitle}
            </h1>
            <div className="flex justify-between px-3 mt-4 text-1xl">
              <p>{it.name}</p>
              <p>R$ {it.price}</p>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}
