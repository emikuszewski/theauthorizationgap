'use client'

import { AnimatedSection } from '@/components/shared'

export function UncomfortableTruth() {
  return (
    <section className="py-section bg-white">
      <div className="section-container">
        <AnimatedSection className="prose-container text-center">
          <h2 className="text-section text-navy-900 mb-6 text-balance">
            You're already doing authorization.{' '}
            <span className="text-gradient">Just not well.</span>
          </h2>
          
          <div className="space-y-6 text-body text-navy-600">
            <p>
              Every application makes access decisions. Who can see this record? 
              Who can approve this transaction? Who can access this customer's data?
            </p>
            
            <p>
              The question isn't whether you have authorization. It's whether those 
              decisions are <strong className="text-navy-900">consistent</strong>, {' '}
              <strong className="text-navy-900">explainable</strong>, and {' '}
              <strong className="text-navy-900">manageable</strong>—or scattered 
              across codebases, config files, and tribal knowledge.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
