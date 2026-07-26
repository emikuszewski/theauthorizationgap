import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import {
  AnimatedSection,
  AnimatedStagger,
  AnimatedStaggerItem,
  Button,
} from '@/components/shared'
import { aiMaturityLevels } from '@/lib/assessment-scoring'

export const metadata: Metadata = {
  title: 'AI Agents | The Authorization Gap',
  description:
    'Authentication solved who. Authorization did not solve what. Now agents are in the loop, and the gap just got worse.',
}

const fourRisks = [
  {
    title: 'Who did what?',
    description:
      'When an agent takes an action, can you trace it back to a user, an intent, a policy? Or does the audit trail just say the AI did it?',
  },
  {
    title: 'Should they have been allowed?',
    description:
      'Agents inherit permissions or get their own. Either way, the question is whether each action was within bounds. Most environments cannot answer that for humans, let alone agents.',
  },
  {
    title: 'Can we stop them mid-action?',
    description:
      'A human takes seconds between decisions. An agent makes thousands. By the time you notice something is wrong, the damage is done.',
  },
  {
    title: 'What did they see?',
    description:
      'Agents pull context from everywhere: RAG, retrieval, tool calls. If an agent retrieves data the user should not have, you have created an exposure even if the agent never shows it.',
  },
]

const aiDeepDives = [
  {
    slug: 'agents-nhi-vs-obo',
    title: 'NHI vs OBO',
    subtitle: 'Two patterns for agent identity. When each one fits.',
  },
  {
    slug: 'agents-three-gates',
    title: 'The Three-Gate Model',
    subtitle: 'Authorization at the agent, the tool, and the data. Not just one.',
  },
  {
    slug: 'agents-why-existing-fails',
    title: 'Why Existing AuthZ Does Not Extend to Agents',
    subtitle: 'Speed, volume, chaining, context loss. The same problems, faster.',
  },
]

const tierColors = ['#f4a261', '#e9c46a', '#8ab17d', '#2a9d8f']

export default function AiAgentsPage() {
  return (
    <main>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                Now with agents in the loop
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-display text-hero text-navy-900 mb-6 text-balance">
                The gap, with <span className="text-gradient">agents</span> in the loop.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-subhead text-navy-600 mb-8 max-w-2xl mx-auto text-balance">
                AI agents act on behalf of users, and sometimes on behalf of nothing.
                Same authorization questions. Harder to answer. Faster to fail.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/ai-agents/assessment" size="lg">
                  Take the AI Assessment
                </Button>
                <Button href="#ai-maturity" variant="secondary" size="lg">
                  See the Maturity Model
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="section-container">
          <AnimatedSection className="prose-container text-center">
            <h2 className="text-section text-navy-900 mb-6 text-balance">
              You spent a decade solving access for humans.{' '}
              <span className="text-gradient">Now multiply by N agents.</span>
            </h2>
            <div className="space-y-6 text-body text-navy-600">
              <p>
                Every AI assistant, every copilot, every autonomous agent makes access
                decisions. What data to retrieve. What tools to call. What action to take.
              </p>
              <p>
                Most are doing it with shared credentials, hardcoded API keys, or the
                model account. That worked for proof-of-concept. It does not work in
                production.
              </p>
              <p className="text-navy-900 font-medium">
                The Authorization Gap is not going away. It is getting worse.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-section bg-gray-50">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-section text-navy-900 mb-4">
              Four questions you should be able to answer.
            </h2>
            <p className="text-body text-navy-600 max-w-2xl mx-auto">
              When an agent acts in your environment, these are the questions that
              matter. Most teams cannot answer any of them yet.
            </p>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {fourRisks.map((risk, index) => (
              <AnimatedStaggerItem key={index}>
                <div className="card p-6 h-full border-l-4 border-l-teal-500">
                  <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">
                    {risk.title}
                  </h3>
                  <p className="text-body text-navy-600 leading-relaxed">
                    {risk.description}
                  </p>
                </div>
              </AnimatedStaggerItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      <section id="ai-maturity" className="py-section bg-white scroll-mt-24">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-section text-navy-900 mb-4">
              Where are you on the agent authorization curve?
            </h2>
            <p className="text-body text-navy-600 max-w-2xl mx-auto">
              Four tiers. Most organizations shipping AI today are at Level 1, planning
              for Level 2.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {aiMaturityLevels.map((level, idx) => (
              <AnimatedSection key={level.level} delay={0.1 * idx}>
                <div
                  className="card p-6 md:p-8 border-l-4"
                  style={{ borderLeftColor: tierColors[idx] }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-md"
                      style={{ backgroundColor: tierColors[idx] }}
                    >
                      {level.level}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold text-navy-900 mb-1">
                        Level {level.level}: {level.name}
                      </h3>
                      <p className="text-sm text-navy-500 italic mb-4">
                        {level.tagline}
                      </p>
                      <p className="text-body text-navy-600 leading-relaxed mb-4">
                        {level.description}
                      </p>
                      <ul className="space-y-2">
                        {level.characteristics.map((c, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-navy-600"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-navy-300 mt-2 flex-shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5} className="mt-10 text-center">
            <p className="text-sm text-navy-400">
              Maturity model adapted from the framework on agentic AI authorization at IBM.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-section bg-gradient-to-b from-gray-50 to-white">
        <div className="section-container">
          <AnimatedSection className="prose-container">
            <div className="rounded-card p-8 bg-navy-900 text-white shadow-card">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-medium mb-4">
                Where PlainID fits
              </span>
              <h3 className="font-display text-2xl font-semibold mb-4">
                Built for Levels 3 and 4.
              </h3>
              <div className="space-y-4 text-navy-200">
                <p>
                  The PlainID Agentic Identity Platform treats agents as first-class
                  identities, enforces fine-grained policy at the data, tool, and MCP
                  boundaries, and supports continuous, real-time authorization across
                  the full agent flow.
                </p>
                <p>
                  If your agents are running on shared credentials and a hope, we can
                  help you get to Foundation. If you are already there and need
                  real-time enforcement, that is where we live.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.plainid.com/ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors"
                >
                  See PlainID for AI
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-section text-navy-900 mb-4">Go deeper.</h2>
            <p className="text-body text-navy-600 max-w-2xl mx-auto">
              The questions you will need to answer when you start designing for agents.
            </p>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {aiDeepDives.map((d) => (
              <AnimatedStaggerItem key={d.slug}>
                <Link
                  href={`/deep-dive/${d.slug}`}
                  className="card p-6 h-full block group"
                >
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 text-xs font-medium mb-3">
                    Deep Dive
                  </span>
                  <h3 className="font-display text-lg font-semibold text-navy-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {d.title}
                  </h3>
                  <p className="text-sm text-navy-600 mb-4">{d.subtitle}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-teal-600 font-medium">
                    Read more <ArrowRight size={14} />
                  </span>
                </Link>
              </AnimatedStaggerItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      <section className="py-section bg-gradient-to-b from-white to-gray-50">
        <div className="section-container">
          <AnimatedSection className="prose-container text-center">
            <h2 className="text-section text-navy-900 mb-4">
              Where do you actually stand?
            </h2>
            <p className="text-body text-navy-600 mb-8">
              A 7-question assessment. Honest answers, honest result.
            </p>
            <Button href="/ai-agents/assessment" size="lg">
              Take the AI Assessment
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
