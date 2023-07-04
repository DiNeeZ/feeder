import React, { ReactNode } from 'react'
import More from './more'
import SectionTitle from './section-title'

type SectionProps = {
  children: ReactNode
  title: string
  href?: string
}

const Section = ({ children, title, href }: SectionProps) => {
  return (
    <section className="mt-6 mb-24">
      <div className="container mx-auto pt-8 px-32">
        <div className="flex items-center justify-between mb-12">
          <SectionTitle>{title}</SectionTitle>
          {href && <More href={href} />}
        </div>
        {children}
      </div>
    </section>
  )
}

export default Section