'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  AlertTriangle,
  Share2,
  RotateCcw,
  ExternalLink,
} from 'lucide-react'
import {
  decodeAiResultsFromUrl,
  aiMaturityLevels,
  AiAssessmentResult,
} from '@/lib/assessment-scoring'
import { Button, AnimatedSection } from '@/components/shared'

const tierColors = ['#f4a261', '#e9c46a', '#8ab17d', '#2a9d8f']

function recommendDeepDive(result: AiAssessmentResult) {
  if (
    result.gaps.includes('Distinct identity for AI agents') ||
    result.gaps.includes('User context preservation in agent calls')
  ) {
    return {
      slug: 'agents-nhi-vs-obo',
      title: 'NHI vs OBO: When Each Pattern Fits',
    }
  }
  if (result.gaps.includes('Fine-grained tool and API control')) {
    return {
      slug: 'agents-three-gates',
      title: 'The Three-Gate Model',
    }
  }
  return {
    slug: 'agents-why-existing-fails',
    title: 'Why Existing AuthZ Does Not Extend to Agents',
  }
}

function AiResultsContent() {
  const searchParams = useSearchParams()
  const result = decodeAiResultsFromUrl(searchParams)

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-display font-semibold text-navy-900 mb-4">
              No Results Found
            </h1>
            <p className="text-body text-navy-600 mb-8">
              It looks like you have not completed the assessment yet.
            </p>
            <Button href="/ai-agents/assessment">Take the AI Assessment</Button>
          </div>
        </div>
      </div>
    )
  }

  const levelColor = tierColors[result.level - 1]
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'My AI Authorization Maturity Results',
          text: `I scored Level ${result.level} (${result.levelName}) on the AI Authorization Maturity Assessment.`,
          url: shareUrl,
        })
      } catch (err) {
        // noop
      }
    } else if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(shareUrl)
      alert('Link copied to clipboard')
    }
  }

  const selfAssessmentComparison = () => {
    if (result.selfAssessedLevel === null) return null
    const diff = result.level - result.selfAssessedLevel
    if (diff === 0) return null
    if (diff > 0) {
      return (
        <p className="text-sm text-teal-600 bg-teal-50 px-4 py-2 rounded-lg">
          Good news: your assessment suggests you are slightly ahead of where you thought you were.
        </p>
      )
    }
    return (
      <p className="text-sm text-amber-700 bg-amber-50 px-4 py-2 rounded-lg">
        Your assessment suggests you may be at Level {result.level}, while you estimated Level {result.selfAssessedLevel}. This gap is common, especially for AI, where most teams overestimate their maturity.
      </p>
    )
  }

  const recommended = recommendDeepDive(result)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-4">
              Your Results
            </span>
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-navy-900 mb-2">
              AI Authorization Maturity Assessment
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="card p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <motion.div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-lg"
                  style={{ backgroundColor: levelColor }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.3,
                    type: 'spring',
                    stiffness: 200,
                  }}
                >
                  {result.level}
                </motion.div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-display font-semibold text-navy-900">
                    Level {result.level}: {result.levelName}
                  </h2>
                  <p className="text-navy-500 italic">
                    {result.levelTagline}
                  </p>
                </div>
              </div>

              <p className="text-body text-navy-600 mb-6">
                {result.levelDescription}
              </p>

              {selfAssessmentComparison()}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mb-8">
            <div className="card p-6">
              <h3 className="font-display font-semibold text-navy-900 mb-4">
                Where you sit on the spectrum
              </h3>
              <div className="relative h-3 bg-gray-200 rounded-full mb-6">
                <div className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-maturity-1 via-maturity-3 to-maturity-4 w-full" />
                {aiMaturityLevels.map((level, idx) => (
                  <div
                    key={level.level}
                    className={`absolute top-1/2 w-4 h-4 rounded-full border-2 border-white ${
                      level.level === result.level
                        ? 'ring-4 ring-teal-500/30'
                        : ''
                    }`}
                    style={{
                      left: `${(idx / 3) * 100}%`,
                      transform: 'translate(-50%, -50%)',
                      backgroundColor: tierColors[idx],
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-navy-500">
                {aiMaturityLevels.map((level) => (
                  <span key={level.level}>{level.name}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {result.gaps.length > 0 && (
            <AnimatedSection delay={0.3} className="mb-8">
              <div className="card p-6 border-l-4 border-l-amber-500">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle
                    className="text-amber-500 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <h3 className="font-display font-semibold text-navy-900">
                    Key gaps identified
                  </h3>
                </div>
                <ul className="space-y-2">
                  {result.gaps.map((gap, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-navy-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {gap}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection delay={0.4} className="mb-8">
            <div className="card p-6 bg-teal-50 border-teal-200">
              <h3 className="font-display font-semibold text-navy-900 mb-2">
                Where to go next
              </h3>
              <p className="text-navy-600 mb-4">
                Based on your results, this deep dive is the most relevant starting point:
              </p>
              <Link
                href={`/deep-dive/${recommended.slug}`}
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
              >
                {recommended.title}
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-navy-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Share2 size={18} />
                Share Results
              </button>
              <Link
                href="/ai-agents/assessment"
                className="inline-flex items-center gap-2 px-6 py-3 text-navy-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                <RotateCcw size={18} />
                Retake Assessment
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.6} className="mt-12">
            <div className="text-center p-8 rounded-xl bg-navy-900 text-white">
              <h3 className="font-display text-xl font-semibold mb-2">
                Ready to close the AI authorization gap?
              </h3>
              <p className="text-navy-300 mb-6">
                See how the PlainID Agentic Identity Platform handles agents at runtime.
              </p>
              <a
                href="https://www.plainid.com/ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors"
              >
                See PlainID for AI
                <ExternalLink size={18} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}

export default function AiResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-navy-600">Loading results...</p>
          </div>
        </div>
      }
    >
      <AiResultsContent />
    </Suspense>
  )
}
