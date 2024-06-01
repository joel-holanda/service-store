"use client";

import Image from "next/image";

import CarrinhoDeCompras from "@/assets/carrinho-de-compras.png";
import { useCardContext } from "@/app/contexts/useCardContext";

export default function Card() {
  const { quantity } = useCardContext();
  
  return (
    <div className=" flex justify-end">
      <Image
        src={CarrinhoDeCompras}
        alt="teste"
        height={50}
        width={50}
        className="w-[50px]"
      />
      <strong className="mt-[-20px] mr-[-10px] text-lg absolute">{quantity}</strong>
    </div>
  );
}
