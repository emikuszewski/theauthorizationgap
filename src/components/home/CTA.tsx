'use client'

import { AnimatedSection, Button } from '@/components/shared'
import { FileText, Building2, MessageCircle } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-section bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-section text-navy-900 mb-4">
            Ready to go deeper?
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <AnimatedSection delay={0.1}>
            <div className="card p-6 h-full flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-5">
                <FileText size={28} />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy-900 mb-2">
                Take the assessment
              </h3>
              <p className="text-sm text-navy-600 mb-5 flex-grow">
                See where you stand on the maturity spectrum and get a personalized starting point.
              </p>
              <Button href="/assessment" size="sm">
                Start Assessment
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="card p-6 h-full flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-5">
                <Building2 size={28} />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy-900 mb-2">
                Explore PlainID
              </h3>
              <p className="text-sm text-navy-600 mb-5 flex-grow">
                No pitch, just our perspective on solving the authorization gap.
              </p>
              <Button 
                href="https://www.plainid.com" 
                variant="secondary" 
                size="sm"
                external
              >
                Visit PlainID
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="card p-6 h-full flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-5">
                <MessageCircle size={28} />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy-900 mb-2">
                Talk to us
              </h3>
              <p className="text-sm text-navy-600 mb-5 flex-grow">
                When you're ready, we're here.
              </p>
              <Button 
                href="https://www.plainid.com/policy-management-demo/" 
                variant="secondary" 
                size="sm"
                external
              >
                Request a Conversation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
