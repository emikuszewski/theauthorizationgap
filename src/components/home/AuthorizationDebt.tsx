'use client'

import { AnimatedSection } from '@/components/shared'

export function AuthorizationDebt() {
  return (
    <section className="py-section bg-white">
      <div className="section-container">
        <AnimatedSection className="prose-container text-center">
          <h2 className="text-section text-navy-900 mb-6">
            Every shortcut compounds.
          </h2>
          
          <div className="space-y-6 text-body text-navy-600">
            <p>
              Every hardcoded permission check. Every role that's really five roles 
              duct-taped together. Every "just add them to admin for now."
            </p>
            
            <p>
              That's <strong className="text-gradient">authorization debt</strong>. And like 
              all debt, it accrues interest—in audit findings, in slow delivery, in 
              breaches you can't explain.
            </p>
            
            <p className="text-navy-900 font-medium">
              The longer you wait to address it, the more expensive it gets.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
