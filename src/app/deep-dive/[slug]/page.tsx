import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { getDeepDiveBySlug, getAllDeepDiveSlugs, deepDives } from '@/content/deep-dives'
import { AnimatedSection, Button } from '@/components/shared'

export function generateStaticParams() {
  return getAllDeepDiveSlugs().map(slug => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const deepDive = getDeepDiveBySlug(params.slug)
  if (!deepDive) return { title: 'Not Found' }

  return {
    title: `${deepDive.title} | The Authorization Gap`,
    description: deepDive.subtitle,
  }
}

export default function DeepDivePage({ params }: { params: { slug: string } }) {
  const deepDive = getDeepDiveBySlug(params.slug)

  if (!deepDive) {
    notFound()
  }

  const isAiDeepDive = !!deepDive.aiAgent
  const otherDeepDives = deepDives
    .filter(d => d.slug !== params.slug && !!d.aiAgent === isAiDeepDive)
    .slice(0, 2)

  const assessmentHref = isAiDeepDive ? '/ai-agents/assessment' : '/assessment'
  const assessmentLabel = isAiDeepDive ? 'Take the AI Assessment' : 'Take the Assessment'
  const backHref = isAiDeepDive ? '/ai-agents' : '/'
  const backLabel = isAiDeepDive ? 'Back to AI Agents' : 'Back to Overview'
  const plainidHref = isAiDeepDive
    ? 'https://www.plainid.com/ai/'
    : 'https://www.plainid.com/policy-management-demo/'
  const plainidLabel = isAiDeepDive ? 'See PlainID for AI' : 'Talk to PlainID'

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="section-container">
        <AnimatedSection>
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-navy-600 hover:text-teal-600 mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            {backLabel}
          </Link>
        </AnimatedSection>

        <article className="max-w-3xl mx-auto">
          <AnimatedSection className="mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-4">
              Deep Dive
            </span>
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-navy-900 mb-4">
              {deepDive.title}
            </h1>
            <p className="text-xl text-navy-600">
              {deepDive.subtitle}
            </p>
          </AnimatedSection>

          {deepDive.sections.map((section, idx) => (
            <AnimatedSection key={idx} delay={0.1 * (idx + 1)} className="mb-10">
              {section.heading && (
                <h2 className="font-display text-xl font-semibold text-navy-900 mb-4">
                  {section.heading}
                </h2>
              )}

              {section.type === 'list' ? (
                <>
                  {section.content && (
                    <p className="text-body text-navy-600 mb-4">{section.content}</p>
                  )}
                  <ul className="space-y-3">
                    {section.items?.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-navy-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="text-body text-navy-600 leading-relaxed">
                  {section.content}
                </p>
              )}
            </AnimatedSection>
          ))}

          <AnimatedSection delay={0.3} className="mb-12">
            <div className="card p-6 bg-navy-50 border-navy-200">
              <p className="text-body text-navy-700 font-medium">
                {deepDive.closing}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="mb-12">
            <div className="card p-6 bg-teal-50 border-teal-200">
              <h3 className="font-display text-lg font-semibold text-navy-900 mb-2">
                Ready to explore solutions?
              </h3>
              <p className="text-navy-600 mb-6">
                See how PlainID approaches authorization. No pitch, just perspective.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href={assessmentHref}>
                  {assessmentLabel}
                </Button>
                <a
                  href={plainidHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-teal-500 text-teal-600 font-medium rounded-lg hover:bg-teal-50 transition-colors"
                >
                  {plainidLabel}
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {otherDeepDives.length > 0 && (
            <AnimatedSection delay={0.5}>
              <h2 className="font-display text-xl font-semibold text-navy-900 mb-6">
                Continue exploring
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {otherDeepDives.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/deep-dive/${d.slug}`}
                    className="card p-5 hover:border-teal-300 transition-colors group"
                  >
                    <h3 className="font-display font-semibold text-navy-900 group-hover:text-teal-600 transition-colors mb-2">
                      {d.title}
                    </h3>
                    <p className="text-sm text-navy-500 mb-3">{d.subtitle}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-teal-600">
                      Read more <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          )}
        </article>
      </div>
    </div>
  )
}
