import React from 'react'
import { NavBar } from '@/components/Navbar'
import { ProductsSection } from '@/containers/home-page/products-section'

export default function HomePage() {
  return (
    <div>
      <NavBar />

      <main>
        <ProductsSection />
      </main>
    </div>
  )
}
