'use client'

import { AnimatedSection, AnimatedStagger, AnimatedStaggerItem, Button } from '@/components/shared'
import { Wrench, GitBranch, Building2 } from 'lucide-react'

const tradeoffs = [
  {
    icon: <Wrench size={28} />,
    title: 'Build it yourself',
    description: 'You can. Many teams start here. It works—until the second app, the acquisition, the audit. The question is how long you stay in this phase and what it costs over time.',
    link: '/deep-dive/build-vs-buy',
    linkText: 'The build vs. buy reality',
  },
  {
    icon: <GitBranch size={28} />,
    title: 'Open source (OPA, etc.)',
    description: 'Powerful, flexible, developer-loved. But it\'s an engine, not a platform. You\'ll build the management layer, the integrations, the audit tooling yourself.',
    link: '/deep-dive/opa-vs-platform',
    linkText: 'When OPA makes sense',
  },
  {
    icon: <Building2 size={28} />,
    title: 'An authorization platform',
    description: 'Purpose-built for the problem. Faster to value, but a vendor relationship. The right choice depends on your maturity, scale, and appetite.',
    link: '/deep-dive/what-to-look-for',
    linkText: 'What to look for in a platform',
  },
]

export function Tradeoffs() {
  return (
    <section className="py-section bg-white">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-section text-navy-900 mb-4">
            You have options. Here's how to think about them.
          </h2>
        </AnimatedSection>

        <AnimatedStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tradeoffs.map((item, index) => (
            <AnimatedStaggerItem key={index}>
              <div className="card p-6 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-navy-50 flex items-center justify-center text-navy-600 mb-5">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed flex-grow mb-5">
                  {item.description}
                </p>
                <Button href={item.link} variant="ghost" size="sm" className="self-start -ml-2">
                  {item.linkText}
                </Button>
              </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  )
}
