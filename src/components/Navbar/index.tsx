'use client'

import React from 'react'

import { useWidth } from '@/contexts/useWidth'
import { NavDesktop } from './Desktop'
import { NavMobile } from './Mobile'

export function NavBar() {
  const widthScreen = useWidth()

  return widthScreen < 1200 ? <NavMobile /> : <NavDesktop />
}
