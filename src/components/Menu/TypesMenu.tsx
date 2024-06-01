import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Lupa from '@/assets/lupa.png'
import Casa from '@/assets/casa.png'
import Logo from '@/assets/logo.jpg'
import Pedido from '@/assets/pedido.png'

import Card from './Card'

function MenuMobile() {
  return (
    <div className='h-full w-full'>
      <div className='w-full bg-menu h-16 flex items-center'>
        <Image alt='logo' src={Logo} width={100} className='rounded-full'/>
        <h1 className='text-2xl font-serif'>Buguer King</h1>
      </div>
      <div className='w-full flex justify-center'>
        <div className=' w-1/2 h-20 fixed bg-gray-300 opacity-7 bottom-0 z-10 flex rounded-md mb-8 justify-between items-center'>
          <Link href={'/'}>
            <Image src={Casa} alt='teste' height={50} width={50}/>
          </Link>

          <Link href={'/card'}>
            <Card/>
          </Link>

          <Link href={'/order'}>
            <Image src={Pedido} alt='teste' height={50} width={50} />
          </Link>
        </div>
      </div>
    </div>
  )
}

function MenuPc() {
    return(
        <div className="h-[100px] flex bg-menu justify-around items-center">
            <div>
                <Image alt='avatar' src={Logo} width={150}/>
            </div>
            <div className='flex'>
                <input type='text' className='md:w-60 lg:w-[500px] rounded border-0 border-none ' placeholder='Pesquise seu pedido'/>
                <Image alt='avatar' height='40' width='40' src={Lupa} className='ml-[-50px] mt-1 opacity-80'/>
            </div>

            <div className='flex'>
                <Link className='flex items-center' href='/'>
                    <Image alt='avatar' height='50' width='50' src={Casa} />
                    <h1>Inicio</h1>
                </Link>

                <Link className='flex items-center' href='/card' >
                    <Card/>
                    <h1>Carrinho</h1>
                </Link>

                <Link className='flex items-center' href='/order'>
                    <Image alt='avatar' height='50' width='50' src={Pedido} className='ml-10'/>
                    <h1>Pedido</h1>
                </Link>
            </div>
        </div>
    )
}

export {MenuMobile, MenuPc}