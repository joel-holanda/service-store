import React from 'react'
import CardFood from '@/components/ListFood/CardFood'
import { NavBar } from '@/components/Navbar'

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <CardFood />
    </div>
  )
}
