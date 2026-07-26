import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, AlertTriangle, HelpCircle, Target, ExternalLink } from 'lucide-react'
import { getPersonaBySlug, getAllPersonaSlugs, personas } from '@/content/personas'
import { AnimatedSection, Button } from '@/components/shared'

export function generateStaticParams() {
  return getAllPersonaSlugs().map(slug => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const persona = getPersonaBySlug(params.slug)
  if (!persona) return { title: 'Not Found' }
  
  return {
    title: `${persona.name} | The Authorization Gap`,
    description: persona.hook,
  }
}

export default function PersonaPage({ params }: { params: { slug: string } }) {
  const persona = getPersonaBySlug(params.slug)
  
  if (!persona) {
    notFound()
  }

  const otherPersonas = personas.filter(p => p.slug !== params.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="section-container">
        {/* Back Link */}
        <AnimatedSection>
          <Link 
            href="/#maturity-model" 
            className="inline-flex items-center gap-2 text-sm text-navy-600 hover:text-teal-600 mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Overview
          </Link>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <AnimatedSection className="mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-4">
              Where to Start
            </span>
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-navy-900 mb-2">
              {persona.name}
            </h1>
            <p className="text-navy-500 mb-6">{persona.title}</p>
            <p className="text-xl text-navy-700 font-medium">
              {persona.hook}
            </p>
          </AnimatedSection>

          {/* The Pain */}
          <AnimatedSection delay={0.1} className="mb-12">
            <div className="card p-6 border-l-4 border-l-amber-500">
              <h2 className="font-display text-lg font-semibold text-navy-900 mb-4">
                The pain you're feeling
              </h2>
              <ul className="space-y-3">
                {persona.pains.map((pain, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-navy-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 flex-shrink-0" />
                    {pain}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* First 30 Days */}
          <AnimatedSection delay={0.2} className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-navy-900 mb-6">
              Your first 30 days
            </h2>
            <div className="space-y-4">
              {persona.firstThirtyDays.map((item, idx) => (
                <div key={idx} className="card p-5">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-navy-900 mb-1">
                        {item.step}
                      </h3>
                      <p className="text-sm text-navy-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Questions to Ask */}
          <AnimatedSection delay={0.3} className="mb-12">
            <div className="card p-6 bg-navy-50 border-navy-200">
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle size={20} className="text-navy-600" />
                <h2 className="font-display text-lg font-semibold text-navy-900">
                  Questions to ask internally
                </h2>
              </div>
              <ul className="space-y-3">
                {persona.questionsToAsk.map((question, idx) => (
                  <li key={idx} className="text-navy-700 pl-4 border-l-2 border-navy-300">
                    {question}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Traps to Avoid */}
          <AnimatedSection delay={0.4} className="mb-12">
            <div className="card p-6 border-l-4 border-l-red-400">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle size={20} className="text-red-500" />
                <h2 className="font-display text-lg font-semibold text-navy-900">
                  Traps to avoid
                </h2>
              </div>
              <ul className="space-y-3">
                {persona.trapsToAvoid.map((trap, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-navy-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0" />
                    {trap}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* When to Go Deeper */}
          <AnimatedSection delay={0.5} className="mb-12">
            <div className="card p-6 bg-teal-50 border-teal-200">
              <div className="flex items-center gap-2 mb-4">
                <Target size={20} className="text-teal-600" />
                <h2 className="font-display text-lg font-semibold text-navy-900">
                  When to go deeper
                </h2>
              </div>
              <p className="text-navy-700 mb-6">
                {persona.whenToGoDeeper}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/deep-dive/build-vs-buy">
                  Explore Build vs. Buy
                </Button>
                <a
                  href="https://www.plainid.com/policy-management-demo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-teal-500 text-teal-600 font-medium rounded-lg hover:bg-teal-50 transition-colors"
                >
                  Talk to PlainID
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Other Personas */}
          <AnimatedSection delay={0.6}>
            <h2 className="font-display text-xl font-semibold text-navy-900 mb-6">
              Other starting points
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherPersonas.map((p) => (
                <Link
                  key={p.slug}
                  href={`/persona/${p.slug}`}
                  className="card p-4 hover:border-teal-300 transition-colors group"
                >
                  <h3 className="font-display font-semibold text-navy-900 group-hover:text-teal-600 transition-colors mb-1">
                    {p.name}
                  </h3>
                  <p className="text-xs text-navy-500 mb-2">{p.title}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-teal-600">
                    View guide <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
