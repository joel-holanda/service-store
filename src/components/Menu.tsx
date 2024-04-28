'use client'

import  { useState, useEffect, useRef } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
  } from '@chakra-ui/react' 

import Lupa from '@/assets/lupa.png'
import Casa from '@/assets/casa.png'
import CarrinhoDeCompras from '@/assets/carrinho-de-compras.png'
import Logo from '@/assets/logo.jpg'
import Pedido from '@/assets/pedido.png'
import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

function MenuMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  return (
    <div className='bg-menu h-[100%]'>
      <div className='flex justify-between items-center'>
        <HamburgerIcon ref={btnRef} onClick={onOpen} w={50} h={50} />
        <div className='flex'>
                <input type='text' className='w-[180px] sm:w-[400px] h-8 text-xs border-none outline-none' placeholder='Qual vai ser a boa hoje?'/>
                <Image alt='avatar' src={Lupa} className='opacity-50 p-1 ml-[-30px] h-8 w-8'/>
        </div>
        <Image alt='avatar' sizes='100vw' src={Logo} width={100} className=''/>
      </div>
      
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className='bg-tertiary' maxW='200px'> {/* Defina a largura máxima desejada */}
          <DrawerCloseButton className='m-3' justifyContent={'right'}/>
          <DrawerHeader className='text-center'>Menu</DrawerHeader>

          <DrawerBody className='mt-10'>

            <Link href={'/'} className='flex items-center text-center border-b-[1px] border-black border-opacity-6 p-5 mt-1 bg-secondary mx-1'>
              <Image alt='avatar' height='40' width='40' src={Casa} className='mt-1 opacity-80'/>
              <p className='ml-10'>Home</p>
            </Link>

            <Link href={'/card'} className='flex items-center text-center border-b-[1px] border-black border-opacity-6 p-5 mt-1 bg-secondary mx-1'>
              <Image alt='avatar' height='40' width='40' src={CarrinhoDeCompras} className='mt-1 opacity-80'/>
              <p className='ml-10'>Carrinho</p>
            </Link>

            <Link href={'/order'} className='flex items-center text-center border-b-[1px] border-black border-opacity-6 p-5 mt-1 bg-secondary mx-1'>
              <Image alt='avatar' height='40' width='40' src={Pedido} className='mt-1 opacity-80'/>
              <p className='ml-10'>Pedido</p>
            </Link>



          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

function MenuPc() {
    return(
        <div className="h-[100px] border- flex bg-menu justify-around items-center">
            <div>
                <Image alt='avatar' sizes='100vw' src={Logo} width={150} className='rounded-full'/>
            </div>
            <div className='flex'>
                <input type='text' className='w-[500px]  rounded border-0 border-none' placeholder='Pesquise seu pedido'/>
                <Image alt='avatar' height='40' width='40' src={Lupa} className='ml-[-50px] mt-1 opacity-80'/>
            </div>

            <div className='flex'>
                <Link className='flex items-center' href='/'>
                    <Image alt='avatar' height='50' width='50' src={Casa} />
                    <h1 className='ml-1'>Inicio</h1>
                </Link>

                <Link className='flex items-center' href='/card' >
                    <Image alt='avatar' height='50' width='50' src={CarrinhoDeCompras} className='ml-10'/>
                    <h1 className='ml-1'>Carrinho</h1>
                </Link>

                <Link className='flex items-center' href='/order'>
                    <Image alt='avatar' height='50' width='50' src={Pedido} className='ml-10'/>
                    <h1 className='ml-1'>Pedido</h1>
                </Link>
            </div>
        </div>
    )
}

export default function Menu() {
    const [widthScreen, setWidthScreen] = useState(0)
 
    useEffect(() => {
        const handleResize = () => {
            setWidthScreen(document.documentElement.clientWidth)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    if(widthScreen < 1200) return <MenuMobile/>
    return <MenuPc/>
}