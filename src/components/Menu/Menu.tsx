'use client'

import React from 'react'

import { useWidth } from '@/contexts/useWidth'

import { MenuPc, MenuMobile } from './TypesMenu'

export default function Menu() {
  const widthScreen = useWidth()

  return widthScreen < 1200 ? <MenuMobile /> : <MenuPc />
}
