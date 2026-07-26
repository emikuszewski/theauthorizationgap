'use client'

import { AnimatedSection, AnimatedStagger, AnimatedStaggerItem, SymptomCard } from '@/components/shared'

const symptoms = [
  {
    title: 'The audit scramble',
    description: '"Show me everyone who can access customer PII and why." Three weeks, five teams, still not confident in the answer.',
  },
  {
    title: 'The customer request you can\'t meet',
    description: '"We need row-level access based on region, role, and time of day." Six-month custom build. Maybe.',
  },
  {
    title: 'The developer tax',
    description: 'Every app team writing their own permission checks. Same logic, different implementations, endless maintenance.',
  },
  {
    title: 'The access review theater',
    description: 'Annual reviews that are really just managers clicking "approve" because nobody knows what half these entitlements mean.',
  },
  {
    title: 'The role explosion',
    description: 'Started with 10 roles. Now you have 200. And a spreadsheet to track what they all mean.',
  },
]

export function Symptoms() {
  return (
    <section className="py-section bg-gray-50">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-section text-navy-900 mb-4">Sound familiar?</h2>
          <p className="text-body text-navy-600 max-w-2xl mx-auto">
            These are the symptoms of the authorization gap. You might recognize a few.
          </p>
        </AnimatedSection>

        <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {symptoms.map((symptom, index) => (
            <AnimatedStaggerItem key={index}>
              <SymptomCard
                title={symptom.title}
                description={symptom.description}
                className="h-full"
              />
            </AnimatedStaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  )
}
