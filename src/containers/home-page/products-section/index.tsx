import React from 'react'

import { Section } from './section'
import { productsSections } from './constants'

export function ProductsSection() {
  return (
    <>
      <section>
        {productsSections.map((section) => (
          <Section section={section} key={section.id} />
        ))}
      </section>
    </>
  )
}
