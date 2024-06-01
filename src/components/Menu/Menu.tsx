'use client'

import { MenuPc, MenuMobile } from "./TypesMenu"
import { useWidth } from "@/app/contexts/useWith"

export default function Menu() {
  const widthScreen = useWidth()

  return widthScreen < 1200 ? <MenuMobile/> : <MenuPc/>
}