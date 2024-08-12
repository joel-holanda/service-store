import React from 'react'
import { FaHouse, FaListUl } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/assets/logo.png'

import Card from './Card'

function MenuMobile() {
  return (
    <>
      <div className="h-full w-full">
        <div className="flex items-center w-full bg-primary p-2 gap-2">
          <Image alt="logo" src={Logo} width={100} className="w-10 h-10" />
          <h1 className="text-2xl uppercase text-white">House Food</h1>
        </div>
        <div className="flex justify-center w-full">
          <div className="w-1/2 h-20 fixed bg-gray-300 opacity-7 bottom-0 z-10 flex rounded-md mb-8 justify-between items-center">
            <Link href={'/'}>
              <FaHouse />
            </Link>

            <Link href={'/card'}>
              <Card />
            </Link>

            <Link href={'/order'}>
              <FaListUl />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

function MenuPc() {
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

          <Link href="/card">
            <Card />
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

export { MenuMobile, MenuPc }
