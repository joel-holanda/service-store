'use client'

import { useEffect, useState } from "react"
import { MenuPc, MenuMobile } from "./TypesMenu"

export default function Menu() {
  const [widthScreen, setWidthScreen] = useState<number>(0)

  useEffect(() =>{
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