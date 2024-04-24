import Image from 'next/image'
import Link from 'next/link'

import Lupa from '@/assets/lupa.png'
import Casa from '@/assets/casa.png'
import CarrinhoDeCompras from '@/assets/carrinho-de-compras.png'
import Logo from '@/assets/logo.jpg'
import Pedido from '@/assets/pedido.png'


export default function Menu() {
    return(
        <div className="h-[100px] border- flex bg-menu justify-around items-center">
            <div>
                <Image alt='avatar' sizes='100vw' src={Logo} width={150} className='rounded-full'/>
            </div>
            <div className='flex'>
                <input type='text' className='w-[500px] rounded border-0 border-none' placeholder='Pesquise seu pedido' />
                <Image alt='avatar' height='40' width='40' src={Lupa} className='ml-[-50px] mt-1 opacity-80'/>
            </div>

            <div className='flex'>
                <Link className='flex items-center' href='/'>
                    <Image alt='avatar' height='50' width='50' src={Casa} className=''/>
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