'use client'

import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

import { useCardContext } from '@/contexts/useCardContext'

export default function Card() {
  const { quantity } = useCardContext()

  return (
    <>
      <div className="flex justify-end hover:text-secondaryDark duration-all duration-300 ease-in-out 300">
        <FaShoppingCart size={30} />
        <strong className="mt-[-20px] mr-[-10px] text-lg absolute">
          {quantity}
        </strong>
      </div>
    </>
  )
}
