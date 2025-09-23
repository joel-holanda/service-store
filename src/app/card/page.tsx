import React from 'react'
import Menu from '@/components/Menu/Menu'
import Order from '@/components/Orders/Order'
import Link from 'next/link'

export default function CardPage() {
  return (
    <div>
      <Menu />
      <Order />
      <Link href={'/checkout'}>
      <div className="fixed bottom-0 left-0 w-full flex justify-center h-[50px] bg-orange-500">
          <p className="text-white rounded text-center mb-10">Finalizar pedido</p>
      </div>
      </Link>
    </div>
  )
}
