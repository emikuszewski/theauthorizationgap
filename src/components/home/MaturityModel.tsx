'use client'

import { useState } from 'react'
import { AnimatedSection } from '@/components/shared'
import { motion, AnimatePresence } from 'framer-motion'

const maturityLevels = [
  {
    level: 0,
    name: 'Ad-hoc',
    tagline: 'Authorization by accident.',
    description: 'Access logic is embedded in application code. No consistency across systems. Decisions are invisible and unexplainable. Every app is its own island.',
    color: 'bg-maturity-0',
    borderColor: 'border-maturity-0',
  },
  {
    level: 1,
    name: 'Centralized Identity',
    tagline: 'SSO is in place, but authorization is still fragmented.',
    description: 'You\'ve unified authentication. Roles exist in your IdP. But fine-grained access decisions still happen app by app. The "who can do what" question is still hard to answer.',
    color: 'bg-maturity-1',
    borderColor: 'border-maturity-1',
  },
  {
    level: 2,
    name: 'Emerging Standards',
    tagline: 'Pockets of consistency, but still siloed.',
    description: 'Some teams have externalized policies. Maybe you\'re using a policy engine somewhere. But there\'s no unified approach. Different languages, different patterns, different owners.',
    color: 'bg-maturity-2',
    borderColor: 'border-maturity-2',
  },
  {
    level: 3,
    name: 'Unified Authorization',
    tagline: 'One policy layer across applications.',
    description: 'Policies are externalized and centralized. Access decisions are consistent and auditable. Business logic is separated from application code. You can answer "who has access to what" in minutes, not weeks.',
    color: 'bg-maturity-3',
    borderColor: 'border-maturity-3',
  },
  {
    level: 4,
    name: 'Adaptive & Continuous',
    tagline: 'Real-time, context-aware, zero-trust aligned.',
    description: 'Decisions factor in real-time context—device, location, risk score, time. Policies adapt dynamically. Authorization is infrastructure, not an afterthought.',
    color: 'bg-maturity-4',
    borderColor: 'border-maturity-4',
  },
]

export function MaturityModel() {
  const [activeLevel, setActiveLevel] = useState(1)

  return (
    <section id="maturity-model" className="py-section bg-gray-50 scroll-mt-24">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-section text-navy-900 mb-4">
            Authorization isn't binary. It's a spectrum.
          </h2>
          <p className="text-body text-navy-600 max-w-2xl mx-auto">
            Where does your organization sit today?
          </p>
        </AnimatedSection>

        {/* Desktop Visual Spectrum */}
        <AnimatedSection delay={0.2} className="hidden md:block mb-12">
          <div className="max-w-5xl mx-auto">
            {/* Progress Bar */}
            <div className="relative h-3 bg-gray-200 rounded-full mb-8">
              <motion.div
                className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-maturity-0 via-maturity-2 to-maturity-4"
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              {/* Level Markers */}
              {maturityLevels.map((level) => (
                <button
                  key={level.level}
                  onClick={() => setActiveLevel(level.level)}
                  className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full ${level.color} border-4 border-white shadow-md transition-transform hover:scale-110 ${
                    activeLevel === level.level ? 'scale-125 ring-4 ring-teal-500/30' : ''
                  }`}
                  style={{ left: `${level.level * 25}%`, transform: `translate(-50%, -50%) ${activeLevel === level.level ? 'scale(1.25)' : ''}` }}
                >
                  <span className="sr-only">Level {level.level}</span>
                </button>
              ))}
            </div>

            {/* Level Labels */}
            <div className="flex justify-between text-sm">
              {maturityLevels.map((level) => (
                <button
                  key={level.level}
                  onClick={() => setActiveLevel(level.level)}
                  className={`flex-1 text-center transition-colors ${
                    activeLevel === level.level ? 'text-navy-900 font-semibold' : 'text-navy-500 hover:text-navy-700'
                  }`}
                >
                  <span className="block font-display">Level {level.level}</span>
                  <span className="block text-xs mt-1">{level.name}</span>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Level Detail Card */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLevel}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`p-8 rounded-xl border-2 ${maturityLevels[activeLevel].borderColor} bg-white shadow-lg`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className={`w-12 h-12 rounded-full ${maturityLevels[activeLevel].color} flex items-center justify-center text-white font-bold text-xl`}>
                    {activeLevel}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-navy-900">
                      {maturityLevels[activeLevel].name}
                    </h3>
                    <p className="text-sm text-navy-500 italic">
                      {maturityLevels[activeLevel].tagline}
                    </p>
                  </div>
                </div>
                <p className="text-body text-navy-600">
                  {maturityLevels[activeLevel].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedSection>

        {/* Mobile Level Cards */}
        <div className="md:hidden space-y-4 mt-8">
          {maturityLevels.map((level) => (
            <button
              key={level.level}
              onClick={() => setActiveLevel(level.level)}
              className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                activeLevel === level.level
                  ? `${level.borderColor} bg-white shadow-lg`
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className={`w-8 h-8 rounded-full ${level.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {level.level}
                </span>
                <span className="font-display font-semibold text-navy-900">{level.name}</span>
              </div>
              {activeLevel === level.level && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-sm text-navy-600 mt-3"
                >
                  {level.description}
                </motion.p>
              )}
            </button>
          ))}
        </div>

        {/* Callout */}
        <AnimatedSection delay={0.4} className="mt-12">
          <p className="text-center text-lg text-navy-700 font-medium">
            Most organizations are at Level 1, thinking they're at Level 3.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
