'use client'

import { AnimatedSection } from '@/components/shared'
import { motion } from 'framer-motion'
import { User, HelpCircle, Shield } from 'lucide-react'

export function DecisionLayer() {
  return (
    <section className="py-section bg-white">
      <div className="section-container">
        <AnimatedSection className="prose-container text-center mb-16">
          <h2 className="text-section text-navy-900 mb-6">
            The decision layer is missing.
          </h2>
          
          <div className="space-y-6 text-body text-navy-600">
            <p>
              Identity systems answer <strong className="text-navy-900">"who is this person?"</strong>
            </p>
            <p>
              Authorization answers <strong className="text-navy-900">"what can they do, to what, under what conditions, right now?"</strong>
            </p>
            <p>
              Most organizations have invested heavily in the first question. The second 
              is solved ad-hoc, app by app, team by team. That's the gap.
            </p>
          </div>
        </AnimatedSection>

        {/* Visual Diagram */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* Authentication */}
              <motion.div 
                className="flex flex-col items-center p-6 rounded-xl bg-navy-50 border-2 border-navy-200 w-full md:w-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-navy-100 flex items-center justify-center mb-4">
                  <User size={32} className="text-navy-600" />
                </div>
                <span className="font-display font-semibold text-navy-900 mb-1">Authentication</span>
                <span className="text-sm text-navy-500 text-center">Who is this person?</span>
                <div className="mt-4 px-3 py-1 rounded-full bg-navy-200 text-xs font-medium text-navy-700">
                  Solved ✓
                </div>
              </motion.div>

              {/* Arrow */}
              <div className="text-4xl text-gray-300 transform rotate-90 md:rotate-0">→</div>

              {/* The Gap */}
              <motion.div 
                className="flex flex-col items-center p-6 rounded-xl border-2 border-dashed border-teal-300 bg-teal-50/50 w-full md:w-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <HelpCircle size={32} className="text-teal-600" />
                </div>
                <span className="font-display font-semibold text-teal-700 mb-1">Authorization</span>
                <span className="text-sm text-teal-600 text-center">What can they do?</span>
                <div className="mt-4 px-3 py-1 rounded-full bg-teal-200 text-xs font-medium text-teal-800">
                  The Gap
                </div>
              </motion.div>

              {/* Arrow */}
              <div className="text-4xl text-gray-300 transform rotate-90 md:rotate-0">→</div>

              {/* Access Decision */}
              <motion.div 
                className="flex flex-col items-center p-6 rounded-xl bg-gray-50 border-2 border-gray-200 w-full md:w-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <Shield size={32} className="text-gray-600" />
                </div>
                <span className="font-display font-semibold text-navy-900 mb-1">Access Decision</span>
                <span className="text-sm text-navy-500 text-center">Grant or deny</span>
                <div className="mt-4 px-3 py-1 rounded-full bg-gray-200 text-xs font-medium text-gray-700">
                  Fragmented
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
