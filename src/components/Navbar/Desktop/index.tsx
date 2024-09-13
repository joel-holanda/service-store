import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaListUl, FaSearch } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'

import Logo from '@/assets/logo.png'
import { CartButton } from '../CartButton'

export function NavDesktop() {
  return (
    <>
      <div className="flex items-center justify-around py-2 bg-primary">
        <div>
          <Image src={Logo} alt="Logo" className="w-20 h-auto" />
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className="rounded-e rounded-l p-2 w-[500px] text-light focus:ring-2 ring-secondaryDark"
            placeholder="Pesquise seu pedido"
          />
          <FaSearch size={30} className="ml-[-40px]" />
        </div>

        <div className="flex items-center gap-5">
          <Link href="/">
            <FaHouse
              size={30}
              className="hover:text-secondaryDark duration-all duration-300 ease-in-out 300"
            />
          </Link>

          <Link href="/cart">
            <CartButton />
          </Link>

          <Link href="/order">
            <FaListUl
              size={30}
              className="hover:text-secondaryDark duration-all duration-300 ease-in-out 300"
            />
          </Link>
        </div>
      </div>
    </>
  )
}
