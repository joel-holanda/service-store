import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaHouse } from 'react-icons/fa6'
import { FaListUl } from 'react-icons/fa'

import Logo from '@/assets/logo.png'
import { CartButton } from '../CartButton'

export function NavMobile() {
  return (
    <header className="h-full w-full">
      <div className="flex items-center w-full bg-primary p-2 gap-2">
        <Image alt="logo" src={Logo} width={100} className="w-10 h-10" />
        <h1 className="text-2xl uppercase text-white">House Food</h1>
      </div>

      <nav className="flex justify-center w-full">
        <div className="w-1/2 h-20 fixed bg-gray-300 opacity-7 bottom-0 z-10 flex rounded-md mb-8 justify-between items-center">
          <Link href={'/'}>
            <FaHouse />
          </Link>

          <Link href={'/cart'}>
            <CartButton />
          </Link>

          <Link href={'/order'}>
            <FaListUl />
          </Link>
        </div>
      </nav>
    </header>
  )
}
