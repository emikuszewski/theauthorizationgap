'use client'

import { AnimatedSection, AnimatedStagger, AnimatedStaggerItem } from '@/components/shared'
import { Clock, FileCheck, Settings, Code, ClipboardCheck } from 'lucide-react'

const outcomes = [
  {
    icon: <Clock size={24} />,
    text: 'Answer audit questions in minutes, not weeks.',
  },
  {
    icon: <Settings size={24} />,
    text: 'Deploy new access policies in days, not quarters.',
  },
  {
    icon: <Code size={24} />,
    text: 'Reduce developer time spent on permission logic by 70%.',
  },
  {
    icon: <FileCheck size={24} />,
    text: 'Say yes to customer access requirements without a 6-month roadmap.',
  },
  {
    icon: <ClipboardCheck size={24} />,
    text: 'Give auditors a clear, explainable trail of every access decision.',
  },
]

export function WhatGoodLooksLike() {
  return (
    <section className="py-section bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-section text-navy-900 mb-4">
            Imagine this instead.
          </h2>
          <p className="text-body text-navy-600 max-w-2xl mx-auto">
            This isn't fantasy. It's what externalized, policy-driven authorization looks like.
          </p>
        </AnimatedSection>

        <AnimatedStagger className="max-w-3xl mx-auto space-y-4">
          {outcomes.map((outcome, index) => (
            <AnimatedStaggerItem key={index}>
              <div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-gray-200 shadow-card hover:shadow-card-hover hover:border-teal-200 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                  {outcome.icon}
                </div>
                <p className="text-body text-navy-700 font-medium">
                  {outcome.text}
                </p>
              </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  )
}
