'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft, Search } from 'lucide-react'
import { getGlossaryTerms } from '@/content/glossary'
import { AnimatedSection } from '@/components/shared'

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const allTerms = getGlossaryTerms()

  const filteredTerms = useMemo(() => {
    if (!searchQuery.trim()) return allTerms
    const query = searchQuery.toLowerCase()
    return allTerms.filter(
      term => 
        term.term.toLowerCase().includes(query) ||
        term.definition.toLowerCase().includes(query)
    )
  }, [searchQuery, allTerms])

  const groupedTerms = useMemo(() => {
    const groups: Record<string, typeof filteredTerms> = {}
    filteredTerms.forEach(term => {
      const letter = term.term[0].toUpperCase()
      if (!groups[letter]) groups[letter] = []
      groups[letter].push(term)
    })
    return groups
  }, [filteredTerms])

  const letters = Object.keys(groupedTerms).sort()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="section-container">
        <AnimatedSection>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-navy-600 hover:text-teal-600 mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Overview
          </Link>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-4">
              Reference
            </span>
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-navy-900 mb-4">
              Glossary
            </h1>
            <p className="text-xl text-navy-600">
              Authorization has a vocabulary problem. Let&apos;s fix that.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mb-8">
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mb-8">
            <div className="flex flex-wrap gap-2">
              {letters.map(letter => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-teal-100 flex items-center justify-center text-sm font-medium text-navy-600 hover:text-teal-700 transition-colors"
                >
                  {letter}
                </a>
              ))}
            </div>
          </AnimatedSection>

          {filteredTerms.length === 0 ? (
            <AnimatedSection delay={0.3}>
              <div className="text-center py-12">
                <p className="text-navy-500">No terms found matching &quot;{searchQuery}&quot;</p>
              </div>
            </AnimatedSection>
          ) : (
            <div className="space-y-12">
              {letters.map((letter, idx) => (
                <AnimatedSection key={letter} delay={0.1 * idx} id={`letter-${letter}`}>
                  <h2 className="font-display text-2xl font-bold text-teal-600 mb-6 pb-2 border-b border-gray-200">
                    {letter}
                  </h2>
                  <div className="space-y-6">
                    {groupedTerms[letter].map((term) => (
                      <div key={term.term} className="group">
                        <h3 className="font-display text-lg font-semibold text-navy-900 mb-2">
                          {term.term}
                        </h3>
                        <p className="text-navy-600 leading-relaxed mb-2">
                          {term.definition}
                        </p>
                        {term.related && term.related.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs text-navy-400">Related:</span>
                            {term.related.map((related) => (
                              <span
                                key={related}
                                className="text-xs px-2 py-1 rounded-full bg-gray-100 text-navy-500"
                              >
                                {related}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}

          <AnimatedSection delay={0.4} className="mt-16">
            <div className="card p-6 bg-teal-50 border-teal-200 text-center">
              <h3 className="font-display text-lg font-semibold text-navy-900 mb-2">
                Missing a term?
              </h3>
              <p className="text-navy-600 mb-4">
                Authorization is a deep topic. If there&apos;s a term you&apos;d like us to add, let us know.
              </p>
              <a
                href="https://www.plainid.com/policy-management-demo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
              >
                Contact PlainID →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
