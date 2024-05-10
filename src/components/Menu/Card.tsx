'use client'

import Image from 'next/image'


import CarrinhoDeCompras from '@/assets/carrinho-de-compras.png'

export default function Card() {
    return (
        <div className='flex ab'>
            <Image src={CarrinhoDeCompras} alt='teste' height={50} width={50} className='mx-5'/>
            <strong className='mt-[-20px] ml-[-20px] text-lg'>2</strong>
        </div>
    )
}