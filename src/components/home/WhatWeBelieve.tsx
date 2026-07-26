'use client'

import { AnimatedSection } from '@/components/shared'

const beliefs = [
  'We believe authorization is fundamental, not an afterthought.',
  'We believe policies should be readable by the people who understand the business and the people who write code.',
  'We believe access decisions should be explainable, auditable, and fast.',
  'We believe you shouldn\'t need a specialized language to answer "who can access this, and why?"',
]

export function WhatWeBelieve() {
  return (
    <section className="py-section bg-navy-900 text-white">
      <div className="section-container">
        <AnimatedSection className="prose-container text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-400 text-sm font-medium mb-6">
            Our Perspective
          </span>
          
          <div className="space-y-6 text-xl text-navy-200 leading-relaxed">
            {beliefs.map((belief, index) => (
              <p key={index} className="text-balance">
                {belief}
              </p>
            ))}
          </div>

          <p className="mt-10 text-lg text-white font-medium">
            We built PlainID around these beliefs.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
