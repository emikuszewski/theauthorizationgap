export interface PersonaContent {
  slug: string
  name: string
  title: string
  hook: string
  pains: string[]
  firstThirtyDays: {
    step: string
    description: string
  }[]
  questionsToAsk: string[]
  trapsToAvoid: string[]
  whenToGoDeeper: string
}

export const personas: PersonaContent[] = [
  {
    slug: 'security-leader',
    name: 'Security Leader',
    title: 'CISO, VP Security, Security Director',
    hook: "You're accountable for access risk, but you can't see it clearly.",
    pains: [
      "Audit requests expose gaps you didn't know existed",
      '"Who has access to what" is a multi-week project',
      "You know authorization is fragmented, but it's hard to prioritize against everything else",
    ],
    firstThirtyDays: [
      {
        step: 'Expose the fragmentation',
        description: 'Ask your teams: "Where does authorization logic live for our top 10 critical applications?" Document the answers—the inconsistency will be revealing.',
      },
      {
        step: 'Use compliance as a lens',
        description: 'Pick one upcoming audit or compliance review. Use it to evaluate your current authorization visibility.',
      },
      {
        step: 'Identify a pilot candidate',
        description: 'Find one business-critical app with known access control pain. This is your potential proof of concept.',
      },
      {
        step: 'Build shared vocabulary',
        description: 'Socialize the maturity model with your architects. Get everyone speaking the same language.',
      },
    ],
    questionsToAsk: [
      'Can we explain *why* any given user has access to a specific resource?',
      "How long would it take to answer an auditor's access question with confidence?",
      'How many different systems or teams own access decisions today?',
    ],
    trapsToAvoid: [
      "Trying to boil the ocean—start with one domain, not the whole enterprise",
      "Assuming your IdP solves this—it handles authentication, not fine-grained authorization",
      "Waiting for a breach or audit finding to prioritize this",
    ],
    whenToGoDeeper: "When you've identified a pilot candidate and need to evaluate approaches (build, OPA, platform), or when you need help building the internal business case.",
  },
  {
    slug: 'architect',
    name: 'Enterprise Architect',
    title: 'Enterprise Architect, Solutions Architect, Technical Architect',
    hook: 'You see the sprawl. Every team solving the same problem differently.',
    pains: [
      'No consistent authorization pattern across the stack',
      'Developers reinventing the wheel, app by app',
      "Zero trust initiatives stalling because AuthZ is the missing layer",
      'Technical debt accumulating faster than you can address it',
    ],
    firstThirtyDays: [
      {
        step: 'Inventory the current state',
        description: 'Map authorization approaches across your top 10-20 services. Where does the logic live? Who owns it? What patterns are used?',
      },
      {
        step: 'Find the pain point',
        description: 'Identify the most painful integration point—the app or domain where access control is blocking progress or causing the most maintenance burden.',
      },
      {
        step: 'Sketch the target state',
        description: 'Design what "externalized authorization" would look like in your architecture. Where would a policy decision point sit? How would apps call it?',
      },
      {
        step: 'Evaluate realistically',
        description: 'Assess one approach (build, OPA, platform) against your specific requirements. Be honest about the build vs. buy tradeoffs.',
      },
    ],
    questionsToAsk: [
      'How many different authorization patterns do we have across our services?',
      "What's the developer cost of maintaining access logic today?",
      'If we needed to add a new access control requirement across all apps, how long would it take?',
    ],
    trapsToAvoid: [
      "Underestimating the long-term cost of DIY—the engine is the easy part",
      "Over-engineering the first iteration—start with a pilot, not a platform",
      "Ignoring the business user angle—policies that only developers can read become bottlenecks",
    ],
    whenToGoDeeper: "When you're ready to design the authorization layer architecture, or when you need to evaluate specific platforms against your integration requirements.",
  },
  {
    slug: 'engineering-lead',
    name: 'Engineering Lead',
    title: 'Engineering Manager, Platform Lead, Tech Lead',
    hook: "Your team is drowning in permission logic that isn't your product.",
    pains: [
      "Every feature touches access control, and it's always more complex than expected",
      'Hardcoded rules that only one person understands',
      'New requirements mean refactoring, not configuration',
      "You're maintaining authorization code instead of building product",
    ],
    firstThirtyDays: [
      {
        step: 'Quantify the tax',
        description: 'How much time did your team spend on access control logic in the last quarter? Include debugging, edge cases, and reviews. Be honest.',
      },
      {
        step: 'Map the current approach',
        description: 'Document the authorization logic in one application. Map every place where access decisions happen. This clarity alone is valuable.',
      },
      {
        step: 'Identify an externalization candidate',
        description: 'Find one policy domain (e.g., "who can access customer data") that could be externalized without touching everything.',
      },
      {
        step: 'Prototype the change',
        description: 'What would it look like to call an external policy decision point instead of inline logic? Even a stub helps visualize the path forward.',
      },
    ],
    questionsToAsk: [
      "What's our actual cost of maintaining access logic? Time, bugs, cognitive load?",
      'If the business asked for a new access rule tomorrow, how fast could we deliver it?',
      'Could a non-developer understand our current permission logic?',
    ],
    trapsToAvoid: [
      "Building your own policy engine—it always starts simple and gets complex fast",
      "Waiting for a top-down mandate—you can advocate from where you sit",
      "Treating this as 'just another service'—authorization has unique requirements like latency, auditability, consistency",
    ],
    whenToGoDeeper: "When you've got a pilot scoped and need help on integration patterns, or when you're building the case to take this to your architect or security lead.",
  },
  {
    slug: 'compliance',
    name: 'Compliance Lead',
    title: 'Compliance Manager, GRC Lead, Risk Manager',
    hook: "You're accountable for proving least privilege, but you don't control the systems.",
    pains: [
      'Access reviews are checkbox exercises, not real risk management',
      "You can't get a clear answer on who has access to what, or why",
      'Audit findings keep coming back to fragmented access control',
      "You're dependent on engineering teams who have other priorities",
    ],
    firstThirtyDays: [
      {
        step: 'Map requirements to capabilities',
        description: 'Where does the policy say you need fine-grained access control, decision logging, or explainability? Document the regulatory requirements.',
      },
      {
        step: 'Document the gaps',
        description: "Identify what you can and can't prove to an auditor—not technically, but in terms of evidence and confidence.",
      },
      {
        step: 'Find your ally',
        description: "This isn't a problem you can solve alone. Partner with security or architecture leadership who can champion the technical work.",
      },
      {
        step: 'Frame the business risk',
        description: "What's the cost of an audit finding? A breach with no explainability? A customer lost because you can't meet their access requirements?",
      },
    ],
    questionsToAsk: [
      'Can we demonstrate least privilege for our most sensitive systems?',
      'How long does it take to produce access evidence for an audit?',
      'Do we have decision logs that show *why* access was granted or denied?',
    ],
    trapsToAvoid: [
      'Accepting "we have roles" as an answer—roles without governance are just labels',
      'Letting this stay in the "IT problem" bucket—it\'s a business risk issue',
      'Waiting for the next audit finding to push for change',
    ],
    whenToGoDeeper: "When you've identified the gaps and need help framing the business case, or when you're evaluating solutions against compliance-specific requirements.",
  },
  {
    slug: 'product-manager',
    name: 'Product Manager',
    title: 'Product Manager, Product Owner (B2B SaaS)',
    hook: "Your biggest deals are asking for access control you can't deliver.",
    pains: [
      'Enterprise customers want granular, configurable permissions—and you\'re saying "not yet"',
      'Every access control feature is a custom build',
      "You're losing deals or delaying closes because of permission limitations",
      'Your roadmap is hostage to access control debt',
    ],
    firstThirtyDays: [
      {
        step: 'Catalog the requests',
        description: "What access control requests have you heard from customers or prospects in the last 6 months? What patterns emerge?",
      },
      {
        step: 'Estimate the revenue impact',
        description: "How many deals were lost, delayed, or discounted because of permission gaps? Put a number on it.",
      },
      {
        step: 'Get the engineering cost',
        description: "Talk to your engineering lead about the current cost of access control features. Get the real number, not the optimistic one.",
      },
      {
        step: 'Reframe authorization as product',
        description: 'Configurable, customer-facing permissions can be a differentiator, not just a cost. Frame it as a capability, not infrastructure.',
      },
    ],
    questionsToAsk: [
      'What access control features have we said "no" to in the last year?',
      "How much revenue is tied to permission flexibility we don't have?",
      'Could we make access control configurable by customers, not just by us?',
    ],
    trapsToAvoid: [
      'Treating every customer request as a one-off custom build',
      'Underestimating how much access control flexibility matters to enterprise buyers',
      'Assuming engineering will prioritize this without a business case',
    ],
    whenToGoDeeper: "When you're building the business case for investment, or when you want to explore how externalized authorization could become a product feature.",
  },
  {
    slug: 'developer',
    name: 'Developer',
    title: 'Software Engineer, Individual Contributor',
    hook: "You're writing permission spaghetti, and you know there's a better way.",
    pains: [
      "Access logic is scattered through the codebase, often duplicated",
      'Every new feature means touching permission code you barely understand',
      "You're the one debugging access issues at 2am",
      "You suspect there's a better pattern, but it's not your call",
    ],
    firstThirtyDays: [
      {
        step: 'Document the pain',
        description: 'Track how much time you spend on access-related code, bugs, and debugging. Concrete data helps when you advocate up.',
      },
      {
        step: 'Map the current approach',
        description: 'Where do access decisions happen in your app? How many places? How consistent is it? Write it down.',
      },
      {
        step: 'Learn the patterns',
        description: 'Read up on externalized authorization—policy decision points, attribute-based access control. Understand what "good" could look like.',
      },
      {
        step: 'Find an ally',
        description: 'Your architect, your lead, someone who can champion this up the chain. You need air cover to make systemic change.',
      },
    ],
    questionsToAsk: [
      'Why does every app handle this differently?',
      'What would it take to externalize our permission logic?',
      'Has anyone evaluated dedicated authorization solutions?',
    ],
    trapsToAvoid: [
      "Trying to fix this alone—it's a systemic issue, not a code fix",
      'Assuming leadership knows how much time this costs',
      'Waiting for permission to learn about better approaches',
    ],
    whenToGoDeeper: "When you're ready to advocate for change, or when you want to prototype a cleaner approach to show what's possible.",
  },
]

export function getPersonaBySlug(slug: string): PersonaContent | undefined {
  return personas.find(p => p.slug === slug)
}

export function getAllPersonaSlugs(): string[] {
  return personas.map(p => p.slug)
}
